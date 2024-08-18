//I thought the idea of making gir eat waffles via a cute button would be adorable!
//It took me SO long to get this right! If I included this in my github code, just know it's all in good fun! :)
//I don't plan for this to be for a grade; it's just a cute little addition i REALLY wanted, as a clicker game enthusiast.
//Since I couldn't figure out how to pause a gif and then play it, I use a short mp4 file; 
//it might slow the page down on older systems.

let buttoncounter = document.getElementById("buttoncounter");

//Above, I grab the button counter's ID from the html to identify just which button I want to use on the page. 

//let X = allows me to have the string called from the HTML document under a different name ('X')
//but because I like to keep it simple I leave the name buttoncounter. Otherwise I'd be confused eventually.

//I also use 'let' as it will allow me to modify it; if I used 'const', it would be a constant string, hence the name.


buttoncounter.addEventListener("click", function () {
  
  let numberwaffles = document.querySelector("#numberwaffles");
  let result = Number(numberwaffles.innerHTML) + 1;
document.getElementById("feedinghimwaffles").play();
  numberwaffles.innerText = result;
});

//Every time our button is clicked, this code above should work its magic.

//innerHTML is used in JavaScript to obtain the text element from HTML elements
//I asked that numberwaffles.innertext is equal to whatever my result is according to the counter, with
//each click counting as +1.
//So in this, when I used <span> with the id of numberwaffles in my HTML page, I was making an id I could call and change the 
//<span id =""> INNERTEXT </span> of.

//I'll use this to change my waffle counter from '0' to any additional click by + 1.  I name this my result.

//addeventEventlistener allows our code to wait and actively 'listen' for its cue to run. 

//In this case, it waits for us to click the button in order to change our text.

//Also, the bit of string, number(outputText) lets our code know that this is a NUMBER. 
//Very important for a number counter!

document.getElementById('buttoncounter').onclick = function () {
  document.getElementById('Girwaffles').play();
};

//Above, I grab my button using its specific id and ask it to detect when I click inside that id container 
//using the piece of text '.onclick function', I ask it every time to treat me clicking that 'buttoncounter' as the next string below.
// Each time I click on a button with the marked id #buttoncounter, I want my video to play.
// So I grab my video id (Girwaffles) and attach .play(); in order to play the video on each detected click.
// So we can feed him waffles forever!