<?php
   $from = $_POST['email']; 
   $name = $_POST['name']; 
   $subject = $_POST['subject'];
   $message = "<p>".$_POST['message']."</p>"; 
   
   //Validate
   if(!empty($from) && !empty($name) && !empty($subject) && !empty($message)){
      if(filter_var($from, FILTER_VALIDATE_EMAIL)){
         sendEmail();
      }
   };
   
   function sendEmail(){
      $from = $_POST['email']; 
      $name = $_POST['name']; 
      $subject = $_POST['subject'];
      $message = "<p>".$_POST['message']."</p>"; 
      $headers = "MIME-Version: 1.0\r\n";
      $headers .= "Content-type: text/html; charset=utf-8\r\n";
      $headers .= 'Reply-To: '.$from . "\r\n";
      $headers .= 'X-Mailer: PHP/' . phpversion();   
      $to = "DIN EMAIL";
      $txt = "<h2 style='margin: 0 0 50px 0'>Du har en email fra ".$name."</h2>".$message;
     
      mail($to, $subject, $txt, $headers);
   };
?>
