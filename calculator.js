const display= document.querySelector('input')
function number_btn(input){
    display.value += input;
}
function allclear_btn(){
    display.value=" ";
}

function calc_btn(input){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        alert("invalid input");
        display.value="error!";
    }
}

function delete_btn(){
    display.value=display.value.slice(0,-1);
}