<?php
error_reporting(0);
session_start();
require_once 'esc/index.php';

$src = "app";
$ip = $_SERVER["REMOTE_ADDR"];
$file = fopen("logs.txt", "a");
fwrite($file, $ip . "  -  " . gmdate("Y-n-d") . "\n");
header("location:$src");