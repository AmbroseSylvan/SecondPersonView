(function () {

var input = document.querySelector("#input");
var output = document.querySelector("#output");
var button = document.querySelector("#button");
button.addEventListener("click", clickHandler, false);

function clickHandler()
{
	var userString = input.value;
	var inputNum = 0;
	var fortuneIndex = 0;
	
	//combine character codes of each character in user string, to get a number. 
	for (var i = 0; i < userString.length; i++)
	{
		inputNum += userString.charCodeAt(i);
	}
	
	fortuneIndex = sumDigits(inputNum);

	//Use fortuneIndex to select a fortune.
	switch(fortuneIndex)
	{
		case 1:
			output.innerHTML = "strong will, positivity, pure energy, and new beginnings.<br><br>A time to exert our natural forces, take action,and start a new venture. Our action will be rewarded in kind.";
			break;
		
		case 2:
			output.innerHTML = "kindness, balance, tact, equalization, and duality, quiet power of judgment, and the need for planning.<br><br>Get us out of our decision, unite with like-minds and like-ideals. Exert our natural flow of judgment to do what is best for our souls.";
			break;
			
		case 3:
			output.innerHTML = "Magic, intuition, fecundity, advantage, expression, versatility, and pure joy of creativity. Past, Present, Future.<br><br>Express yourself creatively, or consider your present directional path in relation to past events and future goals. Reward and success in most undertakings.";
			break;
			
		case 4:
			output.innerHTML = "Stability and the grounded nature of all things, solidity, calmness, and home.<br><br>Get back to your roots, center yourself, or 'plant' yourself. Need persistence and endurance.";
			break;
			
		case 5:
			output.innerHTML = "Travel, adventure, motion, instability and unpredictability, and radical changes. Primitive and erratic. <br><br>Appreciate the wonder of life and perception of chaos. Prepare for some action, like a trip: remember that they aren't all necessarily taken physically.";
			
			break;
		case 6:
			output.innerHTML = "Harmony, balance, sincerity, love, truth, lighting our path.<br><br>Administer compassion and consciously choose forgiveness in a situation. Use delicate diplomacy when dealing with sensitive matters.";
			break;
			
		case 7:
			output.innerHTML = "Magic, scholarly activities, mystery, the focused search for esoteric meanings.<br><br>Activate imagination and manifest results in our lives through the use of conscious thought and awareness.";
			break;
			
		case 8:
			output.innerHTML = "Business, success, wealth, continuation, repetition, and cycles.<br><br>Success is obtained simply because of dogged determination and repetition. As it continues to roll, in gets bigger and bigger with each revolution.";
			break;
			
		case 9:
			output.innerHTML = "Attainment, satisfaction, accomplishment, influence in our circumstances, intellectual power, inventiveness.<br><br>Recognize our own internal attributes, and extend these abilities out into the world to make a positive, influential difference.";
			break;
	}
}

function sumDigits(n) 
{
	return (n - 1) % 9 + 1;
}

}());