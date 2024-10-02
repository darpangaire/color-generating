const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16).padStart(6, "0");
  let lastcode = randomCode;
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;
};

document.getElementById("btn").addEventListener("click", getColor);

getColor();
