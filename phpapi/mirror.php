<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

	if( FALSE == isset($_GET["port"]) ) {
		error("GET parameter port is not set.");
	}
	$url = base64_decode($_GET["port"]);
	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
		$curl = curl_init($url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$headers = array(
			'X-Requested-With: XMLHttpRequest'
		);
	}else{		
		$curl = curl_init($url);
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$headers = array(
		   "Accept: application/json"
		);		
	}
	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
	$resp = curl_exec($curl);
	curl_close($curl);
	echo ($resp);
?>

