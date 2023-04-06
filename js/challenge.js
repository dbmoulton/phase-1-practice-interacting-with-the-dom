const timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
    if (!running) {return}
    ++totalSeconds;
           if(totalSeconds < 10)
             seconds = "0"+totalSeconds;
             else seconds = totalSeconds
           document.getElementById("counter").innerHTML = seconds;
        }
function addSecond(){
    const bPlus = document.getElementById("plus");
    bPlus.addEventListener("click", () => {
        totalSeconds++
        document.getElementById("counter").innerHTML = totalSeconds;
    })
}
addSecond()

function minusSecond(){
    const bPlus = document.getElementById("minus");
    bPlus.addEventListener("click", () => {
        totalSeconds--
        document.getElementById("counter").innerHTML = totalSeconds;
    })
}
minusSecond()

let running = true
const b1 = document.getElementById("pause")
b1.addEventListener("click", toggle)

function toggle(){
    running = !running;
    if (running) {
        b1.innerHTML = "pause"
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
    } else {
        b1.innerHTML = "restart"
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
    }
}
       
let likesByNumber = {}


const heart = document.getElementById("heart")
const likes = document.getElementById("likes")
heart.addEventListener("click", () => {
        if (totalSeconds in likesByNumber){
           likesByNumber[totalSeconds]++ 
        } else {
            likesByNumber[totalSeconds] = 1
        }
        renderLikes()
})

function renderLikes() {
    let list = ""
    for (const num in likesByNumber){
        list = list + "<li>" + num + " is liked " + likesByNumber[num] + " times </li>"
    }
    document.getElementsByClassName("likes")[0].innerHTML = list
}


const comment = document.getElementById("comment-input")
const submitComment = document.getElementById("submit")
const commentList = document.getElementById("list")
submitComment.type = "button"

submitComment.addEventListener("click", () => {
    let newHTML = comment.value + "<br>"
    commentList.innerHTML = commentList.innerHTML + newHTML
    comment.value = ""
    // commentList.innerHTML = "lksdjf"
    return false
})