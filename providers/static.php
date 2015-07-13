<?php 
set_time_limit(10000);
ini_set("memory_limit", "256M");
function wwwcopy($link,$file) 
{ 

 
	

   $fp = @fopen($link,"r"); 
   while(!feof($fp)) 
   { 
       $cont.= fread($fp,1024); 
   } 
   fclose($fp); 

   $fp2 = @fopen($file,"w"); 
   fwrite($fp2,$cont); 
   fclose($fp2); 
}

function savePage($id,$fileName){
	$url = "http://careselector.com/providers/?id=" . $id;
	set_time_limit(0);
	$fp = fopen (dirname(__FILE__) . '/' . $fileName, 'w+');//This is the file where we save the    information
	$ch = curl_init(str_replace(" ","%20",$url));//Here is the file we are downloading, replace spaces with %20
	curl_setopt($ch, CURLOPT_TIMEOUT, 50);
	curl_setopt($ch, CURLOPT_FILE, $fp); // write curl response to file
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_exec($ch); // get curl response
	curl_close($ch);
	fclose($fp);
}

//Here


// mkdir("/static_pages", 0700);

$i = 2261;

// for ($i = 2261; $i < 9999; $i++) {
// 	try {
// 	    $url = "http://careselector-core.herokuapp.com/api/providers/" . $i;
// 		$json = file_get_contents($url);
// 		$json_data = json_decode($json, true);
		
		
// 		$new_name = $json_data["data"]["name"] . "-". $json_data["data"]["service_type"] . "-" . $json_data["data"]["address_3"] . ".html";
// 		$new_name = str_replace(array('(', ')', '&', "'"),'', $new_name);
// 		$new_name = strtolower(str_replace(array('   ','  ',' ', '_'), '-', $new_name));
// 		$new_name = preg_replace('/-+/', '-', $new_name);
// 		savePage($i, $new_name); 
//   	} catch (Exception $e) {
// }
// } 

function recurLoop(){
	if ($i < 9999){
		$url = "http://careselector-core.herokuapp.com/api/providers/" . $i;
		$json = file_get_contents($url);
		$json_data = json_decode($json, true);
		
		
		$new_name = $json_data["data"]["name"] . "-". $json_data["data"]["service_type"] . "-" . $json_data["data"]["address_3"] . ".html";
		$new_name = str_replace(array('(', ')', '&', "'"),'', $new_name);
		$new_name = strtolower(str_replace(array('   ','  ',' ', '_'), '-', $new_name));
		$new_name = preg_replace('/-+/', '-', $new_name);
		savePage($i, $new_name);
		$i++;
		recurLoop();
		 }
		else{

		}
}

recurLoop();

?>

