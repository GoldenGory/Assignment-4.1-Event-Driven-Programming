//Below I start a function. A function is a way we can call a specific task to work in HTML. For the task below,
//I want my user's input to follow three rules:
//1) The full name (last name and first name) cannot exceed 20 letters in length.
//2)The full name cannot be less than 3 letters or remain blank.
//3) My user's zipcode may not exceed 5 numbers in length or go below that.
//otherwise, if they have the perfect length in all three input items, 
//we will send the user to the index page after displaying an alert that they entered the correct information.

function checksub()

{

    //These variables both help me in creating new names for my HTML items to better call them to the js document
    //and ALSO ask my javascript to remember them.


var name = document.getElementById("username").value;
var Lname = document.getElementById("username2").value;
var zip = document.getElementById("zipcode").value;

//Below I create a variable name FOR two of my variables combined. I ask that this variable
//both adds my name and my Lname together. Then I can grab the entire length of both those names 
//without having to type those two. I can just call forth my fullName to get the total length.
//If the length of the entire name is more than 20 letters, and less than 3, I have the script 
//take that previous id from my paragraph in the HTML and replace it's inner text via .innerHTML
//To replace its text from earlier (Please log in to view the site.) with "User name incorrect!".

var fullName = name+ " " + Lname;

    if (fullName.length > 20  || fullName.length < 3)
 {
   document.getElementById("loginstate").innerHTML = "User name incorrect!";
}

//Here, I say that, else, if the zipcode length is more than the number 99999, and less than 10000, I have the script 
//take that previous id from my paragraph in the HTML and replace it's inner text via .innerHTML
//To replace its text from earlier (Please log in to view the site.) with "Zipcode is incorrect!".

else if (zip > 99999 || zip < 10000)
{
    document.getElementById("loginstate").innerHTML = "Zipcode is incorrect!";
}

//Below, if the above two statements play and seem alright, we do something ELSE:
//The code will play an alert at the top of the page with a sentence saying the user answered correctly
//and we use location.replace to bring the user to the index page
//As taken from my notes: "Location.replace will ‘replace’ our web page with another page once conditions are met. 
//Replacing the page will disable the ability to go ‘back’ to the login page; no one really wants to use the back 
//button for that anyway (a work around could be a button on the index page linking back to a blank login, 
//but I did not want that)."

else 
{
   alert("Both name and zipcode are CORRECT! Welcome to the page.");
   location.replace("index.html");
}

}