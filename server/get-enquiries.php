<?php
    header('Access-Control-Allow-Origin: *'); 
    $enquiriesList = file_get_contents('http://localhost/hotel-api/client/enquiries.json');
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>