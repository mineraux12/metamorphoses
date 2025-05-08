const quizTitle = "My Superb Quiz"
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("quiz-question");
  const questionTitle = document.getElementById("quiz-question-title");
  const questionNumber = document.getElementById("quiz-question-number");
  const questionText = document.getElementById("quiz-question-text");
  const optionsElement = document.getElementById("quiz-options");
  const submitButton = document.getElementById("quiz-submit");
  
  let currentQuestion = 0;
  let score = 0;
  let optionNumber = 1;
  
  function showQuestion() {
    const numberOfQuestions = quizData.length.toString();
    const currentQuestionNumber = (currentQuestion + 1).toString();
    const questionData = quizData[currentQuestion];
    questionTitle.innerText = quizTitle;
    questionNumber.innerText = `QUESTION ${currentQuestionNumber} OF ${numberOfQuestions}`;
    questionText.innerText = questionData.question;

    let optionNumber = 1;  
    optionsElement.innerHTML = "";
    questionData.options.forEach(option => {
      var myinput = document.createElement("input");
      myinput.setAttribute("type","radio");
      myinput.setAttribute("id",`q${optionNumber}`);

      var mylabel = document.createElement("label");
      //mylabel.setAttribute("class","radio-label");
      mylabel.setAttribute("for",`q${optionNumber}`);

      var myletter = document.createElement("span");
      myletter.setAttribute("class","alphabet");
      myletter.innerText = String.fromCharCode(64+optionNumber);
      var textNode = document.createTextNode(option);

      mylabel.appendChild(myletter);
      mylabel.appendChild(textNode);

      myinput.appendChild(mylabel);

      optionsElement.appendChild(myinput);
      //const button = document.createElement("button");
      //button.innerText = option;
      //optionsElement.appendChild(button);
      //button.addEventListener("click", selectAnswer);
      optionNumber = optionNumber + 1;
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
