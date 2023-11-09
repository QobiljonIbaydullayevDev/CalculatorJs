const AC = document.querySelector('.operator');

const display = document.querySelector(".display")

const persentage = document.getElementById("persentage")

const division = document.getElementById("division")

const clearHandler =() =>{
    display.value = ""
}

const persentageHandler=()=>{
    console.log(display.value);
    display.value= display.value/100
}

const operatorHandler=()=>{
    
}
