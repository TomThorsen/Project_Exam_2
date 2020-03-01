<?php
header('Access-Control-Allow-Origin: *'); 
//Creates a class called Contact
class Establishment
{
  //To add more variables create the variable name here and set below
    public $hotelName;
    public $hotelEmail;
    public $hotelImgUrl;
    public $price;
    public $hotelStars;
    public $maxGuests;
    public $googleLat;
    public $googleLong;
    public $hotelDescription;
    public $selfCatering;
    public $id;
}

//Creates new establishment and sets properties
$newEstablishment = new Establishment();
$newEstablishment->hotelName = $_POST["hotelName"];
$newEstablishment->hotelEmail = $_POST["hotelEmail"];
$newEstablishment->hotelImgUrl = $_POST["hotelImgUrl"];
$newEstablishment->hotelStars = $_POST["hotelStars"];
$newEstablishment->price = $_POST["price"];
$newEstablishment->maxGuests = $_POST["maxGuests"];
$newEstablishment->googleLat = $_POST["googleLat"];
$newEstablishment->googleLong = $_POST["googleLong"];
$newEstablishment->hotelDescription = $_POST["hotelDescription"];
$newEstablishment->selfCatering = $_POST["selfCatering"];
$newEstablishment->id = $_POST["id"];

//Adds object to array
$establishmentsList = file_get_contents('http://localhost/hotel-api/client/establishments.json');
$jsonInput = json_decode($establishmentsList, true);
array_push($jsonInput, $newEstablishment);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
file_put_contents('http://localhost/hotel-api/client/establishments.json', $jsonData);
?>
