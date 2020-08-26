/*
Assignment in JavaScript class aug 20202
Author: Pellelito
*/
let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let letters = ['p','e','l','l','e']

// createElement & appendChild

let button2 = document.createElement('button'); 
button2.innerHTML = "Just a dummy"; 
button2.classList.add("buttons");
document.body.appendChild(button2); 
button1.parentNode.insertBefore(button2, button1.nextSibling);


//Location & console.log
console.log("Location");
console.log("");
console.log(window.location.href);
console.log(window.location.port);
console.log(window.location.host);
console.log(window.location.pathname);
console.log("__________________________");


//Queryselector
let button = document.querySelector('button1');
let buttons = document.querySelectorAll('.buttons');

//Regular function
function change() {
  let i;
  
  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = rainbow[Math.floor(7*Math.random())]; 
  }
}

//Arrow functions
let buttonText  = (val) => "Click " + val;
button1.innerHTML = buttonText("Me");

let print = ()=> {
    console.log("Hello Universe!");
    button1.removeEventListener('click', print);
};

//addEventlistner

button1.addEventListener('click', print);

button1.addEventListener("click", change);

//Map

let mapped = letters.map(letter => '_' + letter + '_');
document.querySelector('#mapped').innerHTML = mapped;

//Filter
let filtred = letters.filter( letter => {
    if(letter == 'l') return false;
    return true;
});
document.querySelector('#filtred').innerHTML = filtred;

//Reduced
let reduced = letters.reduce((acc, cur) => acc + cur);
document.querySelector('#reduced').innerHTML = reduced;

    
    


