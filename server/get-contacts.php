<?php
    header('Access-Control-Allow-Origin: *'); 
    $contactList = file_get_contents('/customers/b/c/1/sleekdesign.no/httpd.www/hotel-api/client/contact.json');
    header('Content-Type: application/json');
    echo ($contactList);
?>