function chooseNo() {
  showPopup("Cc3m, v mấy tháng nay m kêu nhớ bố là xạo l*n à? >:(((( ");
}

function chooseYes() {
  showPopup("Aww, eim cũng yêu Cam nhìu nhắmmmm nhắmmm nhắmmm");
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  text.textContent = message;
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
