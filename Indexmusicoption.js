//This function, linked to a button in my HTML, will, upon clicking the 'Yes!' button, play my music
//and also disable the 'Yes!' button and enable the 'No way!' button.
//I'm essentially asking that my javascript creates this sound every time the user clicks it, hence why I use 'Create element'.
//in my sound function!


function startMusic()
{

    //playMusic = new sound("SIUP.Kzwiener.DSWAD.mp3");
   // playMusic.play();
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("h1-diff").innerHTML = "Heck YEAH we love waffles!"
    intervalStart();

}

//The reason why I use (src) in my code is because, as seen above, my 'src' after my 'sound' is calling forth an 
//audio object from my files. 
//this.sound is asking for my script to Create a sound element.
//this.sound.src is asking my script to associate that element with whatever src i give to my sound().
//in this case, its an old music project I created for a platformer (because I didn't want to risk copyrights and use someones music)
//this.play is an action. I'm asking my script to use the function this.sound.play(), of which my script will
//create the audio element and associate that element with whatever i link to in the src of that element,
//and then will play that sound(src) element to its entirety.

//function sound(src)
//{
 //   this.sound = document.createElement("audio");
  //  this.sound.src = src;
  //  this.play = function() {this.sound.play();}
   // this.sound.volume = 0.1;
//}

//Below here, when a user selects "No way!" after it is made available to click, the page will refresh, shutting off the music
//bear in mind, though, that my music won't loop, hence why I never used simple drum beat audios I had created and instead used a whole 2 minute music file
//window.location is tell my script that I want it to focus on the page where the user is in currently.
// .reload(); then asks that script to reload the whole page, restarting any functions within the page.
//I'll have reload and the function above enabled for the music assignment, as otherwise users can just keep 
//playing the music over and over and it will overlap!!

function stopMusic()

{
   //window.location.reload();
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    intervalStop();
}


//Below is my interval, and where I get my images to move.
//on the html sheet, you probably noticed that i have 4 waffle images below the footer kind of stacked ontop eachother.
//all with slightly different ids.
//i'll explain how this works using just the first one
//grabbing my element by its id, i ask my script to remember it by giving it a name to easily call; 'flyimage'.
//I set my images display to true in the case it was set to false. set to true means users will get to see it. kind of on the tin.
//then i ask my script to remember another variable for me, but instead of getting an element, i ask it remember 
//a set number. I call this variable change.
//I set my intervalID but specifying what I want it to do. I want my image to travel, in the first images case
//from the bottom right to the top left.
//I take my flyimage variable, attach .style.right to tell my script that is the position i am specifying here
//and then i get my change variable, which is set to 100px originally, and ask that it add +5 px to its count.
//its a little more easier if you uncomment the alert to see what I mean if it's a little confusing. (note to myself here)
//so the image will start to both the bottom and the right, and with the change counting upwards til it hits 
//500 miliseconds (about half a whole second).

function intervalStart()
{
    //1
    var flyimage = document.getElementById("tinywaffleindex");
    flyimage.display = true;
    var change = 100;
    intervalID = setInterval(function()
    {
        flyimage.style.right = change+"px";
        //alert(change+"px");
        flyimage.style.bottom = change+"px";
        change +=5;
    },500);
//2
    var flyimage2 = document.getElementById("tinywaffleindex2");
    flyimage2.display = true;
    intervalID2 = setInterval(function()
    {
        flyimage2.style.left = change+"px";
        flyimage2.style.bottom = change+"px";
    },500);
//3
    var flyimage3 = document.getElementById("tinywaffleindex3");
    flyimage3.display = true;
    intervalID3 = setInterval(function()
    {
        flyimage3.style.left = change+"px";
        flyimage3.style.top = change+"px";
    },500);
//4
    var flyimage4 = document.getElementById("tinywaffleindex4");
    flyimage4.display = true;
    intervalID4 = setInterval(function()
    {
        flyimage4.style.right = change+"px";
        flyimage4.style.top = change+"px";
    },500);
    
}

//(note to self) If you feel silly and want to explore further why the timing is about half a second
//try changing that 500 to 20; those waffles are gonna zip across that screen!

//Below, I have a function here to stop my interval (hopefully, pausing it on the screen)
//When this is called, I want the script to clear my interval. This is pretty on the tin,
//But it just means it wil clear my start interval script until I call it again by pressing the button to do so.
//I failed to mention, but I have 4 intervalIDs above, ranging of 1-4, with 1 without a number
//If I had simply left them all as intervalID, it would not pause every single one of the images
//so I had to treat them as their own individual assets when it came to intervals

function intervalStop()
{
    //alert("clearedinterval");
    
        clearInterval(intervalID);

        clearInterval(intervalID2);

        clearInterval(intervalID3);

        clearInterval(intervalID4);




}