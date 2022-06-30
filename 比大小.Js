// 把要用到的元素都選出來
const gameStartButton = document.querySelector(".play-btn");
const tigerPointPanel = document.querySelector(".tiger .point");
const bearPointPanel = document.querySelector(".bear .point");
const prizePanel = document.querySelector(".prize-panel");

// 監聽按鈕的滑鼠點擊事件
gameStartButton.addEventListener("click", function () {
  // 只要點到按鈕，就執行以下程式⋯⋯
  // 擲骰子：產生 1~6 之間的亂數
  let tigerPoint = Math.floor(Math.random() * 6) + 1;
  let bearPoint = Math.floor(Math.random() * 6) + 1;

  // 把點子放進狗和貓的顯示面板
  tigerPointPanel.innerText = tigerPoint;
  bearPointPanel.innerText = bearPoint;

  // 判斷輸贏
  if (tigerPoint > bearPoint) {
    prizePanel.innerText = "貓貓贏了！";
  } else if (tigerPoint < bearPoint) {
    prizePanel.innerText = "狗狗贏了！";
  } else {
    prizePanel.innerText = "平手！";
  }
});
