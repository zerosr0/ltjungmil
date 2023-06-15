const visual = document.querySelector('#visual');
const panels = document.querySelectorAll('.panel li');


const len = panels.length - 1;
const interval = 4000;
let vs_num = 0;
let timer = null;

startRolling();


//패널 활성화함수
function activation(index) {
  for (const el of panels) el.classList.remove('on');
  panels[index].classList.add('on');
  vs_num = index;
}

//롤링함수
function rolling() {
  vs_num < len ? vs_num++ : (vs_num = 0);
  activation(vs_num);
}

//롤링 시작 함수
function startRolling() {
  activation(vs_num);
  timer = setInterval(rolling, interval);
}
