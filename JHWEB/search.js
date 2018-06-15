function search(x) {
  var input = prompt("찾고자 하는 책 제목을 한글로 입력하세요.");

  switch (input) {
    case "킬 오더":
    case "킬오더":
      window.open("KillOrder.html");
      break;
    case "피버코드":
    case "피버 코드":
      window.open("FeverCode.html");
      break;
    case "메이즈러너":
    case "메이즈 러너":
      window.open("MazeRunner.html");
      break;
    case "스코치트라이얼":
    case "스코치 트라이얼":
      window.open("ScorchTrials.html");
      break;
    case "데스큐어":
    case "데스 큐어":
      window.open("DeathCure.html");
      break;
    case "레프트오버":
    case "레프트 오버":
      window.open("LeftOver.html");
      break;
    case "빽넘버":
    case "빽 넘버":
    case "백넘버":
    case "백 넘버":
      window.open("BackNumber.html");
      break;
    case "스눕":
      window.open("Snoop.html");
      break;
    case "범죄자":
    case "범죄자 상":
    case "범죄자상":
    case "범죄자 하":
    case "범죄자하":
      window.open("Criminal.html");
      break;
    case "인공지능":
    case "딥러닝":
    case "머신러닝":
    case "인공지능, 머신러닝, 딥러닝 입문":
    case "인공지능,머신러닝,딥러닝 입문":
      window.open("Algorithm.html");
      break;
    default:
      alert("잘못된 입력입니다.");
      break;
  }
}
