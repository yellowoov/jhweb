function main(x) {
  var input = parseInt(prompt("숫자 맞추기 게임!\n난이도를 선택해주세요!(1 ~ 3)\n"));

  switch (input) {
    case 1:
      round1();
      break;
    case 2:
      round2();
      break;
    case 3:
      round3();
      break;
    default:
      alert("잘못된 입력입니다");
  }
}

function round1() {
  var num = Math.round(Math.random() * 48) + 1;

  alert("힌트! 맞춰야 할 숫자는 짝수일까요? 홀수일까요?\n");
  if (num % 2 == 0) {
    alert("맞춰야 할 숫자는 짝수입니다\n");
  }
  else {
    alert("맞춰야 할 숫자는 홀수입니다\n");
  }

  var count = 0;
  while (true) {
    do {
      var inputnum = parseInt(prompt("1 ~ 49 사이의 숫자를 입력하세요"));
      count += 1;
    } while (!(inputnum >= 1 && inputnum <= 49));

    if (inputnum > num) {
      alert("입력하신 숫자가 맞춰야 할 숫자보다 커요!\n");
    }
    else if (inputnum < num) {
      alert("입력하신 숫자가 맞춰야 할 숫자보다 작아요!\n");
    }
    else {
      alert("정답입니다~! " + count + "번 만에 맞추셨네요!\n");
      break;
    }
  }
}

function round2() {
  var num = Math.round(Math.random() * 98) + 1;

  alert("힌트! 맞춰야 할 숫자는 짝수일까요? 홀수일까요?\n");
  if (num % 2 == 0) {
    alert("맞춰야 할 숫자는 짝수입니다\n");
  }
  else {
    alert("맞춰야 할 숫자는 홀수입니다\n");
  }

  var count = 0;
  while (true) {
    do {
      var inputnum = parseInt(prompt("1 ~ 99 사이의 숫자를 입력하세요"));
      count += 1;
    } while (!(inputnum >= 1 && inputnum <= 99));

    if (inputnum > num) {
      alert("입력하신 숫자가 맞춰야 할 숫자보다 커요!\n");
    }
    else if (inputnum < num) {
      alert("입력하신 숫자가 맞춰야 할 숫자보다 작아요!\n");
    }
    else {
      alert("정답입니다~!" + count + "번 만에 맞추셨네요!\n");
      break;
    }
  }
}

function round3() {
  var num = Math.round(Math.random() * 198) + 1;

  alert("힌트! 맞춰야 할 숫자는 짝수일까요? 홀수일까요?\n");
  if (num % 2 == 0) {
    alert("맞춰야 할 숫자는 짝수입니다\n");
  }
  else {
    alert("맞춰야 할 숫자는 홀수입니다\n");
  }

  var count = 0;
  while (true) {
    do {
      var inputnum = parseInt(prompt("1 ~ 199 사이의 숫자를 입력하세요"));
      count += 1;
    } while (!(inputnum >= 1 && inputnum <= 199));

    if (inputnum > num) {
      alert("입력하신 숫자가 맞춰야 할 숫자보다 커요!\n");
    }
    else if (inputnum < num) {
      alert("입력하신 숫자가 맞춰야 할 숫자보다 작아요!\n");
    }
    else {
      alert("정답입니다~!" + count + "번 만에 맞추셨네요!\n");
      break;
    }
  }
}
