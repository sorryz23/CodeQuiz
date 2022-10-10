//select start button
//add click to button
//on click start quiz

//add array of answers
//add correct answer
//add timer
//when wrong subtract time
//when right add score
//when time hits zero, game over add score
var questions =[
    {
        text:"question one",
        choices:["a", "b", "c", "d"],
        correct:"a"
    },
    {
        text:"question two",
        choices:["a", "b", "c", "d"],
        correct:"a"
    },
    {
        text:"question three",
        choices:["a", "b", "c", "d"],
        correct:"a"
    },
    {
        text:"question four",
        choices:["a", "b", "c", "d"],
        correct:"a"
    },
]
var score = 0;
var questionIndex = 0;

var startTime = document.querySelector("#startTime");
var timer = document.querySelector("#start");
var questions = document.querySelector("#questions");
var container = document.querySelector("#container");

var secondsLeft = 76;
var holdInterval = 0;
var penataly = 10;
var ULquestions = document.querySelector("#ul")
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContext = "Time: " + secondsLeft;

            if (secondsLeft <=0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContext = "Time's Up!";
            }
        }, 1000);
    }
    render(questionIndex)
});
function render(questionIndex) {
    questions.innerHTML = "";
    ULquestions.innerHTML = "";
    for (var i =0; i <questionIndex.length; i++) {
        var userQuestion = questions[questionIndex].text;
        var userChoice = questions[questionIndex].choices
        questions.textContent = userQuestion;
    }
    userChoice.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendchild(ulCreate);
        ulCreate.appendchild(listItem);
        listItem.addEventListener("click", (compare));
    })
}