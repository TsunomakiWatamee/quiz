const mybtn = document.getElementById('btnstart');
const info = document.getElementById('boxinfo');
const more = document.getElementById('conti');
const clos = document.getElementById('close');
const quiz = document.getElementById('quizb');
const buttns = document.getElementById('buttns');

// Loaders

mybtn.addEventListener('click', btnstart);
info.style.display = "none";
quiz.style.display = "none";


function btnstart(){
    console.log('Quiz Started!');
    mybtn.style.display = "none";
    info.style.display = "";
}

more.addEventListener('click', conti);

function conti(){
    console.log('Agreed to terms!');
    info.style.display = "none";
    quiz.style.display = "";
}

clos.addEventListener('click', close);

function close(){
    console.log('Returning back!');
    info.style.display = "none";
    mybtn.style.display = ""
}

let questions = {
    title: 'What does HTML stand for?',
    option: ['Hyper Text Preprocessor', 'Hyper Text Markup Language', 'Hyper Text Multiple Language', 'Hyper Tool Multi Language'],
    correctAnswer: 1
};

function showQuestion(q){
    let title = document.getElementById('que');
    title.textContent = q.title

    let alts = document.querySelectorAll('option');
    console.log('Questions');
    alts.forEach(function(element, index){
        element.textContent = q.option[index];
    });
}

showQuestion(questions);
