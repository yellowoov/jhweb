function gugu(x) {
  var input = parseInt(prompt("구구단 게임!\n난이도를 입력해주세요!\n1. 한자리수 곱셈\n2. 한자리수 + 두자리수 곱셈\n3. 두자리수 곱셈\n"));

  switch (input) {
    case 1:
      gugu1();
      break;
    case 2:
      gugu2();
      break;
    case 3:
      gugu3();
      break;
    default:
      alert("잘못된 입력입니다");
      break;
  }
}

function gugu1() {
  var ainput = Math.round(Math.random() * 8) + 1;
  var binput = Math.round(Math.random() * 8) + 1;

  var result = ainput * binput;
  alert(ainput + " X " + binput + " = ?\n");
  var numinput = parseInt(prompt("정답을 입력해주세요"));

  if (numinput == result) {
    alert("축하합니다! 정답입니다! \\^_^/");
  }
  else {
    alert("안타깝네요.. 오답입니다..T_T");
  }
}

function gugu2() {
  var ainput = Math.round(Math.random() * 98) + 1;
  var binput = Math.round(Math.random() * 8) + 1;

  var result = ainput * binput;
  alert(ainput + " X " + binput + " = ?\n");
  var numinput = parseInt(prompt("정답을 입력해주세요"));

  if (numinput == result) {
    alert("축하합니다! 정답입니다! \\^_^/");
  }
  else {
    alert("안타깝네요.. 오답입니다..T_T");
  }
}

function gugu3() {
  var ainput = Math.round(Math.random() * 98) + 1;
  var binput = Math.round(Math.random() * 98) + 1;

  var result = ainput * binput;
  alert(ainput + " X " + binput + " = ?\n");
  var numinput = parseInt(prompt("정답을 입력해주세요"));

  if (numinput == result) {
    alert("축하합니다! 정답입니다! \\^_^/");
  }
  else {
    alert("안타깝네요.. 오답입니다..T_T");
  }
}
