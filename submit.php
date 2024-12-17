<?php
// Initialize variables to avoid undefined variable notices
$name = $dob = $email = $phone = $address = $gender = '';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and capture form data
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $dob = isset($_POST['dob']) ? htmlspecialchars($_POST['dob']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
    $address = isset($_POST['address']) ? htmlspecialchars($_POST['address']) : '';
    $gender = isset($_POST['gender']) ? htmlspecialchars($_POST['gender']) : '';

    // Additional validation for the form fields (example)
    if (empty($name) || empty($dob) || empty($email) || empty($phone) || empty($address) || empty($gender)) {
        echo "All fields are required!";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit;
    }
} else {
    echo "Invalid request!";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission Result</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Form Submission Result</h1>
        <div id="result">
            <h2>Submitted Information</h2>
            <p><strong>Name:</strong> <?php echo $name; ?></p>
            <p><strong>Date of Birth:</strong> <?php echo $dob; ?></p>
            <p><strong>Email:</strong> <?php echo $email; ?></p>
            <p><strong>Phone:</strong> <?php echo $phone; ?></p>
            <p><strong>Address:</strong> <?php echo nl2br($address); ?></p>
            <p><strong>Gender:</strong> <?php echo $gender; ?></p>
        </div>
    </div>
</body>
</html>
