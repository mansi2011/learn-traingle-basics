let side1 = document.querySelector('#value1');
let side2 = document.querySelector('#value2');
let btnCheck = document.querySelector('.btn-check');
let outDiv = document.querySelector('.output');

btnCheck.addEventListener('click',calArea);


function calArea(){
    let base = Number(side1.value);
    let height = Number(side2.value);
    let area = 1/2*base*height;
    console.log(area)
    outDiv.innerHTML = area;
}