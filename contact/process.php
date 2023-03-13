<?php
if(isset($_POST["submit"])) {
	$name = $_POST["userName"];
	$email = $_POST["userEmail"];
	$content = $_POST["content"];

  $conn = mysqli_connect("localhost", "root", "", "timonweb") or die("Connection Error: " . mysqli_error($conn));
mysqli_query($conn, "INSERT INTO tblcontact (user_name, user_email,content) VALUES ('" . $name. "', '" . $email. "','" . $content. "')");
$insert_id = mysqli_insert_id($conn);
if(!empty($insert_id)) {
$message = "Your contact information is saved successfully";
}

require 'send.php';
	$toEmail = "brianmwe425@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $subject, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}


}

?>
