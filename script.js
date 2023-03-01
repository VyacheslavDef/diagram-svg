const circleYellow = document.querySelector(".progress_circle");
const input = document.querySelector(".value_progress");
const radius = circleYellow.r.baseVal.value;

const circleGreen = document.querySelector(".progress_circle2");
const inputGreen = document.querySelector("#valueTwo");
const radiustwo = circleGreen.r.baseVal.value;

const circleRed = document.querySelector(".progress_circle3");
const inputRed = document.querySelector("#valueThree");
const radiusThree = circleGreen.r.baseVal.value;

const total_percent = document.querySelector("#total_percent");
const loyalty = document.querySelector(".loyalty");

const namecrcl = document.querySelectorAll(".name_crcl");
const path = document.querySelectorAll(".path_crkl");

const circum = 2 * Math.PI * radius;
let result = 0;

function setProgress(
  percentGreen = inputGreen.value,
  percentYellow = input.value,
  percentRed = inputRed.value
) {
  circleRed.style.strokeDasharray = `${circum} ${circum}`;
  circleGreen.style.strokeDasharray = `${circum} ${circum}`;
  circleYellow.style.strokeDasharray = `${circum} ${circum}`;

  if (circleYellow.classList.value === "progress_circle") {
    circleYellow.style.strokeDashoffset = circum - (percentYellow / 100) * circum;
} else {
  circleYellow.style.strokeDashoffset = null
  input.value = 0
  percentYellow = 0
  result = Number(percentGreen) + Number(percentYellow) + Number(percentRed);
}

  if (circleGreen.classList.value === "progress_circle2") {
  circleGreen.style.strokeDashoffset = circum - ((Number(percentYellow) + Number(percentGreen)) / 100) * circum;
} else {
  circleGreen.style.strokeDashoffset = null
  inputGreen.value = 0
  percentGreen = 0
  result = Number(percentGreen) + Number(percentYellow) + Number(percentRed);
}

  if (circleRed.classList.value === "progress_circle3") {
  circleRed.style.strokeDashoffset = circum - ((Number(percentGreen) + Number(percentYellow) + Number(percentRed)) / 100) * circum;
} else {
  circleRed.style.strokeDashoffset = null
  inputRed.value = 0
  percentRed = 0
  result = Number(percentGreen) + Number(percentYellow) + Number(percentRed);
}

  result = Number(percentGreen) + Number(percentYellow) + Number(percentRed);
  total_percent.innerHTML = `${result}%`;
  changeTotalPercent(result);
}

function changeTotalPercent(result) {
  switch (true) {
    case result > 80:
      loyalty.innerHTML = "низкая";
      break;
    case result > 60:
      loyalty.innerHTML = "ниже среднего";
      break;
    case result >= 50:
      loyalty.innerHTML = "средняя";
      break;
    case result > 40:
      loyalty.innerHTML = "выше среднего";
      break;
    case result > 20:
      loyalty.innerHTML = "высокая";
      break;
    default:
      break;
  }
}

input.addEventListener("change", () => {
  setProgress();
});

inputGreen.addEventListener("change", () => {
  setProgress();
});

inputRed.addEventListener("change", () => {
  setProgress();
});

function namecrclAddedClass(event) {
  console.log(event.target.id);
  if (event.target.id === "1") {
    path.forEach((x) => {
      if (x.id === event.target.id) {
        x.classList.toggle("ds-none");
        circleYellow.classList.toggle("ds-none");
        setProgress();
      }
    });
  }
  if (event.target.id === "2") {
    path.forEach((x) => {
      if (x.id === event.target.id) {
        x.classList.toggle("ds-none");
        circleGreen.classList.toggle("ds-none");
        setProgress();
      }
    });
  }
  if (event.target.id === "3") {
    path.forEach((x) => {
      if (x.id === event.target.id) {
        x.classList.toggle("ds-none");
        circleRed.classList.toggle("ds-none");
        setProgress();
      }
    });
  }
}

namecrcl.forEach((color) =>
  color.addEventListener("click", namecrclAddedClass)
);

setProgress();