<?php
header('Access-Control-Allow-Origin: *'); 
//Creates a class called Enquiry
class Enquiry
{
    public $contactTime;
    public $contactDate;
    public $establishment;
    public $fromDate;
    public $toDate;
    public $firstName;
    public $lastName;
    public $emailAddress;
    public $phoneNumber;
    public $homeAddress;
    public $postNumber;
    public $adultGuests;
    public $childGuests;
    public $textMessage;
    public $hotelID;
}
//Added function to add time and date
$dateVar = date('Y-m-d');
$timeVar = date('H:i:s');

//Creates new enquiry and sets properties
$newEnquiry = new Enquiry();
$newEnquiry->contactTime = $timeVar;
$newEnquiry->contactDate = $dateVar;
$newEnquiry->establishment = $_POST["establishment"];
$newEnquiry->fromDate = $_POST["fromDate"];
$newEnquiry->toDate = $_POST["toDate"];
$newEnquiry->firstName = $_POST["firstName"];
$newEnquiry->lastName = $_POST["lastName"];
$newEnquiry->emailAddress = $_POST["emailAddress"];
$newEnquiry->phoneNumber = $_POST["phoneNumber"];
$newEnquiry->homeAddress = $_POST["homeAddress"];
$newEnquiry->postNumber = $_POST["postNumber"];
$newEnquiry->adultGuests = $_POST["adultGuests"];
$newEnquiry->childGuests = $_POST["childGuests"];
$newEnquiry->textMessage = $_POST["textMessage"];
$newEnquiry->hotelID = $_POST["hotelID"];

//Adds object to array
$enquiriesList = file_get_contents('http://localhost/hotel-api/client/enquiries.json');
$jsonInput = json_decode($enquiriesList, true);
array_push($jsonInput, $newEnquiry);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
file_put_contents('http://localhost/hotel-api/client/enquiries.json', $jsonData);
?>
