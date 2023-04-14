const quizData = [
    {
        question: "A JavaScript function is a block of code designed to:",
        a: "perform a particular task",
        b: "change the font of webpage",
        c: "link something to css",
        d: "give information to the user",
        correct: "a",
    },
    {
        question: "The 'else if' statement is used to specify a new condition if the first condition is____?",
        a: "True",
        b: "False",
        c: "Undefined",
        d: "In quotation marks",
        correct: "b",
    },
    {
        question: "What is the DOM?",
        a: "A function that is called with JavaScript",
        b: "The dominion where the elves of JavaSCript live",
        c: "A Standard for how to get, change, add, or delete HTML elements",
        d: "A language used in CSS",
        correct: "c"
    },
    {
        question: "Which type of data is used to store numbers that are above the limitation of Number data type?",
        a: "String",
        b: "Boolean",
        c: "BigInt",
        d: "Variables",
        correct: "c",
    },
    {
        question: "JavaSCript is a ____-side programming language",
        a: "Both",
        b: "Client",
        c: "Server",
        d: "None",
        correct: "a",
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
