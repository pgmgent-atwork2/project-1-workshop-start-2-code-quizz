const $questionAnswerContainer=document.querySelector(".question-answer-container");


document.querySelector("#start").addEventListener("click",()=>{
    const $title=document.querySelector("#start");
    $title.style.display="none";
    generateQuestion(0);
})


function moreQuestionsToGo() {
    const quizzLength=questionsAndAnswersCollection.length;
    const currentQuestion=(parseInt($questionAnswerContainer.id))+1;
    console.log(currentQuestion,quizzLength);
    if(currentQuestion<quizzLength) {
       nextQuestion();
    } else {
      finishQuizz();
}

function nextQuestion() {
    let nextQuestionID=parseInt($questionAnswerContainer.id)+1;
    $questionAnswerContainer.id=String(nextQuestionID);
    $questionAnswerContainer.innerHTML="";
    generateQuestion(nextQuestionID); 
}


function finishQuizz() {
    $questionAnswerContainer.innerHTML="";
    document.querySelector("h2").style.display="block";
    document.querySelector("h2").textContent="Quizz Finished!";
    document.querySelector("h2").style.textAlign="center";
    document.querySelector("h2").style.fontSize="3em";
    document.querySelector("h2").removeAttribute("id");
    const $optionsContainer=document.querySelector(".button-container");
    $optionsContainer.innerHTML = `
    <a class="btn"  href="http://127.0.0.1:5500/index.html">Maak de Quizz Opnieuw</a>
    <a class="btn" href="https://www.google.com">Ik wil de quizz zelf coderen!</a>`;
 }
}




function generateQuestion(questionNumber) {
   document.querySelector(".question-answer-container").innerHTML+=
   `<div id="${questionNumber}">
   <p class="question">${questionsAndAnswersCollection[questionNumber].question}</p>
   <div class="option-container">
   ${questionsAndAnswersCollection[questionNumber].answers.map((option)=>`<div class="option" id=${option.correct? "correct":"incorrect"}>${option.content}</div>`).join(" ")}
   </div>
   </div>
   `;
   addListenersToOptions(document.querySelectorAll(".option"));
}


function addListenersToOptions(options) {
    for(let i=0;i<options.length;i++) {
        options[i].addEventListener("click",()=>{
            if(options[i].id=="correct") {
                console.log("--correct, next question");
                moreQuestionsToGo();
            } else {
                options[i].innerText="FOUT";
                options[i].classList.add("wrong");
            }
        })
    }
}











