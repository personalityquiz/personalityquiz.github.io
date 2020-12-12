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
        if (quizID == "alphabet") {
        return {
            questions:[
                {
                    question: "What is your favourite number",
                    responses: [
                        "One",
                        "Two",
			            "Seventy-Nine"
                    ],
                    functions: [
                        ()=>{quizVars.points++;},
			            ()=>{quizVars.points+=2;},
                        ()=>{}
                ]},
                {
                    question: "What is your favourite bean",
                    responses: [
                        "True",
                        "Purple",
                        "A",
                        "okay",
                        "False"
                    ],
                    functions: [
                        ()=>{quizVars.points++;},
                        ()=>{quizVars.points+=2;},
                        ()=>{quizVars.points+=3;},
                        ()=>{quizVars.points+=4;},
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
                    question: "Yes or no",
                    responses: [
                        "Yes",
                        "No"
                    ],
                    functions: [
                        ()=>{quizVars.points++;},
                        ()=>{}
                ]},
		{
                    question: "What is your opinion on alphabet",
                    responses: [
                        "Barry B(ee)",
                        "FJKFHSAJKHFKJAHFKJAFHJQHAFJKHAKJHKJFHkjhkjhkfjhkjHFJKHKJ",
                        "A",
                        "C",
                        "False",
                    ],
                    functions: [
                        ()=>{quizVars.jazz = true},
                        ()=>{quizVars.points+=2;},
                        ()=>{quizVars.points+=1;},
                        ()=>{quizVars.points+=3;},
                        ()=>{quizVars.points+=4;},
                ]},
            ],
            endFunction: ()=>{
                if (quizVars.jazz) {
                    return 'YOU ARE THE BARRY BEE BENSON YOU ARE COOLEST PERSON ALIVE!!'
                } else if (quizVars.points == 0) {
                    return 'you do not like letters blegh'
                } else if (quizVars.points == 1) {
                    return 'you are A. your head is pretty pointy and your headbutts heart'
                } else if (quizVars.points == 2) {
                    return 'meh. you are the letter B but you are not a fan of the bee movie'
                } else if (quizVars.points == 3) {
                    return "I C you are the letter 'C' :))))"
                } else if (quizVars.points == 4) {
                    return 'xdddd :D D:  you are the basis of all emoticon very default'
                } else if (quizVars.points == 5) {
                    return 'YOU ARE E THE MEME AND EEEEEEEEEEEEEEEEEEEEEE'
                } else if (quizVars.points == 6) {
                    return 'you are F, you are a very respectable person, and you pay a lot of respect to other people'
                } else if (quizVars.points == 7) {
                    return 'you are g. australians use you a lot'
                } else if (quizVars.points == 8) {
                    return 'you are h. there is a h in hi and hello but other than that you are not significant'
                } else if (quizVars.points == 9) {
                    return 'you are I. what the fack. how are you me!@!!!!'
                } else if (quizVars.points == 10) {
                    return 'you j. jojojojojojojoj'
                } else if (quizVars.points == 11) {
                    return 'k'
                } else if (quizVars.points == 12) {
                    return 'LLLLL you are verry toxic and you go LLLKLL to people'
                } else if (quizVars.points == 13) {
                    return 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'
                } else if (quizVars.points == 14) {
                    return 'you are n... you are featured in top 10 n words'
                } else if (quizVars.points == 15) {
                    return 'O'
                }
            },
            startFunction: ()=>{
                quizVars.points = 0
                quizVars.jazz = false
            }
        }
    }
    if (quizID == "compuper"){
        return {
            questions:[
                {
                    question: "Which one",
                    responses: [
                        "Compuper",
                        "Phoney",
                        "tableto",
                        "giggle and hoot"
                    ],
                    functions: [
                        ()=>{quizVars.points += 4},
                        ()=>{quizVars.isPhoney = true},
                        ()=>{quizVars.points += 1 },
                        ()=>{quizVars.cartoonPoints += 1}
                    ]},
                {
                    question: "circuitboard",
                    responses: [
                        "YOUR MOM!",
                        "green thing",
                        "pc master race",
                        "the wigggles"
                    ],
                    functions: [
                        ()=>{quizVars.points += 3},
                        ()=>{quizVars.points += 1},
                        ()=>{quizVars.points += 4},
                        ()=>{quizVars.cartoonPoints += 1}
                    ]},
                {
                    question: "why",
                    responses: [
                        "because...",
                        "mmm yummy compuper",
                        "peppa pig",
                        "just to suffer"
                    ],
                    functions: [
                        ()=>{quizVars.points += 1},
                        ()=>{quizVars.points += 4},
                        ()=>{quizVars.cartoonPoints += 1 },
                        ()=>{quizVars.points += 3}
                    ]}
            ],
            endFunction: ()=>{
                if(quizVars.isPhoney){
                    return 'what a phoney imagine being a phoney...'
                }
                else if(quizVars.cartoonPoints > 1){
                    return "I don't know what to say... try watching the dinosaur train?"
                }
                else if(quizVars.points == 1){
                    return 'this should be impossible... should it not?'
                }
                else if(quizVars.points == 2){
                    return 'COUNTRY ROADS, TAKE ME HOME... TO THE PLACE I BELONG, WEST VIRGINIA, MOUNTAIN MOMMA, TAKE ME HOME, COUNTRY ROADS!'
                }
                else if(quizVars.points == 3){
                    return 'never gonna meme you up'
                }
                else if(quizVars.points == 4){
                    return 'thanks for playing! remember to like and subsrcibe' + '\n' + 'wait i almost forgot your answer is compuper'
                }
                else if(quizVars.points  == 5){
                    return 'Insert witty answer here: '
                }
                else if(quizVars.points  == 6){
                    return 'Yay you are 50% good at compuper!'
                }
                else if(quizVars.points  == 7){
                    return 'you desire the bane of anime only to find that it is rubbish'
                }
                else if(quizVars.points  == 8){
                    return 'you have compuper potential kid... real potential... why dont you sign up at freecomuperinstitute?' + '\n' + '(no we didnt make a typo that was the only domain available)'
                }
                else if(quizVars.points  == 9){
                    return 'You are poggest at compuper'
                }
                else if(quizVars.points  == 10){
                    return 'You are so pog at compuper, that santa will not give you one'
                }
                else if(quizVars.points  == 11){
                    return 'You are so good at compuper, i worry you may be addicted'
                }
                else if(quizVars.points  == 12){
                    return 'You are linus.'
                }
            },
            startFunction: ()=>{
                quizVars.points = 0
                quizVars.cartoonPoints = 0
                quizVars.isPhoney = false
            }
        }
    }
}
