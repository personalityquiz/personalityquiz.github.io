function getQuiz(quizID) {
    if (quizID == "test") {
        return {
            questions:[
                {
                    question: "Test",
                    responses: [
                        "Test 1",
                        "Test 2",
                        "Test 3"
                    ],
                    functions: [
                        ()=>{quizVars.choice1 = 1},
                        ()=>{quizVars.choice1 = 2},
                        ()=>{quizVars.choice1 = 3}
                    ]},
                {
                    question: "Test the Second",
                    responses: [
                        "Test 4",
                        "Test 5",
                        "Test 6"
                    ],
                    functions: [
                        ()=>{quizVars.choice2 = 4},
                        ()=>{quizVars.choice2 = 5},
                        ()=>{quizVars.choice2 = 6}
                    ]},
            ],
            endFunction: ()=>{
                return 'Your sum is '+String(quizVars.choice1)+' + '+String(quizVars.choice2)+' = '+String(quizVars.choice1+quizVars.choice2)
            },
            startFunction: ()=>{
                quizVars.choice1 = 0
                quizVars.choice2 = 0
            }
        }
    }
    if (quizID == "cool-test") {
        return {
            questions:[
                {
                    question: "Do you like the cool sunglasses",
                    responses: [
                        "Yes they are the cool",
                        "No, they are the uncool"
                    ],
                    functions: [
                        ()=>{quizVars.points++;},
                        ()=>{}
                ]},
                {
                    question: "Do you consider yourself imperturbable",
                    responses: [
                        "True",
                        "False"
                    ],
                    functions: [
                        ()=>{quizVars.points++;},
                        ()=>{}
                ]},
                {
                    question: "How quality is your dance moves",
                    responses: [
                        "Very",
                        "Not much, but sometimes",
                        "None at all"
                    ],
                    functions: [
                        ()=>{quizVars.points+=2;},
                        ()=>{quizVars.points++;},
                        ()=>{}
                ]},
                {
                    question: "Do you like jazz",
                    responses: [
                        "True",
                        "False"
                    ],
                    functions: [
                        ()=>{quizVars.jazz = true},
                        ()=>{}
                ]},
                {
                    question: "Are you offended by uncool person",
                    responses: [
                        "Yes",
                        "No"
                    ],
                    functions: [
                        ()=>{quizVars.points++;},
                        ()=>{}
                ]},
            ],
            endFunction: ()=>{
                if (quizVars.jazz) {
                    return 'YOU ARE THE BARRY BEE BENSON YOU ARE COOLEST PERSON ALIVE!!'
                } else if (quizVars.points == 5) {
                    return 'Your score is 5/5. You are one of the coolest person around.'
                } else if (quizVars.points == 4) {
                    return 'Your score is 4/5. You are cool, but not the coolest'
                } else if (quizVars.points == 3) {
                    return 'Your score is 3/5. You are average coolness.'
                } else if (quizVars.points == 2) {
                    return 'Your score is 2/5. You are not very cool. Consider taking coolness class.'
                } else if (quizVars.points == 1) {
                    return 'Your score is 1/5. You are uncool full stop. Get cooler, please.'
                } else if (quizVars.points == 0) {
                    return 'Your score is 0/5. You are extremely uncool, get help from psychiatrist.'
                }
            },
            startFunction: ()=>{
                quizVars.points = 0
                quizVars.jazz = false
            }
        }
    }
    if (quizID == "secret") {
        return {
            questions:[
                {
                    question: "Welcome to the secret quiz",
                    responses: [
                        "What",
                        "No let me leave please"
                    ],
                    functions: [
                        ()=>{},
                        ()=>{quiz.questions.shift();},
                    ]},
                {
                    question: "Ok now pick one of these",
                    responses: [
                        "Ok i want to leave",
                        "Let me leave",
                    ],
                    functions: [
                        ()=>{},
                        ()=>{},
                    ]},
                {
                    question: "Ok fine",
                    responses: [
                        "Goodbye",
                    ],
                    functions: [
                        ()=>{},
                    ]},
            ],
            endFunction: ()=>{
                return 'You are epick hackerman'
            },
            startFunction: ()=>{
            }
        }
    }
    if (quizID == "age") {
        return {
            questions:[
                {
                    question: "What is your age?",
                    responses: [
                        "0-10",
                        "11-20",
                        "21-30",
                        "31-40",
                        "41-50",
                        "51+"
                    ],
                    functions: [
                        ()=>{quizVars.choice = "0-10"},
                        ()=>{quizVars.choice = "11-20"},
                        ()=>{quizVars.choice = "21-30"},
                        ()=>{quizVars.choice = "31-40"},
                        ()=>{quizVars.choice = "41-50"},
                        ()=>{quizVars.choice = "51+"},
                    ]},
            ],
            endFunction: ()=>{
                return 'Your age is in the range '+String(quizVars.choice)+'!<br>Please like and subscribe for more quizzes!'
            },
            startFunction: ()=>{
                quizVars.choice = 0
            }
        }
    }
}