<?php

/*
|------------------------------------------------------------------------------
| Server-Sent Events
|------------------------------------------------------------------------------
*/

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

while(1) {

	$price = rand(5000,6000);

	echo "data: $price" . PHP_EOL . PHP_EOL;

	ob_end_flush();
	flush();

	sleep(5);

}