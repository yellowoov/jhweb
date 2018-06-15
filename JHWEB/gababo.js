function gababo(x) {
  var input = parseInt(prompt("컴퓨터와의 가위바위보 게임!\n0, 1, 2 중 하나를 입력해주세요!\n(0 = 바위\t1 = 가위\t2 = 보)"));
  var cominput = Math.round(Math.random() * 2);

  switch (input) {
    case 0:
      alert("과연 누가 이겼을까요?");
      if (cominput == 0) {
        alert("비겼습니다! O_O");
      }
      else if (cominput == 1) {
        alert("축하합니다! 유저가 이겼습니다! \\^_^/");
      }
      else {
        alert("안타깝네요.. 컴퓨터가 이겼습니다..T_T");
      }
      break;
    case 1:
      alert("과연 누가 이겼을까요?");
      if (cominput == 1) {
        alert("비겼습니다! O_O");
      }
      else if (cominput == 2) {
        alert("축하합니다! 유저가 이겼습니다! \\^_^/");
      }
      else {
        alert("안타깝네요.. 컴퓨터가 이겼습니다..T_T");
      }
      break;
    case 2:
      alert("과연 누가 이겼을까요?");
      if (cominput == 2) {
        alert("비겼습니다! O_O");
      }
      else if (cominput == 0) {
        alert("축하합니다! 유저가 이겼습니다! \\^_^/");
      }
      else {
        alert("안타깝네요.. 컴퓨터가 이겼습니다..T_T");
      }
      break;
    default:
      alert("잘못된 입력입니다");
      break;
  }
}
