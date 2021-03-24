// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
  }, 1000);

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
    const divTM = document.querySelector(`#timeout-nesting`);
    const p1 = document.createElement(`p`);
    p1.innerText = `One`;
    divTM.append(p1);
    setTimeout(() => {
      const p2 = document.createElement(`p`);
      p2.innerText = `Two`;
      divTM.append(p2);
    }, 1000);
  }, 2000);

// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let time = 0;
const clock = setInterval(() => {
  console.log(time);
  time++;
}, 1000);


// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
  clearInterval(clock);
});

// BONUS________________________________________________________________
// Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;

const countdown = setInterval(() => {
  startingSeconds--;
  const minutes = Math.floor(startingSeconds / 60);
  const seconds = startingSeconds % 60;
  p4.innerText = `${minutes}:${seconds}`;

  if (startingSeconds === 0){
      p4.innerText = `TIME IS UP`;
      clearInterval(countdown);
  }
 
}, 1000);


