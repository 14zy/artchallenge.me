<?php
  $email = $_POST['email'];
  $fp = fopen("emails.txt", "a");
  $savestring = $name . ";\n";
  fwrite($fp, $savestring);
  fclose($fp);
?>