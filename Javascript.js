
const Zero = document.querySelector('#filler');
const One = document.querySelector('#prof');
const Two = document.querySelector('#acad');
const Three = document.querySelector('#pers');
 
function showFill() {
    Zero.style.display="flex";
    One.style.display="none";
    Two.style.display="none";
    Three.style.display="none";
}

function showProf() {
    Zero.style.display="none";
    One.style.display="flex";
    Two.style.display="none";
    Three.style.display="none";
}

function showAcad() {
    Zero.style.display="none";
    One.style.display="none";
    Two.style.display="flex";
    Three.style.display="none";
}

function showPers() {
    Zero.style.display="none";
    One.style.display="none";
    Two.style.display="none";
    Three.style.display="flex";
}