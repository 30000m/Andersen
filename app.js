let inPut1 = document.querySelector(".input1");
let btn1 = document.querySelector(".btn1");
let p1 = document.querySelector(".out1");

let inPut2 = document.querySelector(".input2");
let btn2 = document.querySelector(".btn2");
let p2 = document.querySelector(".out2");

let inPut3 = document.querySelector(".input3");
let btn3 = document.querySelector(".btn3");
let p3 = document.querySelector(".out3");

let p4 = document.querySelector(".out4");

btn1.onclick = tusk1;
inPut1.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    return tusk1();
  }
});

btn2.onclick = tusk2;
inPut2.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    return tusk2();
  }
});

btn3.onclick = tusk3;
inPut3.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    return tusk3();
  }
});

p4.innerText =
  "Скобочная последовательность неправильная. Предлагаю несколько вариантов изменений:" +
  '\n 1. Заменить предпоследний символ "]" на ")": \n [((())()(()))]' +
  '\n 2. Заменить второй символ "(" на "[": \n [[(())()(())]]' +
  '\n 3. Убрать второй символ "(" и предпоследний символ "]": \n [(())()(())]' +
  '\n 4. Добавить пару символов ")" и "[":' +
  "\n [[((())()(()))]]" +
  "\n [((()))()[(())]]" +
  "\n [((()))[()(())]]" +
  "\n [()(())()(())[]]" +
  "\n [((())()(()))][]";

function tusk1() {
  let x = inPut1.value;
  if (x > 7) {
    return (p1.textContent = "Привет");
  }
  p1.textContent = "";
}

function tusk2() {
  let y = inPut2.value;
  if (y.toLowerCase() == "вячеслав") {
    return (p2.textContent = "Привет, Вячеслав");
  }
  p2.textContent = "Нет такого имени";
}

function tusk3() {
  let str = inPut3.value;
  str = str.split(" ");
  let result = str.filter((i) => i % 3 === 0 && i != 0);
  p3.textContent = result.join(", ");
}