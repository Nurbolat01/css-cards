const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients =  document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let prevColor = 'blue';
let animationEnd = true;




// Change buttons for sizes
function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelectorAll(`.shoe[color="${color}"]`);
    let gradient = document.querySelectorAll(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelectorAll(`.gradient[color="${prevColor}"]`);
    

    //change color buttons
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    shoes.forEach(s => s.classList.remove('show'));
    shoe.forEach(n => n.classList.add('show'));

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.forEach(gs => gs.classList.add('first'));
    prevGradient.forEach(prev => prev.classList.add('second'));

    prevColor = color;
    animationEnd = false;

    gradient.forEach(a => a.addEventListener('animationend', () => {
        animationEnd = true;
    }));

}


sizes.forEach(size => size.addEventListener('click', changeSize));

colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight () {
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}
changeHeight();
window.addEventListener('resize', changeHeight);