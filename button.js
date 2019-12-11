// Selection and Declaration -----------------------

const customBtn = document.getElementById("custom-btn");
const btnText = document.getElementById("btn-text");
const btnSize = document.getElementById("btn-size");
const btnColor = document.getElementById("btn-color");
const pTop = document.getElementById("top");
const pRight = document.getElementById("right");
const pBottom = document.getElementById("bottom");
const pLeft = document.getElementById("left");
const bgColor = document.getElementById("btn-bg-color");
const borderColor = document.getElementById("btn-border-color");
const borderWidth = document.getElementById("btn-border-width");
const borderRadius = document.getElementById("btn-border-radius");
const letterSpacing = document.getElementById("btn-letter-spacing");
const generateCodeBtn = document.getElementById("generate-code-btn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-btn");
const htmlCode = document.getElementById("html");
const cssCode = document.getElementById("css");
const overlay = document.getElementById("overlay");

let btnLabelValue = "Default Label",
  fontSizeValue = 16,
  fontColorValue = "black",
  padTop = 1,
  padLeft = 6,
  padRight = 6,
  padBottom = 1,
  bgColorValue = "#dddddd",
  borderColorValue = "#dddddd",
  borderWidthValue = 0,
  borderRadiusValue = 0,
  letterSpacingValue = 0;

// Button Label Function Handler ----------------
btnText.addEventListener("input", e => {
  if (e.target.value.length != 0) {
    customBtn.innerHTML = e.target.value;
    btnLabelValue = e.target.value;
  } else {
    customBtn.innerHTML = btnLabelValue;
  }
});

// Font Size Function Handler ----------------
btnSize.addEventListener("input", e => {
  fontSizeValue = e.target.value + "px";
  customBtn.style.fontSize = fontSizeValue;
});

// Font Color Function Handler ----------------
btnColor.addEventListener("input", e => {
  fontColorValue = e.target.value;
  customBtn.style.color = fontColorValue;
});

// Padding Top Function Handler ----------------
pTop.addEventListener("input", e => {
  padTop = e.target.value + "px";
  customBtn.style.paddingTop = padTop;
});

// Padding Right Function Handler ----------------
pRight.addEventListener("input", e => {
  padRight = e.target.value + "px";
  customBtn.style.paddingRight = padRight;
});

// Padding Bottom Function Handler ----------------
pBottom.addEventListener("input", e => {
  padBottom = e.target.value + "px";
  customBtn.style.paddingBottom = padBottom;
});

// Padding Left Function Handler ----------------
pLeft.addEventListener("input", e => {
  padLeft = e.target.value + "px";
  customBtn.style.paddingLeft = padLeft;
});

// Background Color Function Handler ----------------
bgColor.addEventListener("input", e => {
  bgColorValue = e.target.value;
  customBtn.style.backgroundColor = bgColorValue;
});

// Border Color Function Handler ----------------
borderColor.addEventListener("input", e => {
  borderColorValue = e.target.value;
  customBtn.style.borderColor = borderColorValue;
});

// Border Width Function Handler ----------------
borderWidth.addEventListener("input", e => {
  borderWidthValue = e.target.value + "px";
  customBtn.style.borderWidth = borderWidthValue;
});

// Border Radius Function Handler ----------------
borderRadius.addEventListener("input", e => {
  borderRadiusValue = e.target.value + "px";
  customBtn.style.borderRadius = borderRadiusValue;
});

// Letter Spacing Function Handler ----------------
letterSpacing.addEventListener("input", e => {
  letterSpacingValue = e.target.value + "px";
  customBtn.style.letterSpacing = letterSpacingValue;
});

// Modal ----------------------
generateCodeBtn.addEventListener("click", () => {
  htmlCode.textContent = `<button id="custom-btn">${btnLabelValue}</button>`;
  cssCode.textContent = `#custom-btn {
    font-size: ${fontSizeValue};
    font-color: ${fontColorValue};
    padding: ${padTop} ${padRight} ${padBottom} ${padLeft};
    background-color: ${bgColorValue};
    border-color: ${borderColorValue};
    border-width: ${borderWidthValue};
    border-radius: ${borderRadiusValue};
    letter-spacing: ${letterSpacingValue};
  }`;
  modal.classList.add("active");
  overlay.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
