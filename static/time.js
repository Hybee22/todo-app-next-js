const clock = document.querySelector("#clock");

// document.addEventListener("DOMContentLoaded", run);

function time() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  var clockStr = `${hours}:${minutes}:${seconds}`;

  clock.innerHTML = clockStr;
}

const run = () => {
  time();
  setInterval(time, 1000);
};

run();

// export const run;
