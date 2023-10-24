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

const countdownTimer = {
  targetDate: new Date("Oct 28, 2023 12:00:00").getTime(),
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
        this.days = Math.round(timeDiff / (1000 * 60 * 60 * 24));
        this.hours = Math.round(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.round((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.round((timeDiff % (1000 * 60)) / 1000);
        
        this.render();
      }
    },

    1000);
  },

  render: function (){
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = this.target - now;

      if (timeRemaining <= 0) {
        clearInterval(this.interval);
        console.log("Countdown has ended");
      } else {
        this.days = Math.round(timeDiff / (1000 * 60 * 60 * 24));
        this.hours = Math.round(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.round((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.round((timeDiff % (1000 * 60)) / 1000);
        
        this.render();
      }
    },

    1000);
}
}



/*const eventDate = new Date("Oct 28, 2023 12:00:00").getTime();

const today = new Date();

const timeDiff = eventDate - today;

const days = Math.round( timeDiff / (1000 * 60 * 60 * 24))
const hours = Math.round ( timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const minutes = Math.round (timeDiff % (1000 * 60 * 60) / (1000 * 60))
const seconds = Math.round ( timeDiff % (1000 * 60) / 1000)

console.log(days, hours, minutes, seconds);
*/

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
