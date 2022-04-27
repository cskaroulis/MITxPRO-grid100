let cellCount = 100;
let intervalId;
let currentId = 0;
let speedMs = 500;

const containerElement = document.getElementById("container");

for (i = 0; i < cellCount; i++) {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.id = "n" + (i + 1);
  newDiv.innerHTML = i + 1;
  containerElement.appendChild(newDiv);
}

function change() {
  // clean up old element
  const previousElement = document.getElementById("n" + currentId);

  if (previousElement) {
    previousElement.classList.remove("on");
  }

  // create an id for the next element
  currentId += 1;

  // if done, exit
  if (currentId > cellCount) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("end");
    return;
  }

  // customize the next element
  const currentElement = document.getElementById("n" + currentId);

  if (currentElement) {
    currentElement.classList.add("on");
  }
}

function move() {
  // check if already an interval has been set up
  if (!intervalId) {
    console.log("start");
    intervalId = setInterval(change, speedMs);
  }
}
