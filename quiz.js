const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const quizID = urlParams.get('quiz');
var hasSelected = false;
var question = {}
var quiz = getQuiz(quizID)
var quizVars = {}
function nextQuestion() {
    if (hasSelected) {
        let selectedValue = undefined;
        var radios = document.getElementsByName('choice');
        for (var radio of radios) {
          if (radio.checked) {
            selectedValue = radio.value;
          }
        }
        if (selectedValue != undefined) {
            question.functions[Number(selectedValue)]()
        } else {
            return;
        }
    }
    hasSelected = true;
    if (quiz.questions.length == 0) {
        document.getElementById("questionBox").innerHTML = "<div class='loader'></div>";
        document.getElementById("question").innerHTML = "computing result"
        setTimeout(()=>{
            document.getElementById("questionBox").innerHTML = "";
            result = quiz.endFunction()
            document.getElementById("question").innerHTML = "Result!"
            if (result != undefined) {
                var endHeader = document.createElement('h2');
                var endBox = document.createElement('p');
                endHeader.innerHTML = "Results: " 
                endBox.innerHTML = result 
                document.getElementById("questionBox").appendChild(endHeader)
                document.getElementById("questionBox").appendChild(endBox)
            }
        },1000)
    } else {
        question = quiz.questions.shift();
        document.getElementById("question").innerHTML = question.question
        document.getElementById("questionBox").innerHTML = "";
        for (let i = 0; i < question.responses.length; i++) {
            var radiobox = document.createElement('input');
            radiobox.type = 'radio';
            radiobox.id = 'button' + String(i)
            radiobox.name = 'choice';
            radiobox.value = String(i);

            var label = document.createElement('label')
            label.htmlFor = 'button' + String(i)
            label.innerText = question.responses[i]
            
            var newline = document.createElement('br');

            question.responses[i]
            document.getElementById("questionBox").appendChild(radiobox)
            document.getElementById("questionBox").appendChild(label);
            document.getElementById("questionBox").appendChild(newline);
        }

        var button = document.createElement('button');
        if (quiz.questions.length > 0) {
            button.innerText = "Next"
        } else {
            button.innerText = "Finish"
        }
        button.onclick = nextQuestion
        document.getElementById("questionBox").appendChild(button)

        return question
    }
}

quiz.startFunction()
nextQuestion()