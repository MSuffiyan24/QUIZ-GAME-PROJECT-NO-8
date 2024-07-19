import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

const quiz: {
    Question_1:string;
    Question_2:string;
    Question_3:string;
    Question_4:string;
    Question_5:string;
} = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "How to download typescript  globally?",
        choices: ["a: npm i typescript -g","b: npm i --g typescript","c: npm i -g typescript","d: npm -g i typescript"].map(Choice =>({name:Choice,value:Choice}))
    },
    {
        name: "Question_2",
        type: "list",
        message: "What is parameter in typescript?",
        choices: ["a: {Name:string}","b: [Age:Nummber]","c: (Name:Suffiyan, Age:26)"].map(Choice =>({name:Choice,value:Choice}))
    },
    {
        name: "Question_3",
        type: "list",
        message: "What is ECMA Stands for?",
        choices: ["a: the European Computer Manufacturers Association","b: Eastern Communication Malfunction Association ","c: the European Component Manufacturers Association","d: eurpian communication association"].map(Choice =>({name:Choice,value:Choice}))

    },
    {
        name: "Question_4",
        type: "list",
        message: "what is typescript?",
        choices: ["a: typescipt is a language","b: typescript is a superset of javascript ","c: typescript is founding  language of computer"].map(Choice =>({name:Choice,value:Choice}))

    },
    {
        name: "Question_5",
        type: "list",
        message: "what is the command prompt for downloading inquiter types?",
        choices: ["a: npm i inquirer","b: tsc i --save-dev @types/inquirer ","c: npm i -save-dev@type/inquirer","d: npm i --save-dev @types/inquirer"].map(Choice =>({name:Choice,value:Choice}))

    } 
]);

let score: number = 0;

switch(quiz.Question_1) {
    case "c: npm i -g typescript":
    console.log("1: Correct Ans");
    ++score;
    break;
    default:
    console.log("1: Incorrect Ans");
}
switch(quiz.Question_2) {
    case "c: (Name:Suffiyan, Age:26)":
    console.log("2: Correct Ans");
    ++score;
    break;
    default:
    console.log("2: Incorrect Ans");
}
switch(quiz.Question_3) {
    case "a: the European Computer Manufacturers Association":
    console.log("3: Correct Ans");
    ++score;
    break;
    default:
    console.log("3: Incorrect Ans");
}
switch(quiz.Question_4) {
    case "b: typescript is a superset of javascript ":
    console.log("4: Correct Ans");
    ++score;
    break;
    default:
    console.log("4: Incorrect Ans");
}
switch(quiz.Question_5) {
    case "d: npm i --save-dev @types/inquirer":
    console.log("5: Correct Ans");
    ++score;
    break;
    default:
    console.log("5: Incorrect Ans");
}

console.log(`youe score is ${score}`);




