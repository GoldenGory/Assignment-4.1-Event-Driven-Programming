//Below I start a function. A function is a way we can call a specific task to work in HTML. For the task below,
//I want my javascript to check a user's input word to check if it is a palindrome.

function reverse()
{

//Here I grab my firststring id and give it the name os str1; this being a variable also
//asks my javascript to save and remember this.

    var str1 = document.getElementById("firststring").value;

    //Below here, I then create a new variable from the variable above.
    //This time I name is spStr1, and ask that it calls str1.split
    //what .split does is splits a string into an array of substrings
    //So what we are doing here is asking for whatever is in str1 (our user's input)
    //to become an array for us. So typing 'doggy' in the input will
    //cause it to become a string read like 'd,o,g,g,y' by the computer. Split up, see?

    var spStr1 = str1.split("");

//In the variable made down below, I ask to then use the variable above and now ask the javascript to reverse the input
//this will take our 'd,o,g,g,y' and turn it into 'y,g,g,o,d'.
  
    var reverse = spStr1.reverse();

   //THEN! I take the reverse variable from above! And ask the script to join 
   //the contents back together.
   //So our 'y,g,g,o,d' will turn into 'yggod'.
   //This step is pretty important. This is what we need in order to compare inputs
   //so the script and figure out what is and is not a palindrome!

    var jStr1 = reverse.join("");

//Below here is the part that brings it all together and allows the user to see
//the input they used was a palindrome or not.
//Here, I say that if my str1 is equal to my jStr1, then to continue with my if statement
//(str1 is essentially my 'doggy', jStr1 is essentially my 'yggod'; NOT a palindrome!)
//If the input happens to be a palindrome, such as 'kayak', itll display that is IS a palindrome
//as both str1 and jStr1 will be the same at the end and thus equal.

    if (str1 == jStr1)
{

//The palindrome text as shown below, taking our "palin" id from our <p> on the page.
//I also call the <audio> id I created for my 'win', and ask that if the word
//IS a palindrome, itll play a sound
//ATM the sound is a bit loud, but at least it plays! :)

document.getElementById("palin").innerHTML = "This is a palindrome."
document.getElementById("win").play();
}

//Here, I say that else if the word happens to not be a palindrome (such as str1 != jStr1)
//then the text in the "palin" id will change to display this to the user, and another sound called from the id on the HTML
//will play to signify that.

else {

    document.getElementById("palin").innerHTML = "This is NOT a palindrome."
    document.getElementById("lose").play();
}
}
