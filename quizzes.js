function getQuiz(quizID) {
  if (quizID == "test") {
    return {
      questions: [
        {
          question: "Test",
          responses: ["Test 1", "Test 2", "Test 3"],
          functions: [
            () => {
              quizVars.choice1 = 1;
            },
            () => {
              quizVars.choice1 = 2;
            },
            () => {
              quizVars.choice1 = 3;
            },
          ],
        },
        {
          question: "Test the Second",
          responses: ["Test 4", "Test 5", "Test 6"],
          functions: [
            () => {
              quizVars.choice2 = 4;
            },
            () => {
              quizVars.choice2 = 5;
            },
            () => {
              quizVars.choice2 = 6;
            },
          ],
        },
      ],
      endFunction: () => {
        return (
          "Your sum is " +
          String(quizVars.choice1) +
          " + " +
          String(quizVars.choice2) +
          " = " +
          String(quizVars.choice1 + quizVars.choice2)
        );
      },
      startFunction: () => {
        quizVars.choice1 = 0;
        quizVars.choice2 = 0;
      },
    };
  }
  if (quizID == "cool-test") {
    return {
      questions: [
        {
          question: "Do you like the cool sunglasses",
          responses: ["Yes they are the cool", "No, they are the uncool"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "Do you consider yourself imperturbable",
          responses: ["True", "False"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "How quality is your dance moves",
          responses: ["Very", "Not much, but sometimes", "None at all"],
          functions: [
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "Do you like jazz",
          responses: ["True", "False"],
          functions: [
            () => {
              quizVars.jazz = true;
            },
            () => {},
          ],
        },
        {
          question: "Are you offended by uncool person",
          responses: ["Yes", "No"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.jazz) {
          return "YOU ARE THE BARRY BEE BENSON YOU ARE COOLEST PERSON ALIVE!!";
        } else if (quizVars.points == 5) {
          return "Your score is 5/5. You are one of the coolest person around.";
        } else if (quizVars.points == 4) {
          return "Your score is 4/5. You are cool, but not the coolest";
        } else if (quizVars.points == 3) {
          return "Your score is 3/5. You are average coolness.";
        } else if (quizVars.points == 2) {
          return "Your score is 2/5. You are not very cool. Consider taking coolness class.";
        } else if (quizVars.points == 1) {
          return "Your score is 1/5. You are uncool full stop. Get cooler, please.";
        } else if (quizVars.points == 0) {
          return "Your score is 0/5. You are extremely uncool, get help from psychiatrist.";
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.jazz = false;
      },
    };
  }
  if (quizID == "secret") {
    return {
      questions: [
        {
          question: "Welcome to the secret quiz",
          responses: ["What", "No let me leave please"],
          functions: [
            () => {},
            () => {
              quiz.questions.shift();
            },
          ],
        },
        {
          question: "Ok now pick one of these",
          responses: ["Ok i want to leave", "Let me leave"],
          functions: [() => {}, () => {}],
        },
        {
          question: "Ok fine",
          responses: ["Goodbye"],
          functions: [() => {}],
        },
      ],
      endFunction: () => {
        return "You are epick hackerman";
      },
      startFunction: () => {},
    };
  }
  if (quizID == "age") {
    return {
      questions: [
        {
          question: "What is your age?",
          responses: ["0-10", "11-20", "21-30", "31-40", "41-50", "51+"],
          functions: [
            () => {
              quizVars.choice = "0-10";
            },
            () => {
              quizVars.choice = "11-20";
            },
            () => {
              quizVars.choice = "21-30";
            },
            () => {
              quizVars.choice = "31-40";
            },
            () => {
              quizVars.choice = "41-50";
            },
            () => {
              quizVars.choice = "51+";
            },
          ],
        },
      ],
      endFunction: () => {
        return (
          "Your age is in the range " +
          String(quizVars.choice) +
          "!<br>Please like and subscribe for more quizzes!"
        );
      },
      startFunction: () => {
        quizVars.choice = 0;
      },
    };
  }
  if (quizID == "alphabet") {
    return {
      questions: [
        {
          question: "What is your favourite number",
          responses: ["One", "Two", "Seventy-Nine"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.points += 2;
            },
            () => {},
          ],
        },
        {
          question: "What is your favourite bean",
          responses: ["True", "Purple", "A", "okay", "False"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 3;
            },
            () => {
              quizVars.points += 4;
            },
            () => {},
          ],
        },
        {
          question: "How quality is your dance moves",
          responses: ["Very", "Not much, but sometimes", "None at all"],
          functions: [
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "Yes or no",
          responses: ["Yes", "No"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
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
            () => {
              quizVars.jazz = true;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 3;
            },
            () => {
              quizVars.points += 4;
            },
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.jazz) {
          return "YOU ARE THE BARRY BEE BENSON YOU ARE COOLEST PERSON ALIVE!!";
        } else if (quizVars.points == 0) {
          return "you do not like letters blegh";
        } else if (quizVars.points == 1) {
          return "you are A. your head is pretty pointy and your headbutts heart";
        } else if (quizVars.points == 2) {
          return "meh. you are the letter B but you are not a fan of the bee movie";
        } else if (quizVars.points == 3) {
          return "I C you are the letter 'C' :))))";
        } else if (quizVars.points == 4) {
          return "xdddd :D D:  you are the basis of all emoticon very default";
        } else if (quizVars.points == 5) {
          return "YOU ARE E THE MEME AND EEEEEEEEEEEEEEEEEEEEEE";
        } else if (quizVars.points == 6) {
          return "you are F, you are a very respectable person, and you pay a lot of respect to other people";
        } else if (quizVars.points == 7) {
          return "you are g. australians use you a lot";
        } else if (quizVars.points == 8) {
          return "you are h. there is a h in hi and hello but other than that you are not significant";
        } else if (quizVars.points == 9) {
          return "you are I. what the fack. how are you me!@!!!!";
        } else if (quizVars.points == 10) {
          return "you j. jojojojojojojoj";
        } else if (quizVars.points == 11) {
          return "k";
        } else if (quizVars.points == 12) {
          return "LLLLL you are verry toxic and you go LLLKLL to people";
        } else if (quizVars.points == 13) {
          return "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM";
        } else if (quizVars.points == 14) {
          return "you are n... you are featured in top 10 n words";
        } else if (quizVars.points == 15) {
          return "O";
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.jazz = false;
      },
    };
  }
  if (quizID == "psychopath-test") {
    return {
      questions: [
        {
          question: "Are you gay?",
          responses: ["Very", "Not much, but sometimes","BLODDY HEKC NUO"],
          functions: [
            () => {
              quizVars.gay = true;
            },
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "Do you consider yourself a smooth liar",
          responses: ["True", "False"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "Why are we still here?",
          responses: ["Just to suffer", "This is fun", "No, I don't think I will"],
          functions: [
            () => {
              quizVars.funy = true;
            },
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "Do you like to kill the peoples",
          responses: ["True", "False"],
          functions: [
            () => {
              quizVars.psycho = true;
            },
            () => {},
          ],
        },
        {
          question: "Can you use empathy in high stress situations",
          responses: ["Probably", "That's not how it works"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.psycho) {
          return "YOU ARE THE MURERDERRER YOU ARE MOST SCARY PSYCHOMAN ALIVE!!";
        } else if (quizVars.funy) {
          return "You are so funy you know the meme ahahahaha lmao";
        } else if (quizVars.points == 4) {
          return "Your score is 4/5. You are cool, and not a psycho";
        } else if (quizVars.points == 3) {
          return "Your score is 3/5. You are normal human being";
        } else if (quizVars.points == 2) {
          return "Your score is 2/5. You aren't a psychopath, but you might be a sociopath.";
        } else if (quizVars.points == 1) {
          return "Your score is 1/5. We still have no idea what you are lol";
        } else if (quizVars.points == 0) {
          return "Your score is 0/5. What's this test about again?";
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.jazz = false;
      },
    };
  }
  if (quizID == "compuper") {
    return {
      questions: [
        {
          question: "Which one",
          responses: ["Compuper", "Phoney", "tableto", "giggle and hoot"],
          functions: [
            () => {
              quizVars.points += 4;
            },
            () => {
              quizVars.isPhoney = true;
            },
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.cartoonPoints += 1;
            },
          ],
        },
        {
          question: "circuitboard",
          responses: [
            "YOUR MOM!",
            "green thing",
            "pc master race",
            "the wigggles",
          ],
          functions: [
            () => {
              quizVars.points += 3;
            },
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 4;
            },
            () => {
              quizVars.cartoonPoints += 1;
            },
          ],
        },
        {
          question: "why",
          responses: [
            "because...",
            "mmm yummy compuper",
            "peppa pig",
            "just to suffer",
          ],
          functions: [
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 4;
            },
            () => {
              quizVars.cartoonPoints += 1;
            },
            () => {
              quizVars.points += 3;
            },
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.isPhoney) {
          return "what a phoney imagine being a phoney...";
        } else if (quizVars.cartoonPoints > 1) {
          return "I don't know what to say... try watching the dinosaur train?";
        }
        var numsArr = [
          null,
          "this should be impossible... should it not?",
          "COUNTRY ROADS, TAKE ME HOME... TO THE PLACE I BELONG, WEST VIRGINIA, MOUNTAIN MOMMA, TAKE ME HOME, COUNTRY ROADS!",
          "never gonna meme you up",
          "thanks for playing! remember to like and subsrcibe" +
            "<br>" +
            "wait i almost forgot your answer is compuper",
          "Insert witty answer here: ",
          "Yay you are 50% good at compuper!",
          "you desire the bane of anime only to find that it is rubbish",
          "you have compuper potential kid... real potential... why dont you sign up at freecomuperinstitute?" +
            "\n" +
            "(no we didnt make a typo that was the only domain available)",
          "You are poggest at compuper",
          "You are so pog at compuper, that santa will not give you one",
          "You are so good at compuper, i worry you may be addicted",
          "You are linus.",
        ];
        return numsArr[quizVars.points];
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.cartoonPoints = 0;
        quizVars.isPhoney = false;
      },
    };
  }
  if (quizID == "yum") {
    return {
      questions: [
        {
          question: "choose one of the yums",
          responses: ["lasagnae", "pie", "sour ice cream", "cookie"],
          functions: [
            () => {
              quizVars.italian += 1;
            },
            () => {
              quizVars.fatAmerican += 1;
            },
            () => {
              quizVars.dessert += 1;
            },
            () => {
              quizVars.snack += 1;
            },
          ],
        },
        {
          question: "choose the last meal you will ever have",
          responses: [
            "a healthy salad",
            "mcdonalds and oily junk food",
            "cookies and cakes and ice cream...",
            "pizza",
          ],
          functions: [
            () => {
              quizVars.healthAddict += 1;
            },
            () => {
              quizVars.fatAmerican += 1;
            },
            () => {
              quizVars.snack += 1;
              quizVars.dessert += 1;
            },
            () => {
              quizVars.italian += 1;
            },
          ],
        },
        {
          question: "food",
          responses: [
            "yummy",
            "I WANT IT ALL GIB GIB",
            "i eat the scarce minimum you fattos",
            "another part of life...",
          ],
          functions: [
            () => {
              quizVars.snack += 1;
            },
            () => {
              quizVars.fatAmerican += 1;
            },
            () => {
              quizVars.healthAddict += 1;
            },
            () => {
              quizVars.overall += 1;
            },
          ],
        },
        {
          question: ".",
          responses: [
            "i feel the same",
            "pls give me food i need it",
            "i want cake",
            "food is for survival why do people eat it for pleasure",
          ],
          functions: [
            () => {
              quizVars.overall += 1;
            },
            () => {
              quizVars.fatAmerican += 1;
            },
            () => {
              quizVars.snack += 1;
              quizVars.dessert += 1;
            },
            () => {
              quizVars.healthAddict += 1;
            },
          ],
        },

        {
          question:
            "why is the vertical alignment of hydrospheres true to life?",
          responses: [
            "i want pasta",
            "cake",
            "you should be fit and healthy and go to the gym every day like me!",
            "easy! due to the collision of the multiple sepsizeisms on the micro-lons",
          ],
          functions: [
            () => {
              quizVars.italian += 1;
            },
            () => {
              quizVars.dessert += 1;
            },
            () => {
              quizVars.healthAddict += 1;
            },
            () => {
              quizVars.overall += 1;
            },
          ],
        },
      ],
      endFunction: () => {
        var dictOfItalian = {1: "pasta", 2: "pizza", 3: "the holy lasagne"};
        var dictOfHealth = {
          1: "spinach",
          2: "banana",
          3: "brocolli",
          4: "you dont eat food",
        };
        var dictOfFatto = {
          1: "hot chips",
          2: "pie",
          3: "sausages",
          4: "oil, just oil",
        };
        var dictOfSnack = {
          1: "a packet of crisps",
          2: "cookies",
          3: "nutrigrain",
        };
        var dictOfDessert = {
          1: "cake",
          2: "ice crean",
          3: "pudding",
          4: "sugar, just sugar",
        };
        var tempList = [
          quizVars.italian,
          quizVars.fatAmerican,
          quizVars.dessert,
          quizVars.snack,
          quizVars.healthAddict,
          quizVars.overall,
        ];
        var curHighest = 0;
        for (x = 0; x < tempList.length; x++) {
          if (tempList[x] > curHighest) {
            curHighest = tempList[x];
          }
        }
        if (curHighest == quizVars.italian) {
          return (
            "You are an italian food addict! Your ranking is " +
            dictOfItalian[quizVars.italian]
          );
        }
        if (curHighest == quizVars.fatAmerican) {
          return (
            "You are a fat american! Your ranking is " +
            dictOfFatto[quizVars.fatAmerican]
          );
        }
        if (curHighest == quizVars.healthAddict) {
          return (
            "You are a health addict! Your ranking is " +
            dictOfHealth[quizVars.healthAddict]
          );
        }
        if (curHighest == quizVars.snack) {
          return (
            "You are a huge snacker! Your ranking is " +
            dictOfSnack[quizVars.snack]
          );
        }
        if (curHighest == quizVars.dessert) {
          return (
            "You eat way too many desserts! Your ranking is " +
            dictOfDessert[quizVars.dessert]
          );
        } else {
          return "you are a casual, and food is but a normality in your life";
        }
      },
      startFunction: () => {
        quizVars.italian = 0;
        quizVars.fatAmerican = 0;
        quizVars.dessert = 0;
        quizVars.snack = 0;
        quizVars.healthAddict = 0;
        quizVars.overall = 0;
      },
    };
  }
  if (quizID == "burgerToShrek") {
    return {
      questions: [
        {
          question: "Main ingredient",
          responses: ["Beef", "Chicken", "Fish", "Vegetable"],
          functions: [
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 3;
            },
            () => {
              quizVars.points += 4;
            },
          ],
        },
        {
          question: "Cheese?",
          responses: ["Lots of it", "One piece", "No"],
          functions: [
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 3;
            },
          ],
        },
        {
          question: "Any extras?",
          responses: ["Onion", "Lettuce", "Pineapple", "Bacon"],
          functions: [
            () => {
              quizVars.layers = true;
            },
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 3;
            },
          ],
        },
        {
          question: "Do you want fries with that?",
          responses: ["Lots of them", "Some", "None"],
          functions: [
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 3;
            },
          ],
        },
        {
          question: "Beverage?",
          responses: ["None", "Lemonade", "Cola", "Orange drink", "Tea"],
          functions: [
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 3;
            },
            () => {
              quizVars.points += 4;
            },
            () => {
              quizVars.points += 5;
            },
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.layers) {
          return "You are Shrek. You have layers, just like the onions you love. Please try again if you feel that that is incorrect.";
        } else {
          return (
            "You are " +
            quizVars.options[quizVars.points] +
            ". Please try again if you feel that that is incorrect."
          );
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.layers = false;
        quizVars.options = [
          "Cheater",
          "Hacker",
          "Cheater",
          "Hacker",
          "Cheater",
          "Donkey",
          "Puss in Boots",
          "Pig 1 of Three Little Pigs",
          "Pig 2 of Three Little Pigs",
          "Pig 3 of Three Little Pigs",
          "Gingerbread Man",
          "Lord Farquaad",
          "Fairy Godmother",
          "Princess Fiona",
          "Dragon",
          "Pinocchio",
          "Mouse 1 of Three Blind Mice",
          "Mouse 2 of Three Blind Mice",
          "Shrek",
        ];
      },
    };
  }
  if (quizID == "numnum") {
    return {
      questions: [
        {
          question: "What is your favorite genre of music?",
          responses: [
            "K-POP!!!! stan Lisa? (author note: i dont watch kpop)",
            "Rock",
            "Pop",
            "Jazz",
          ],
          functions: [
            () => {},
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.points += 3;
            },
            () => {
              quizVars.points += 2;
            },
          ],
        },
        {
          question: "What is your opinion on uranium?",
          responses: ["love it", "hate it", "titanium"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.points += 2;
            },
            () => {},
          ],
        },
        {
          question: "what do you do when sad",
          responses: ["Very", "Not much, but sometimes", "None at all"],
          functions: [
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "true",
          responses: ["True", "False"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "are you egotistical, narcisstical, or average",
          responses: [
            "all of the above",
            "there is nothing above",
            "GIIGLE AND HOOT?!?!?! ::DD",
          ],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.points + 2;
            },
            () => {},
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.jazz) {
          return "YOU ARE THE BARRY BEE BENSON YOU ARE COOLEST PERSON ALIVE!! wait how did youe even get this";
        } else if (quizVars.points == 0) {
          return "YOU ARE ZERO. IMAGINE BEING THIS BAD";
        } else if (quizVars.points == 1) {
          return "first the best. then we have you...";
        } else if (quizVars.points == 2) {
          return "second the worst :D";
        } else if (quizVars.points == 3) {
          return "three. nuff said";
        } else if (quizVars.points == 4) {
          return "four. you are 10 numbers too late";
        } else if (quizVars.points == 5) {
          return "you are 5. you cant decide between things....??? ha imagine being bad";
        } else if (quizVars.points == 6) {
          return "six. you are in a healthy relationship with 9";
        } else if (quizVars.points == 7) {
          return "seven. you are lucky...? idk. your lucky numbers are 7 7 6 . 7";
        } else if (quizVars.points == 8) {
          return "eight. the uncooler infinity";
        } else if (quizVars.points == 9) {
          return "nine. you are in a health relationship with 6";
        } else if (quizVars.points == 10) {
          return "10";
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.jazz = false;
      },
    };
  }
  if (quizID == "fruit") {
    return {
      questions: [
        {
          question: "Are beans the fruit?",
          responses: ["Yes, they are the fruit", "No, they are not the fruit"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "Do you eat the berries or the citruses?",
          responses: ["True", "False"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "How sweet do you like the fruit?",
          responses: ["Very", "Not much, but sometimes", "None at all"],
          functions: [
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
        {
          question: "What music do you listen to when you eat the fruit?",
          responses: ["Jazz", "Rock", "Rickroll"],
          functions: [
            () => {
              quizVars.jazz = true;
            },
            () => {},
            () => {},
          ],
        },
        {
          question:
            "Are you ranga (if unsure, feel free to take our <a href='quiz.html?quiz=ranga'>ranga test</a>today)",
          responses: ["No, I'm Adam", "Yes", "No"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.points++;
            },
            () => {},
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.jazz) {
          return "YOU ARE THE BARRY BEE BENSON YOU ARE COOLEST PERSON ALIVE!!";
        } else if (quizVars.points == 5) {
          return "Your score is 5/5. You are the strawberry which is ranga fruit funy";
        } else if (quizVars.points == 4) {
          return "Your score is 4/5. You are the orange which is kind of ranga fruit ngl";
        } else if (quizVars.points == 3) {
          return "Your score is 3/5. You are the apple.";
        } else if (quizVars.points == 2) {
          return "Your score is 2/5. You are the kiwifruit and you taste the uncool";
        } else if (quizVars.points == 1) {
          return "Your score is 1/5. You are the tomato so not really the fruit";
        } else if (quizVars.points == 0) {
          return "You are the veggietable UGH GROSS get better at fruit.";
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.jazz = false;
      },
    };
  }
  if (quizID == "ranga") {
    return {
      questions: [
        {
          question: "Are you gay?",
          responses: ["yes", "no", "what is a gay"],
          functions: [
            () => {
              quizVars.gay += 1;
            },
            () => {
              quizVars.ranga += 1;
            },
            () => {
              quizVars.points += 1;
            },
          ],
        },
        {
          question: "what colour is your hair?",
          responses: ["black or blonde or brown", "red", "ginger"],
          functions: [
            () => {
              quizVars.ranga += 3;
            },
            () => {
              quizVars.ranga += 1;
            },
            () => {
              quizVars.ranga += 3;
            },
          ],
        },
        {
          question: "does your name start with 'a'?",
          responses: ["yes", "no"],
          functions: [
            () => {
              quizVars.ranga += 1;
            },
            () => {
              quizVars.ranga += 1;
            },
          ],
        },
        {
          question: "why is red = dead?",
          responses: [
            "leeuwin harness",
            "because ranga bad",
            "the mast on the leeuwin is red",
          ],
          functions: [
            () => {
              quizVars.boatKnol += 1;
            },
            () => {
              quizVars.points += 2;
            },
            () => {
              quizVars.points += 3;
            },
          ],
        },
        {
          question: "The",
          responses: [
            "dot",
            "i am a ranga",
            "i am not a ranga",
            "i am neutral",
            "Tea",
            "me too",
          ],
          functions: [
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.ranga += 2;
            },
            () => {
              quizVars.ranga += 3;
            },
            () => {
              quizVars.points += 1;
            },
            () => {
              quizVars.boatKnol += 1;
            },
            () => {
              quizVars.gay += 1;
            },
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.boatKnol > 1) {
          return "you are not a ranga!";
        } else if (quizVars.ranga > 2) {
          return "you are a blooming 100% totalitarian ranga";
        } else if (quizVars.gay > 1) {
          return "gay? that's what you are!";
        } else {
          return "neutrality... that is your way";
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.ranga = 0;
        quizVars.gay = 0;
        quizVars.boatKnol = 0;
      },
    };
  }
  if (quizID == "stinky") {
    return {
      questions: [
        {
          question: "Fortnite",
          responses: ["sometimes", 
                      "fortnite bad",
                      "3", 
                      "i respect people's choice in games", ],
          functions: [
            () => {
              quizVars.points+=2;
            },
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.points+=10;
            },
            () => {
              quizVars.points+=100;
            },
          ],
        },
        {
          question: "who is joe",
          responses: ["Jonathan cena", 
                      "Rock the dwayne johnson",
                      "Barry b bensun", ],
          functions: [
            () => {
              quizVars.points+=20;
            },
            () => {
              quizVars.points+=10;
            },
            () => {
              quizVars.points+=3;
            },
          ],
        },
        {
          question: "do you like pineapple on pizza",
          responses: ["false", 
                      "25-30 years old",
                      "not a", ],
          functions: [
            () => {
              quizVars.points+=1;
            },
            () => {
              quizVars.points+=5;
            },
            () => {
              quizVars.points+=100;
            },
          ],
        },
        {
          question: "hello",
          responses: ["correct, a+", 
                      "yes",
                      "hello", ],
          functions: [
            () => {
              quizVars.points+=0;
            },
            () => {
              quizVars.points+=2;
            },
            () => {
              quizVars.points+=100;
            },
          ],
        },
        {
          question: "what is 2+2",
          responses: ["22", 
                      "4",
                      "fish", 
                      ""],
          functions: [
            () => {
              quizVars.points+=2;
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
            },
            () => {
              quizVars.points+=1;
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
            },
            () => {
              quizVars.points+=100;
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
              quiz.questions.shift();
            },
            () => {
              quizVars.points = 1000;
              quizVars.isFroggeEnding = true;
            }
          ],
        },
        {
          question: "",
          responses: ["d", 
                      "e",
                      "f", 
                      "g",
                      "h"],
          functions: [
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points+=200;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
          ],
        },
        {
          question: "",
          responses: ["p", 
                      "q",
                      "r", 
                      "s",
                      "t"],
          functions: [
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points+=30;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
          ],
        },
        {
          question: "",
          responses: ["l", 
                      "m",
                      "n", 
                      "o",
                      "p"],
          functions: [
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points+=1;
            },
            () => {
              quizVars.points=0;
            },
          ],
        },
        {
          question: "",
          responses: ["g", 
                      "h",
                      "i", 
                      "j",
                      "k"],
          functions: [
            () => {
              quizVars.points+=1;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
          ],
        },
        {
          question: "",
          responses: ["c", 
                      "d",
                      "e", 
                      "f",
                      "g"],
          functions: [
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points=0;
            },
            () => {
              quizVars.points+=1;
            },
          ],
        },
        {
          question: "",
          responses: ["a", 
                      "b",
                      "c", 
                      "d",
                      "e"],
          functions: [
            () => {
              quizVars.points=0;
              quiz.questions.shift();
              quiz.questions.shift();
            },
            () => {
              quizVars.points=0;
              quiz.questions.shift();
              quiz.questions.shift();
            },
            () => {
              quizVars.points=0;
              quiz.questions.shift();
              quiz.questions.shift();
            },
            () => {
              quizVars.points=0;
              quiz.questions.shift();
              quiz.questions.shift();
            },
            () => {
              quizVars.points+=1;
              quiz.questions.shift();
              quiz.questions.shift();
            },
          ],
        },
        {
          question: "poggers?",
          responses: ["pog", 
                      "not pog",
                      "Ryan Gutierrez", ],
          functions: [
            () => {
              quizVars.points+=10;
            },
            () => {
              quizVars.points+=1;
            },
            () => {
              quizVars.points+=100;
            },
          ],
        },
        {
          question: "what letter",
          responses: ["triangle", 
                      "72",
                      "a",
                      "corn" ],
          functions: [
            () => {
              quizVars.points+=10;
            },
            () => {
              quizVars.points+=3;
            },
            () => {
              quizVars.points+=150;
            },
            () => {
              if (Math.random() < 0.01) {
                quizVars.points+=10;
              } else {
                quizVars.points-=1000000;
              }
            },
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.isFroggeEnding && quizVars.points != 1234) {
          return "you've found yourself in a magical place without visible characters"
        } else if (quizVars.points < 0) {
          return "poggerino";
        } else if (quizVars.points < 10) {
          return "ooga booga you are the stinky man of the stinky kind";
        } else if (quizVars.points < 20) {
          return "you are a stinky but not very";
        } else if (quizVars.points < 50) {
          return "not very stinky you are the meh man ekcs dee";
        } else if (quizVars.points != 1234) {
          return "you are the epic of the cool";
        } else {
          return "congratulations you got the secret ending";
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.isFroggeEnding = false;
      },
    };
  }
  if (quizID == "sus") {
    return {
      questions: [
        {
          question: "Did you do the task",
          responses: ["Yes I did do the task", "I did the task in electric","Why is my name red"],
          functions: [
            () => {
            },
            () => {
              quizVars.points++;
            },
            () => {
              quizVars.sus = true;
              for (let i=0; i < quiz.questions.length; i++) {
                quiz.questions[i].question = "Sus";
                for (let j=0; j < quiz.questions[i].responses.length; j++) {
                  quiz.questions[i].responses[j] = "Sus"
                }
                for (let j=0; j < quiz.questions[i].functions.length; j++) {
                  quiz.questions[i].functions[j] = () => {}
                }
              }
            },
          ],
        },
        {
          question: "Who do you trust",
          responses: ["Red (you saw them vent)", "Green (did nothing)"],
          functions: [
            () => {},
            () => {
              quizVars.points++;
            },
          ],
        },
        {
          question: "Which task do you do",
          responses: ["Electric", "Trash", "Medical bay"],
          functions: [
            () => {
              quizVars.points++;
            },
            () => {
            },
            () => {
              quizVars.points--;
            },
          ],
        },
        {
          question: "Discussion time",
          responses: ["I saw red vent", "Orange looks sus", "我正在玩第五身份，喜欢玩游戏吗？","I need to get pizza"],
          functions: [
            () => {quizVars.points--;},
            () => {quizVars.points++;},
            () => {quizVars.identity = true;},
            () => {},
          ],
        },
        {
          question: "They want to eject you",
          responses: ["Yes", "No"],
          functions: [
            () => {quizVars.points++;},
            () => {},
          ],
        },
      ],
      endFunction: () => {
        if (quizVars.sus) {
          return "SUS";
        }
        if (quizVars.identity) {
          return "I'm playing Identity V, fancy a game?";
        }
        if (quizVars.points == -2) {
          return "You stay on the ship, and the crew wins."
        }
        if (quizVars.points == -1) {
          return "You stay on the ship, but the crew dies!"
        }
        if (quizVars.points == 0) {
          return "Everyone disconnects and the game ends."
        }
        if (quizVars.points == 1) {
          return "Everyone thinks you are a bit sus, but eject red."
        }
        if (quizVars.points == 2) {
          return "You are kind of sus, so you are ejected just to be sure."
        }
        if (quizVars.points == 3) {
          return "Pretty sus, but impostor backs you up."
        }
        if (quizVars.points == 4) {
          return "You are ejected, but everyone is surprised that you are not impostor."
        }
        if (quizVars.points == 5) {
          return "You are impostor. You lose."
        }
      },
      startFunction: () => {
        quizVars.points = 0;
        quizVars.sus = false;
        quizVars.identity = false;
      },
    };
  }
}
