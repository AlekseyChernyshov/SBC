<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);


$mail->setForm('ubiru77@gmail.com');
$mail->addAdress('ubiru77@gmail.com')
$mail->Subject = 'заявка';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];


mail("ubiru77@gmail.com", "Заявка с сайта", "ИМЯ:".$name.". E-mail: ".$email ,"From: ubiru77@gmail.com.ru \r\n");
?>
