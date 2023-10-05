const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Rome", correct: false},
            {text: "Paris", correct: true},
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "O2", correct: false},
            {text: "CO2", correct: false},
            {text: "H2O", correct: true},
            {text: "CH4", correct: false},
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Carbon Dioxide", correct: true},
            {text: "Methane", correct: false},
            {text: "Nitrogen", correct: false},
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "Charles Dickens", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Jane Austen", correct: false},
            {text: "Mark Twain", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNext()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length)
    {
        handleNext();
    }
    else
    {
        startQuiz();
    }

})

startQuiz()



