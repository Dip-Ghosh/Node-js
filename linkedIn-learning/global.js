const path = require("path");
const process = require("process");
const util = require("util");

const hello = "Hello World from Node.js";
let justNode = hello.slice(17);


console.log(justNode);
console.log(__dirname);
console.log(`The file name is ${path.basename(__filename)}`);

for(let key in global) {
    console.log(key);
}

console.log(process.argv);

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greetings = grab("--greeting");
let user = grab("--user");

console.log(user);
console.log(greetings);

process.stdout.write("Hello World! \n \n");
const questions = [
    "what is your name?",
    "what would you like to do?",
    "what is your wife name?",
];

const answers = [];
function ask(i = 0) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(">");
}

ask();

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})


process.on("exit", (code) => {
    process.stdout.write(">");
    process.stdout.write(`Go ${answers[0]} \n ${answers[1]} \n ${answers[2]}`);
})

const waitTime = 3000;
console.log(`Waiting...${waitTime/1000}ms`);
const timerFinished = () => console.log("Finished...");

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterval;
    console.log(`Waiting ${currentTime / 1000}ms`);
};

setInterval(incTime, waitInterval);

console.log(path.basename(__filename));
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

util.log(path.basename(__filename));

const v8 = require("v8");
console.log(util.getHeapstatistics());

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "what is your name?",
    "where do you live?",
    "what are you going to do with node js?"
];

function collectAnswer(questions, done) {
    const answers = [];

    const questionAnswers = (answer) => {
        answers.push(answer.trim());

        if (answers.length < questions.length) {
            rl.questions(
                questions[answers.length],
                questionAnswers
            )
        } else {
            return done(answers);
        }
    }

    rl.question(questions, (answer) => {
        console.log(`Answer: ${answer}`);
    })
}

collectAnswer(questions[0], (answers) => {
    console.log(`Question: ${answers}`);
    process.exit();
})

let count = 0;
const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;
module.exports = {
    anything: true,
    count,
    inc,
    dec
}