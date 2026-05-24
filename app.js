const windows = document.querySelectorAll(".window");
//currently you can only click windows ~2 billion times, sorry :(
let cuurZ = 0;
let currWin = null;
document.body.style.background.zIndex = -1;

document.addEventListener('keydown', (event) => {
    if (event.key && event.key === 'W') {
        if (currWin) {
            currWin.remove();
        }
    }
    if (event.key && event.key === 'F') {
        if (currWin) {
            backgroundHandler(currWin);
        }
    }
});

function backgroundHandler(win) {
    if (win.isBackground) {
        win.style.transition = "top 0.1s ease, left 0.1s ease, width 0.1s ease, height 0.1s ease";

        const margin = getComputedStyle(win).margin;
        win.style.width = `400px`;
        win.style.height = `300px`;
        win.style.top = `calc(50% - ${margin})`;
        win.style.left = `calc(50% - ${margin})`;
        win.style.zIndex = 1;
        win.isBackground = false;
        return win;
    }

    for (const w of windows) {
        if (w.isBackground) return win;
    }
    //not at all complete, only 1 window allowed rn
    
    if (!win.isBackground) {
        win.style.transition = "top 0.1s ease, left 0.1s ease, width 0.1s ease, height 0.1s ease";

        const margin = getComputedStyle(win).margin;
        win.style.width = `calc(100% - ${margin})`;
        win.style.height = `calc(100% - ${margin})`;
        win.style.top = `calc(50% - ${margin})`;
        win.style.left = `calc(50% - ${margin})`;
        win.style.zIndex = 0;
        win.isBackground = true;
    }
    return win;
}

windows.forEach((win) => {
    win.isDown = false;
    win.isBackground = false;
    win.style.zIndex = 1;

    win.addEventListener("mousedown", (event) => {
        if (win.isBackground) return;

        win.isDown = true;
        win.style.cursor = "grabbing";

        win.style.transition = "top 0.05s ease, left 0.05s ease";
        win.style.left = `${event.clientX}px`;
        win.style.top = `${event.clientY}px`;

        cuurZ++;
        win.style.zIndex = cuurZ;
    });
    win.addEventListener("mouseup", () => {
        win.isDown = false;
        win.style.cursor = "default";
    });
    win.addEventListener("mouseenter", () => {
        currWin = win;
        win.style.borderColor = '#FF0000';
    });
    win.addEventListener("mouseleave", () => {
        currWin = null;
        win.style.borderColor = '#CCCCCC';
    });
    win.addEventListener("mousemove", (event) => {
        if (win.isDown && !win.isBackground) {
            win.style.transition = "";
            win.style.left = `${event.clientX}px`;
            win.style.top = `${event.clientY}px`;
        }
    });
});