<?php

$conn = mysqli_connect("localhost", "root", "", "test");

if(!$conn){
    echo "error";
    exit();
}

$username = $_POST['username'];
$password = $_POST['password'];

if($username == "" || $password == ""){
    echo "error";
    exit();
}

// duplicate check
$check = "SELECT * FROM users WHERE username='$username'";
$result = mysqli_query($conn, $check);

if(mysqli_num_rows($result) > 0){
    echo "exists";
    exit();
}

$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

if(mysqli_query($conn, $sql)){
    echo "success";
} else {
    echo "error";
}

?>