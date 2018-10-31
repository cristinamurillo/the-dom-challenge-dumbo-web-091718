const timerId = setInterval(() => {
    if(pauseButton.id === "pause"){
    incrementTime()
    }
}, 1000);

let timerThing = parseInt(document.querySelector('#counter').innerText)
let timerLocation = document.querySelector('#counter')

function incrementTime(){
 timerLocation.innerText = timerThing + 1;
 timerThing += 1
}


const minus = document.getElementById('-')
const plus = document.getElementById('+')
const heart = document.getElementById('<3')
const pauseButton = document.getElementById('pause')

let currentTime = null;
let timeHash = {}

minus.addEventListener('click', decrementTime)
plus.addEventListener('click', incrementTime)
heart.addEventListener('click', () => {
if (timeHash[timerThing]){
    let oldCount = timeHash[timerThing]
    timeHash[timerThing] = oldCount + 1
    document.getElementById(timerThing).innerText = `${timerThing} has been liked ${timeHash[timerThing]} times`
 } else {
  addList()
 } 
})
pauseButton.addEventListener('click', () => {
    if (event.target.id === "pause"){
     pauseTimer()
    } else {
     resumeTimer()
    }
})


function pauseTimer(){
    // clearInterval(timerId)
    heart.disabled = true;
    minus.disabled = true;
    plus.disabled = true;
    pauseButton.innerHTML = "resume"
    pauseButton.id = "resume"
}

function resumeTimer(){
    pauseButton.innerHTML = "pause"
    pauseButton.id = "pause"
    heart.disabled = false;
    minus.disabled = false;
    plus.disabled = false;
    // timerId = setInterval(incrementTime, 1000);
    
   
}


function decrementTime(){
    
    timerLocation.innerText = timerThing - 1;
    timerThing -= 1
}

const list = document.createElement('ul');
document.body.appendChild(list);

function addList() {
    let li = document.createElement('li');
    li.id = timerThing 
    timeHash[timerThing] = 1
    li.innerHTML = `${timerThing} has been liked 1 time`
    list.appendChild(li)
}  
