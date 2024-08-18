
function dice1 () {


    //Here we call variables to remember.
    //We ask for a random number within these variables to be remembered for later.
    //I'm a little lazy, so Gir gets a variable between 1 - 12 for his rolls, while the player gets to 
    //see both of their own dice rolls, both between 1 - 6, like the common die.


    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var girrollsdice1 = Math.ceil(Math.random() * 12);

    //Here is where I grab the id from my <span></span> tags to use.
    //The reason why I use <span> in my html is because it doesn't mess up the page layout when I call it.
    //By grabbing the innerHTML, I am saying 'hey, grab whatever is <tag> INSIDE </tag> of a tagged id.
    //I could also use non-id items for this, but using an id makes things run so much smoother.
    
document.getElementById("GirRollsRes").innerHTML = girrollsdice1;
    document.getElementById("die1res").innerHTML = + die1;
    document.getElementById("die2res").innerHTML = + die2;

    //Belos, I then grab both the sum of both my dice variables. I ask the code to use addition
    // (num + num), in order to give me the total of those variables saved previously.
    //In the case of my gir roll, it doesn't require any math, as gir only has one 12-sided dice 
    //(we can pretend it's two 6-sided dice, though. I didn't think it would be necessary to give him more)

    var sum = die1 + die2;
    var girsum = girrollsdice1;

    document.getElementById("Sumres").innerHTML = sum;

    //Below, I use statements like if, else...if, and else.
    //These are pretty on the tin on what the purpose is for them.
    //If = if (X) happens, do (Y).
    //Else...if = Else if (Y) happens instead, do (X)
    //Else = If those two do not play, we instead say it will do (W)

    //What I am saying below is my win and lose conditions.
    //If the sum of the player's dice is greater than gir's roll, gir will lose.
    //If the player's dice roll is less than gir's roll, the player will lose.
    //If the player's roll is equal to gir's roll, it's a draw.
    //And if, potentially, the computer screws up, it will give a placeholder text.

    if (sum < girsum)
    {
        document.getElementById("FinalRes").innerHTML = "You lost!";
    }
    else if (sum > girsum)
    {
        document.getElementById("FinalRes").innerHTML = "You win!";
    }
    else if (sum == girsum)
    {
        document.getElementById("FinalRes").innerHTML = "It's a draw!";
    }
    else
    {

        document.getElementById("FinalRes").innerHTML = "Not sure what to tell you here!"
    }


}

