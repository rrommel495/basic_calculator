



const display= document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
    display.value = eval(display.value);

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}