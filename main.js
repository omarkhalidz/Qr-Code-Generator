let imgBox = document.querySelector("#imgBox");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");

console.log(imgBox);
console.log(qrImg);
console.log(qrText);

function generateQr() {
  if (qrText.value.length > 0) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrText.value = "";
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 500);
  }
}
