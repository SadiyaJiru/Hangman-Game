	//Globabl Variables
	//array that includes the hangman words
	var movies = ['deadpool','grease','batman','avatar','shrek','titanic','goodfellas']
	var	wins = 0; //// counter for # of wins
	var	loss = 0; // sets the stat
	var	guessesLeft = 15; // 26 guesses to start with 
	var	wrongLetter =[];
	var rightLetter =[];
	var	underScores =[]; // creates the space for each word 
	var	userGuess =[];
	var	randMovie; //picks random movie from array
	var winningLetters = 0; //# of correct letters

	//Function
	//===========================


	//picks a random movie using math.random function
	function startGame()
	{
		randMovie = movies[Math.floor(Math.random()* movies.length)] 
		
		// console.log(randMovie);
		underScores = [];

		for(var i = 0; i < randMovie.length; i ++){
				underScores.push('_'); // new item to the array
		}
		//printing underscores to screen with blanks spaces in between		
		document.getElementById('word-blanks').innerHTML = underScores.join(" ");
		document.getElementById('guessRemain').innerHTML = guessesLeft;

		//empty array for wrong letters, 
		wrongLetter =[];
		guessesLeft =15;
				
	}
	//reset all stats and storage/arrays
	function reset(){
		underScores = [];	
		wrongLetter =[];
		guessesLeft = 15;
		winningLetters = 0;
		lossCounter = 0;
		
	}
	
	//if the users letter guess is wrong go to next funtion
	function checkLetter(){
		if(userGuess === wrongLetter ){

		}
	}

	function winLose()
	{
		if(winningLetters == randMovie.length){
			alert('You win WIN the movie is ' + randMovie + ' Which is a great movie');
			wins ++;
			document.getElementById('wins').innerHTML = wins;
			reset();

		//If there are no more gueses left the user loses
		}else if(guessesLeft <= 0){
			alert('You Lose The Movie is ' + randMovie);
			loss ++; 
			document.getElementById('loses').innerHTML = loss;
			reset();
		}
	}

	//userInput
	document.onkeyup = function(event)
	{
		userGuess = event.key;

	//	console.log(userGuess);

		//checks if user movie matches guesses
		if(randMovie.indexOf(userGuess) > -1)
		{
			for(var i = 0; i < randMovie.length; i++)
			{
				if(randMovie[i] === userGuess)
				{
					underScores[i] = userGuess;
					document.getElementById('word-blanks').innerHTML = underScores.join(' ');
					console.log(underScores);
					winningLetters++;
					console.log(winningLetters);
					winLose();
				}
			}
		}		
		else
		{
			wrongLetter.push(userGuess);
			guessesLeft--;
			//send guessesLeft to HTML
			document.getElementById('guessRemain').innerHTML = guessesLeft;
			document.getElementById('wrongGuess').innerHTML = wrongLetter;
			console.log("Guess left" + guessesLeft);	
			winLose();
				
		}
	}

	


	//Main
	//============================

	