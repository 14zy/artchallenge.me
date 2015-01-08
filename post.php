<?php
  $email = $_POST['email'];
  $fp = fopen("emails.txt", "a");
  $savestring = $email . ";\n";
  fwrite($fp, $savestring);
  fclose($fp);
?>