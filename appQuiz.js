const quizContainer = document.querySelector(".quiz_container");
const results = document.querySelector(".results");
const submitQuiz = document.querySelector(".submit");

//questions

const questions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
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

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
//function for reslts
function showResults (questions, quizContainer, results){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
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