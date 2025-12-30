"use strict";

const inputText = document.getElementById("changeText");
const btn = document.getElementById("button");
const outputDiv = document.createElement("div");
document.body.appendChild(outputDiv);
const updateText = () => {
  outputDiv.textContent = inputText.value;
};

btn.addEventListener("click", () => {
  updateText();
});
inputText.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        updateText();
    }
});
