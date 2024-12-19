const { parse } = require('querystring');

module.exports = (req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = parse(body);
            const { name, dob, email, phone, address, gender } = parsedBody;

            // Validate form fields
            if (!name || !dob || !email || !phone || !address || !gender) {
                res.status(400).send('All fields are required!');
                return;
            }

            // Validate email format
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                res.status(400).send('Invalid email format!');
                return;
            }

            // Respond with the submitted information
            res.status(200).send(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Form Submission Result</title>
                    <link rel="stylesheet" href="/styles.css">
                </head>
                <body>
                    <div class="container">
                        <h1>Form Submission Result</h1>
                        <div id="result">
                            <h2>Submitted Information</h2>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Date of Birth:</strong> ${dob}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Phone:</strong> ${phone}</p>
                            <p><strong>Address:</strong> ${address.replace(/\n/g, '<br>')}</p>
                            <p><strong>Gender:</strong> ${gender}</p>
                        </div>
                    </div>
                </body>
                </html>
            `);
        });
    } else {
        res.status(405).send('Invalid request!');
    }
};
