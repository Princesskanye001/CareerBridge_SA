<?php
session_start();

// Database connection
$conn = new mysqli("localhost", "root", "", "careerbridge");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Escape user inputs
$email = $conn->real_escape_string($_POST["email"]);
$password = $_POST["password"];

// Check user
$sql = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
$result = $conn->query($sql);

// Check if user exists
if ($result && $result->num_rows > 0) {

    $user = $result->fetch_assoc();

    // Verify hashed password
    if (password_verify($password, $user["password"])) {

        // Start session
        $_SESSION["user_id"] = $user["id"];
        $_SESSION["fullname"] = $user["fullname"];

        // Redirect to dashboard
        header("Location: ../simulation.html");
        exit();

    } else {
            // Incorrect password
            header("Location: ../index.html?error=incorrect_password");
            exit();
        }
    } else {
        // Email does not exist
        header("Location: ../index.html?error=email_not_found");
        exit();
    }


$conn->close();
?>
