import keysObj from "./keys.js";

let title = document.createElement("h1");
title.innerHTML = "Virtual Keyboard";
document.body.append(title);
let textarea = document.createElement("textarea");
textarea.className = "textarea";
textarea.innerHTML = "";
document.body.append(textarea);
let keyboard = document.createElement("div");
keyboard.className = "keyboard";
keyboard.innerHTML = "";
document.body.append(keyboard);
for (let i = 0; i < 5; i++) {
  let keyRow = document.createElement("div");
  keyRow.className = "key";
  keyboard.append(keyRow);
}
