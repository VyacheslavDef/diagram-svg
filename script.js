const circle = document.querySelector(".progress_circle");
const input = document.querySelector(".value_progress");
const radius = circle.r.baseVal.value;

const circleTwo = document.querySelector(".progress_circle2");
const inputTwo = document.querySelector("#valueTwo");
const radiustwo = circleTwo.r.baseVal.value;

const total_percent = document.querySelector("#total_percent")
const loyalty = document.querySelector(".loyalty")

const circum = 2 * Math.PI * radius;
let result = 0;


function setProgressYellow(percent = input.value, percentOne = inputTwo.value) {
  circle.style.strokeDasharray = `${circum} ${circum}`;
  circle.style.strokeDashoffset = circum;
  result = Number(percent) + Number(percentOne);
    const offset = circum - (percent / 100) * circum;
    circle.style.strokeDashoffset = offset;

    input.addEventListener('change', ()=> a(percent))
    setProgressGreen()
  total_percent.innerHTML = `${result}%`
}

function setProgressGreen(percent=inputTwo.value, percentOne = input.value) {
  circleTwo.style.strokeDasharray = `${circum} ${circum}`;
  circleTwo.style.strokeDashoffset = circum;
  const offset = circum - ((Number(percent) + Number(percentOne)) / 100) * circum;
  result = Number(percent) + Number(percentOne)
  total_percent.innerHTML = `${result}%`
  circleTwo.style.strokeDashoffset = offset;
  changeTotalPercent(result)
}

function changeTotalPercent (result) {
  switch (true) {
    case result > 80:
      loyalty.innerHTML = 'низкая';
      break;
      case result > 60:
      loyalty.innerHTML = 'ниже среднего';
      break;
      case result >= 50:
      loyalty.innerHTML = 'средняя';
      break;
      case result > 40:
        loyalty.innerHTML = 'выше среднего';
        break;
      case result > 20:
      loyalty.innerHTML = 'высокая';
      break;
  
    default:
      break;
  }
}

setProgressYellow();
setProgressGreen()
input.addEventListener("change", () => {
  setProgressYellow(input.value);
});

inputTwo.addEventListener("change", () => {
  setProgressGreen(inputTwo.value);
});
