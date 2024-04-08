// const color = document.getElementById("color");
// const change1 = document.getElementById("change1");
// const change2 = document.getElementById("change2");

// // change1 클릭 시 색상 변경
// change1.onclick = () => {
//   color.style.backgroundColor = "blue"; // 예시 색상
//   color.style.color = "white"; // 텍스트 색상 변경 (선택적)
// };

// // change2 클릭 시 색상 변경
// change2.onclick = () => {
//   color.style.backgroundColor = "green"; // 다른 예시 색상
//   color.style.color = "yellow"; // 텍스트 색상 변경 (선택적)
// };

const changeColor = (event) => {
  console.log(envent);
  console.log("evvent target ::: " + this);
  console.log(this);
  console.log(event.target);
  // function 으로 함수를 생성했을때 this와 같은 값을 얻어냄.

  const color = prompt("색을 입력하세요.");
  document.body.style.backgroundColor = rgb(11, 33, 55);
};

const btnList = document.getElementsByTagName("button");
console.log(btnList);

function changeColor(event) {
  const color = prompt("색을 입력하세요.");
  document.body.style.backgroundColor = color;
}

// button의 모두의 요소를 가져옴
const change = document.querySelectorAll("button");
console.log(change);

for (let i = 0; i < change.length; i++) {
  change[i].addEventListener("click", changeColor);
}
