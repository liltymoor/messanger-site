<?php

$sqli = false;
global $sqli;

$sqli = new mysqli("localhost", "root", "root", "test_db");
$sqli->query("SET NAMES 'utf-8'");

$sqliResult->query("SELECT a FROM 'test_1'");
echo $sqliResult

function DB_close(){
  global $sqli;
  $sqli->close();
}

?>