//Variables 
var correct = 0;
var incorrect = 0;
var timerNumber= 60;
var intervalId;



//Timer Functions

function countdown() {
      intervalId = setInterval(decrement, 1000);
    }
function decrement() {
	$("#timeLeft").html("<h4> Time Left!: " + timerNumber + "</h4>");
	timerNumber--;
	if (timerNumber === 0) {
		stopQuiz();
		checkQuiz();
		endResults();

		}
	}
    
function stopQuiz() {
	clearInterval(intervalId);
	}

//Must hit Start Button to start game, or else game area stays hidden. 
$(document).ready(function(){
$('#startScreen').show();
$('#testArea').hide();


    $('#start').click(function() {
    $('#testArea').show();
    $('startScreen').hide();
    });

});

//When done button clicked, triggers endResults function
$('#done').click(function){
	endResults();
});

//Checking quiz answers
function checkQuiz() {
	answers = [
	{
		name: 'Q1',
		correctAnswer: 'a',
	},
	{
		name: 'Q2',
		correctAnswer: 'c',
	},
	{
		name: 'Q3',
		correctAnswer: 'a',
	},
	{
		name: 'Q4',
		correctAnswer: 'c',
	},
	{
		name: 'Q5',
		correctAnswer: 'c',
	},
	
	}];

	for(var i = 0; i < answers.length; i++) {
		var answerList = answers[i];
		var answerChoice = 'input:radio[name=' + answerList.name + ']:checked'.val();

		if(answerChoice === answers.correctAnswer) {
			correct++;
		} 
		else (answerChoice !== answers.correctAnswer) {
			incorrect++;
	}

}

//Function that would push results into quiz area components 
function endResults() {


	$("#timeLeft").html("<h4>End of Quiz!</h4");
	$('#questions').html("<p>Correct answers: " + correct + "</p>");
	$('#choices').html("<p>Incorrect answers: " + incorrect + "</p");
}

}}; 