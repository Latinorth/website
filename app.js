const windows = document.querySelectorAll(".window");
console.log(windows);
let cuurZ = 0;
let currWindow = null;
document.body.style.background.zIndex = -1;

document.addEventListener('keydown', (event) => {
    if (event.key && event.key === 'W') {
        if (currWindow) {
            currWindow.remove();
        }
    }
    if (event.key && event.key === 'F') {
        if (currWindow) {
            currWindow.style.width = "400px";
            currWindow.style.height = "400px";
            currWindow.style.zIndex = 0;
        }
    }
});

windows.forEach((window) => {
    let posX = 0;
    let posY = 0;
    let isDown = false;
    window.style.zIndex = 1;
    window.addEventListener("mousedown", (event) => {
        isDown = true;

        posX = event.clientX;
        posY = event.clientY;

        window.style.transition = "top 0.05s ease, left 0.05s ease";
        window.style.left = `${posX}px`;
        window.style.top = `${posY}px`;

        cuurZ++;
        window.style.zIndex = cuurZ;
    });
    window.addEventListener("mouseup", () => {
        isDown = false;
    });
    window.addEventListener("mousemove", (event) => {
        if (isDown) {
            window.style.transition = "";
            posX = event.clientX;
            posY = event.clientY;

            window.style.left = `${posX}px`;
            window.style.top = `${posY}px`;
        }
    });
    window.addEventListener("mouseenter", () => {
        currWindow = window;
        window.style.borderColor = '#FF0000';
        document.body.style.cursor = "move";
    });
    window.addEventListener("mouseleave", () => {
        currWindow = null;
        window.style.borderColor = '#CCCCCC';
        document.body.style.cursor = "default";
    });
});
