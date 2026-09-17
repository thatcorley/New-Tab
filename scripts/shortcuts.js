import saveManager from "./saveManager.js";
const shortcutsGrid = document.getElementById("shortcuts-grid");

const deleteButton = document.getElementById("bin-shortcut");
const addButton = document.getElementById("add-shortcut");

var deleteMode = false;

var shortcutsList = [];

deleteButton.addEventListener("click", removeShortcut);
addButton.addEventListener("click", addShortcut);

const defaultLinks = [
    "https://stardance.hackclub.com/",
    "https://www.github.com/",
    "https://www.youtube.com/",
    "https://www.claude.ai/"
];

function createShortcuts () {
    const shortcuts = saveManager.get("shortcuts");
    shortcutsGrid.innerHTML = "";
    shortcutsList = shortcuts;

    if (shortcuts) {
        for (let i = 0; i < shortcuts.length; i++) {
            const url = new URL(shortcuts[i]);

            const shortcutIcon = document.createElement("div");
            shortcutIcon.classList.add("shortcut");
            shortcutIcon.innerHTML = `
                    <a href="${url}" target="_blank">
                        <img src="https://www.google.com/s2/favicons?domain=${url}&sz=256">
                    </a>`;
            shortcutsGrid.appendChild(shortcutIcon);


            const link = shortcutIcon.querySelector("a");

            link.addEventListener("click", function(event) {
                if (deleteMode) {
                    event.preventDefault();
                    
                    console.log(shortcutsList);
                    shortcutsList.splice(shortcutsList.indexOf(link.href), 1);
                    console.log(shortcutsList);
                    saveManager.set("shortcuts", shortcutsList);
                    createShortcuts();
            }});
            }
        }
    };

function addShortcut() {
    let shortcut = prompt("Enter URL");
    if (shortcut) {
        shortcutsList.push(shortcut);
        saveManager.set("shortcuts", shortcutsList);

        createShortcuts();
    };
}

function removeShortcut() {
    deleteMode = !deleteMode;
}

if (saveManager.get("shortcuts") == null) {
    saveManager.set("shortcuts", defaultLinks) 
}

createShortcuts()