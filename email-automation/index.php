<?php
require("sendgrid-php/sendgrid-php/sendgrid-php.php");
$mail = file_get_contents("mail.html");
$template = "";

function sendemail($to, $from, $subject, $html){
	$sendgrid = new SendGrid('careselector', 'billybear1234!');
	$email    = new SendGrid\Email();
	$email->addTo($to)
	      ->setFrom($from)
	      ->setSubject($subject)
	      ->setHtml($html);
	try {
	    $sendgrid->send($email);
	} catch(\SendGrid\Exception $e) {
	    echo $e->getCode();
	    foreach($e->getErrors() as $er) {
	        echo $er;
	    }
	}
}

function getinfo($temp){
	$url = "http://careselector-core.herokuapp.com/api/providers/for-emails";
	$json = file_get_contents($url);
	$json_data = json_decode($json, true);
	$template = $temp;
	if($json_data["data"]["terms_agreed"] == false)  {
		$template = str_replace("%ORGANIZATION%", $json_data["data"]["name"], $template);
		$template = str_replace("%TIMES_SEARCHED%", $json_data["data"]["no_of_searched"], $template);
		$template = str_replace("%TIMES_SHORTLISTED%", $json_data["data"]["no_of_shortlisted"], $template);
		$template = str_replace("%COMPETITOR1%", "Little Haven", $template);
		$template = str_replace("%COMPETITOR2%", "Highlands Borders Care Home", $template);
		$template = str_replace("%COMPETITOR3%", "Belmont Grange Nursing and Residential Home", $template);
		sendemail("raf@wearecreatrix.com", "info@careselector.com", $json_data["data"]["name"] . " appeared in " . $json_data["data"]["no_of_searched"] . "searches", $template);
	} 
	
}

getinfo($mail);
echo "Done!";
?>