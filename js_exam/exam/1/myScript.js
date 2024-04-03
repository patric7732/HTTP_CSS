// 1.
// document.write("하핫하하핫!2");
// document.write("하��하하��!3");

// 2.
// const name = "엄준식"
// document.write(name);

// 3. 로또 번호 추첨기, Math.random() : 임의의 숫자를 저으이함
// const num = Math.random() * 45 + 1;
// const num = parseInt(Math.random() * 45+1);
// const ball1 = parseInt(num);
// document.write(ball1);

// 4. 로또 추첨기2
// const lotto = [];

// lotto.push(parseInt(Math.random() * 45 + 1));
// lotto.push(parseInt(Math.random() * 45 + 1));
// lotto.push(parseInt(Math.random() * 45 + 1));
// lotto.push(parseInt(Math.random() * 45 + 1));
// lotto.push(parseInt(Math.random() * 45 + 1));
// lotto.push(parseInt(Math.random() * 45 + 1));
// lotto.push(parseInt(Math.random() * 45 + 1));

// document.write(lotto);

// 5. 로또 추첨기3
// const lotto = [];
// for (var i = 0; i < 6; i++){
//   lotto.push(parseInt(Math.random() * 45 + 1));
// }

// document.write(lotto);

// 6. 조건문
// const lotto = [];

// for (var i = 0; i < 6; i++){
//     const num = parseInt(Math.random() * 45 + 1);
//     if (lotto.indexOf(num) == -1){
//       lotto.push(num);
//     }
//   }

//   document.write(lotto);

// 7. While문
// const lotto = [];

// while (lotto.length < 6) {
//   const num = parseInt(Math.random() * 45 + 1);
//   if (lotto.indexOf(num) == -1) {
//     lotto.push(num);
//   }
// }
// document.write(lotto);

// // 8. 오름차순 정렬
// const lotto = [];

// while (lotto.length < 6) {
//   const num = parseInt(Math.random() * 45 + 1);
//   if (lotto.indexOf(num) == -1) {
//     lotto.push(num);
//   }
// }
// lotto.sort((a, b) => a - b);
// // document.write(lotto);
// document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
// document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
// document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
// document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
// document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
// document.write("<div class='ball ball6'>" + lotto[5] + "</div>");

// 9. 다시 짜보기

// const lotto = [];

// while (lotto.length < 6) {
//   const num = parseInt(Math.random() * 45 + 1);
//   if (lotto.indexOf(num) == -1) {
//     lotto.push(num);
//   }
// }
// document.write(lotto);

const lotto = [];

while (lotto.length < 6) {
  const num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}

document.write(lotto);
