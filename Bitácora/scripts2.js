let velocity = 2;
let position = 0;
let moveRight = true;
const cabezas = ['./russell.png', './chrys.png']
let focus = 0;

function home() {
    window.location.href = "index.html";
}

function week1() {
    window.location.href = "semana1.html";
}

function move() {                    
    let pageWidth = window.innerWidth;
    let img = document.getElementById('russell');
    let russellWidth = russell.width;
                        
    img.src = cabezas[focus];          
    if (moveRight) {
        position = position + velocity;
        russell.style.left = position + 'px';
    
        if (position + russellWidth >= pageWidth) {
            moveRight = false;
            focus = (focus + 1) % 2;
            img.src = cabezas[focus];
        }
    }

    else {
        position = position - velocity;
        russell.style.left = position + 'px';
        
        if (position <= 0) {
            moveRight = true;
            focus = (focus + 1) % 2;
            img.src = cabezas[focus];
        }
    }
}

setInterval(move, 2);