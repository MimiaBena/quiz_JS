const quizContainer = document.querySelector(".quiz_container");
const results = document.querySelector(".results");
const submitQuiz = document.querySelector(".submit");

//questions

const questions = [
  {
    question: "Wh?",
    answers: {
      a: "Do",
      b: "S",
      c: "B"
    },
    correctAnswer: "c"
  },
  {
    question: "Wr?",
    answers: {
      a: "No",
      b: "Tyt",
      c: "nmm"
    },
    correctAnswer: "b"
  },
  {
    question: "Whty?",
    answers: {
      a: "Aar",
      b: "jry",
      c: "RS",
      d: "ESt"
    },
    correctAnswer: "a"
  }
];


//Function for Quiz

function quiz(questions, quizContainer){
      let  output = [];
      let answers;

     for(let i=0; i<questions.length; i++){
		// reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(proposition in questions[i].answers){

			// add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+proposition+'">'
					+ proposition + ': '
					+ questions[i].answers[proposition]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
         
	}

	
	quizContainer.innerHTML = output.join('');
}
//function for reslts
function showResults (questions, quizContainer, results){
	
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'green';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	results.innerHTML = numCorrect + ' out of ' + questions.length;
}





//appel fonction
//quiz container
quiz(questions, quizContainer);

//show result
submitQuiz.onclick = function(){
		showResults(questions, quizContainer, results);
	};