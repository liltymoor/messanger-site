<?php
$sqli = false;

function DB_connection() {
  global $sqli;
  $sqli = new mysqli("localhost", "root", "root", "test_1");
  $sqli->query("SET NAMES 'utf-8'");
}

function DB_close(){
  global $sqli;
  $sqli->close();
}
?>
