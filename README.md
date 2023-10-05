# Simple Quiz App 📝

This is a straightforward quiz application built with HTML, CSS, and JavaScript. It offers a series of multiple-choice questions and provides instant feedback on user answers. 🚀

## How to Use 🤔

1. Open `index.html` in your web browser.
2. The quiz will start automatically.
3. Read the questions and select your answers by clicking the buttons.
4. After choosing an answer, click "Next" to proceed to the next question.
5. At the end of the quiz, you'll see your score. 🎉

## Questions ❓

The quiz consists of the following questions:

1. Which planet is known as the 'Red Planet'?
2. What is the capital city of France?
3. What is the chemical symbol for water?
4. Which gas do plants absorb from the atmosphere?
5. Who wrote the play 'Romeo and Juliet'? 📖

## Contributing 🛠️

Feel free to fork this repository and add your own questions or customize the code to meet your needs. 🛠️


## Development Notes 📝

### HTML Structure 🌐

- `index.html`: Contains the basic layout of the quiz app, including the question display area, answer buttons, and next button.

### Styling 🎨

- `style.css`: Provides basic styling for the quiz app.

### JavaScript Logic 🧠

- `main.js`: Contains the logic for displaying questions, handling user answers, and calculating the score.

### Quiz Questions 📚

The questions are stored in an array called `questions` within `main.js`. Each question has a `question` property and an `answers` property, which is an array of objects containing the answer text and whether it is correct.

### Functions ⚙️

- `startQuiz()`: Initializes the quiz by resetting the current question index and score.
- `showQuestion()`: Displays the current question and answer choices.
- `resetState()`: Resets the state of the quiz (hides the next button and clears answer buttons).
- `selectAnswer(e)`: Handles user selection of answers and updates the score.
- `showScore()`: Displays the final score at the end of the quiz.
- `handleNext()`: Handles moving to the next question or ending the quiz.

### Event Listeners 🎧

- Event listener for the "Next" button: Determines whether to move to the next question or restart the quiz.

### Start Quiz 🚀

The `startQuiz()` function is called at the end to initiate the quiz when the page is loaded.

---

Feel free to customize and expand upon this simple quiz app to create your own quizzes! 🌟