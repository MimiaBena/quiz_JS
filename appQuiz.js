const quizContainer = document.querySelector(".quiz_container");
const results = document.querySelector(".results");
const submitQuiz = document.querySelector(".submit");

//questions

const questions = [
  {
    question: "Who invented JavaScript?",
    answersProposed: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    answer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answersProposed: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    answer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answersProposed: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    answer: "d"
  }
];


//Function for Quiz

function quiz(questions, quizContainer){
      let  output = [];
      let answers;

     for(let i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
//function for reslts
function showResults(){
    
}





//appel fonction
//quiz container
quiz(questions, quizContainer);
//show result
submitQuiz.addEventListener('click', showResults);