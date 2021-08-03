
const angle1 = document.querySelector('#value1');
const angle2 = document.querySelector('#value2');
const angle3 = document.querySelector('#value3');
const checkBtn = document.querySelector('.btn-check');
const outDiv = document.querySelector('.output');


checkBtn.addEventListener('click', checkValid);



function checkValid() {
    let value1 = Number(angle1.value);
    let value2 = Number(angle2.value);
    let value3 = Number(angle3.value);
    console.log(value1,value2,value3)
    if (value1+value2+value3 === 180) {
        outDiv.innerHTML = "yayy! these are angle of valid triangle";
    }
    else {
        outDiv.innerHTML = "Oops! these angles are not of valid triangle";
    }
}