<?php
header('Access-Control-Allow-Origin: *');
//Creates a class called Message
class Message
{
    public $username;
    public $password;
    public $isAdmin;
}
//Creates new message and sets properties
$newMessage = new Message();
$newMessage->username = $_POST["username"];
$newMessage->password = $_POST["password"];
$newMessage->isAdmin = $_POST["isAdmin"];

//Adds object to array
$messagesList = file_get_contents('http://localhost/hotel-api/client/users.json');
$jsonInput = json_decode($messagesList, true);
array_push($jsonInput, $newMessage);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
file_put_contents('http://localhost/hotel-api/client/users.json', $jsonData);
?>
