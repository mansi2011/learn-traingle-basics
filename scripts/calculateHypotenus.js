let side1 = document.querySelector('#value1');
let side2 = document.querySelector('#value2');
let btnCheck = document.querySelector('.btn-check');
let outDiv = document.querySelector('.output');

btnCheck.addEventListener('click',calHypotenuse);


function calHypotenuse(){
    let base = Number(side1.value);
    let height = Number(side2.value);
    let hypotenuse = Math.sqrt((base**2) + (height**2));
    console.log(hypotenuse)
    outDiv.innerHTML = hypotenuse;
}