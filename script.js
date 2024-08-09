document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const submitButton = document.getElementById('submit');
    const resultsElement = document.getElementById('results');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What is the capital of France?",
            answers: [
                {text: "Paris", correct: true},
                {text: "London", correct: false},
                {text: "Berlin", correct: false},
                {text: "Madrid", correct: false}
            ]
        },
        // Add more questions as needed
    ];

    function showQuestion(question) {
        questionElement.textContent = question.question;
        answersElement.innerHTML = '';
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answersElement.appendChild(button);
        });
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        if (correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResults();
        }
    }

    function showResults() {
        quizContainer.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
    }

    showQuestion(questions[currentQuestionIndex]);
});
