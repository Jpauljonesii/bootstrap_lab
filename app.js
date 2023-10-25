'use strict';
const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });

  function submitForm(){
    alert('Form Submitted');
  }
/*
const timeElms = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"), 
  seconds: document.getElementById("seconds"),
};

const countdownTimer = {
  targetDate: new Date("2023-10-28T12:00:00").getTime(),
  interval: null, 
  days: 0, 
  hours: 0, 
  minutes: 0, 
  seconds: 0, 

  start: function () {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = this.target - now;

      if (timeRemaining <= 0) {
        clearInterval(this.interval);
        console.log("Countdown has ended");
      } else {
        this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        this.render();
      }
    },

    1000);
  },

  stop: function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },

  render: function (){
    timeElms.days.textContent = this.days;
    timeElms.hours.textContent = this.hours;
    timeElms.minutes.textContent = this.minutes;
    timeElms.seconds.textContent = this.seconds;
  },
};

countdownTimer.start();
*/

    



const seminarObject = {
  eventName: "Medicare Seminar",
  eventDate: new Date("Oct 28, 2023 12:00:00").getTime(),

  timerCountDown: function (){
    const now = new Date().getTime();
    const distance = this.eventDate - now;

    if (distance < 0) {
    clearInterval(this.setTimer);
    document.getElementById("timer").innerHTML = "Event has started";
    return;
  }
  const days = Math.floor( distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor ( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor (distance % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor ( distance % (1000 * 60) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
},

setTimer: setInterval(function() {
    seminarObject.timerCountDown();
  }, 1000)
};





/*const timeElement = document.getElementById("time-left")

  const timerObject = {
    timeLeft: 0,
    timeOutID: null,
    intervalID: null,

    start: function(callback, seconds, intervalCallback){
      if (this.timeLeft){

        this.timeOutID = setTimeout(callback,this.timeLeft * 1000)
      } else {


        this.timeLeft = seconds
        let delay = seconds * 1000;

        this.timeOutID = setTimeout(callback, delay);
      }
      this.intervalID = setInterval(intervalCallback, 1000)
      console.log("Timer Started");

    },
    stop: function(){
      if (this.intervalID){
        clearInterval(this.intervalID)
        clearTimeout(this.timeOutID)
        console.log("Timer Stopped");
      }
    },

    reset: function (){
      this.stop()
      this.timeLeft = 0;
      timeElement.textContent = timerObject.timeLeft;
    }
  }


  function myCallback(){
    console.log("Timer Stopped")
    clearTimeout(timerObject.intervalID)
    timerObject.timeLeft--;
    timeElement.textContent = timerObject.timeLeft;

  }
  
  function myIntervalCallback (){
    timerObject.timeLeft--;
    console.log("TIME LEFT: ", timerObject.timeLeft);
    timeElement.textContent = timerObject.timeLeft;
    
  }
  */

 // timerObject.start(myCallback, 5, myIntervalCallback);
