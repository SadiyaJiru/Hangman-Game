var $ = function (id){
    return document.getElementById(id);
}

 // DECALRE global scope VARIABLRS 
var movies = ["Forest Gump", "Step Brothers", "Titanic"] // answers
var guess = Math.floor(Math.random()*4);// 
var answer = movies[guess];
var myLength = answer.length; // counts the letters in the word 
var display=[myLength]; // the _ _ _ for each letter
var win = myLength; // they have to guess that many letters to guess it
var letters = answer.split(''); // creates an array called letters from answer, and 
//breaks the letters apart, each char is at an index
var chancesLeft = 26; //
var ouput = ""; // how ---- is displayed
var userLetter= ""; // obtained from the user

//  var guess = prompt("Guess a movie")

 var setup = function(){
     //for loop for working with our array
     for(var i =0; i < answer.length; i++);{
         display[i] = "_ ";
         ouput = ouput + display[i];
     }
document.getElementById("movies").innerHTML.ouput;
output = "";
    }
    window.onload = function()
    {


    setup();
}
///// WHEN THE USER HITS GUESS////
var sumbit = function(){
    ouput = ""; // reset output to nothing
    userLetter = $("letter").value; // user letter is the value of whats in the text box by the user
    $("letter").value = ""; //

    for (var c=0; c< answer.length; c++){ // step through the loop for each letter in the answer
        allert(letters[c]); //checks if the letter input is in the answer
       if (userLetter.toUpperCase() == letters[c]) 
{
    display[c]=userLetter.toUpperCase(); ///
    win --;
}
output=output + display[c] + ""; // reads diplay
    }
document.getElementById("movies").innerHTML = output; // redisplay the output
ouput = "";
chancesLeft --;
if (win < 1)
{
    document.getElementById("guess").innerHTML = "YOU WIN";
}
}