import saveManager from "./saveManager.js";

const notepad = document.getElementById("quick-notes-text");

let typingTimer;

notepad.addEventListener("input", () => {
    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
        console.log("User stopped typing!");
        saveManager.set("notepad", notepad.value);
    }, 1000);
});

notepad.innerHTML = saveManager.get("notepad")