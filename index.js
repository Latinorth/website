const header = document.querySelector('.header');
const region = document.querySelectorAll('.region');
const parent = document.querySelector('.parent')
const banner = [
"::::::::::'##::::::::::'###::::'########:'####:'##::: ##::'#######::'########::'########:'##::::'##::::::'########::'########:'##::::'##::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
":::::::::: ##:::::::::'## ##:::... ##..::. ##:: ###:: ##:'##.... ##: ##.... ##:... ##..:: ##:::: ##:::::: ##.... ##: ##.....:: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
":::::::::: ##::::::::'##:. ##::::: ##::::: ##:: ####: ##: ##:::: ##: ##:::: ##:::: ##:::: ##:::: ##:::::: ##:::: ##: ##::::::: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
":::::::::: ##:::::::'##:::. ##:::: ##::::: ##:: ## ## ##: ##:::: ##: ########::::: ##:::: #########:::::: ##:::: ##: ######::: ##:::: ##::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
":::::::::: ##::::::: #########:::: ##::::: ##:: ##. ####: ##:::: ##: ##.. ##:::::: ##:::: ##.... ##:::::: ##:::: ##: ##...::::. ##:: ##:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
":::::::::: ##::::::: ##.... ##:::: ##::::: ##:: ##:. ###: ##:::: ##: ##::. ##::::: ##:::: ##:::: ##:'###: ##:::: ##: ##::::::::. ## ##::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
":::::::::: ########: ##:::: ##:::: ##::::'####: ##::. ##:. #######:: ##:::. ##:::: ##:::: ##:::: ##: ###: ########:: ########:::. ###:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
"::::::::::........::..:::::..:::::..:::::....::..::::..:::.......:::..:::::..:::::..:::::..:::::..::...::........:::........:::::...::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
];
let isDown = false;

setInterval(() => {
    for (let i = 0; i < banner.length; i++) {
        banner[i] = banner[i].slice(1, banner[i].length) + banner[i][0];
    }
    header.innerText = '';
    for (let i = 0; i < banner.length; i++) {
        header.innerHTML += banner[i].slice(0, banner[i].length - 1) + '<br>';
    }
}, 30);

region.forEach((r) => {
    r.addEventListener('mouseover', () => {
        r.style.borderColor = '#FF0000';
        document.body.style.cursor = "move";
    });
    r.addEventListener('mouseout', () => {
        r.style.borderColor = '#BBBBFF';
        document.body.style.cursor = "default";
    });
    r.addEventListener('mousedown', () => {
        r.style.transition = "top 1s";
        r.style.transition = "left 1s";

        r.style.borderColor = '#AA0000';
        r.style.borderWidth = '4px';
        isDown = true;
    });
    r.addEventListener('mouseup', () => {
        r.style.borderColor = '#BBBBFF';
        r.style.borderWidth = '2px';
        r.style.position = "static"
        parent.appendChild(r);
        isDown = false;
    });
    r.addEventListener('mousemove', (e) => {
        if (isDown) {
            setTimeout(() => {
                r.style.left = (e.clientX - r.clientWidth / 2) + 'px';
                r.style.top = (e.clientY - r.clientHeight / 2) + 'px';
                r.style.position = "fixed";
            }, 15);
        }
        });
});

header.addEventListener('click', () => {
    new Audio('assets/sounds/bleeh.mp3').play();
});