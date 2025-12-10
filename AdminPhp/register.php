<?php
// Database connection
$servername = "localhost";
$username = "root";      // your database username
$password = "";          // your database password
$dbname = "careerbridge"; // your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password for security
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert into database
$sql = "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $fullname, $email, $hashed_password);

if ($stmt->execute()) {
    header("Location: ../success.php");
    exit();
} else {
    echo "<script>alert('Error: Could not register.'); window.history.back();</script>";
}


$stmt->close();
$conn->close();
?>
