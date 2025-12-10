<?php
// Optional: check if they came from register
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Successful</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .card {
            background: white;
            padding: 40px;
            border-radius: 10px;
            text-align: center;
            width: 350px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        h2 {
            color: rgba(0, 255, 255, 0.5);
            margin-bottom: 10px;
        }

        p {
            color: #555;
            margin-bottom: 20px;
        }

        a {
            display: inline-block;
            padding: 12px 20px;
            background: rgba(0, 255, 255, 0.5);
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }

        a:hover {
            background: rgba(0, 255, 255, 0.5);
        }

        .small {
            margin-top: 10px;
            font-size: 13px;
            color: #888;
        }
    </style>

    <meta http-equiv="refresh" content="3; url=/careerbridge_sa/CareerBridge_SA-main/index.html?showLogin=true">

</head>
<body>

    <div class="card">
        <h2>✔ Registration Successful!</h2>
        <p>Your account has been created.</p>
       <a href="/careerbridge_sa/CareerBridge_SA-main/index.html?showLogin=true">
    Go to Login
</a>


        <p class="small">Redirecting in 3 seconds...</p>
    </div>

</body>
</html>
