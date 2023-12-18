//alert("hey");
const display = document.getElementById("display");
let clear2 = document.getElementById("clear2");

//prompt("rt");

document.getElementById("display").onmouseover = function(){

    document.getElementById("display").style.backgroundColor = "rgb(100, 100, 100)" ;

}





function appendToDisplay(input) {

    if (display.value == "Undefined") {
        
        display.value = input;

    } else {
        display.value += input;
    }
    
    
    

}

clear2.onclick = function(){

    display.value = ' ';

}

function clear(input) {
    display.value = input;
}

function calculate() {

    try {
        display.value = eval(display.value);
    } catch (SyntaxError) {
        display.value = "Undefined";
    }
    
    

}

const d = new Date();





