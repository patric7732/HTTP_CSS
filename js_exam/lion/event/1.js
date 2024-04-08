const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number);
console.log(increase);
console.log(decrease);

// increase.onclick = () => {
//     const current = parseInt(number.innerText, 10);

//     number.innerText = current + 1;
// };
// decrease.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     numver.innerText = current - 1;
// };

// const number = document.getElementById("number");
// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

increase.addEventListener("click", () => alert("1이 증가합니다."));

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
decrease.addEventListener("click", () => alert("1이 감소합니다."));

// function hi() {
//   if (increase) {
//     alert("1이 증가합니다.");
//   } else if (decrease) {
//     alert("1이 감소합니다.");
//   }
// }
