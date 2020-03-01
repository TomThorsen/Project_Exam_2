<?php
header('Access-Control-Allow-Origin: *'); 
$establishmentsList = file_get_contents('http://localhost/hotel-api/client/establishments.json');


header('Content-Type: application/json');
echo ($establishmentsList);

?>