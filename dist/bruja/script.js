

function hideElement(element) {
  document.querySelector(element).style.display = "none";
}

function showElement(element) {
  document.querySelector(element).style.display = "grid";
}

function checkLogin() {
  const value = document.querySelector("#login-screen #password").value;
  if (value === "73") {
    hideElement("#login-screen");
    document.querySelector("#success-text").innerHTML =
      "Ahora diríjanse a Jesus y Maria Antonia y exijan el paquete con código GGT9.";
    showElement("#result-success-screen");
  } else {
    showElement("#login-error");
  }
}