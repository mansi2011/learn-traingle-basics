var quesDB =[{
  question: "1. If a triangle has 2 angles of 65 degree. What is the measure of third angle in degree?",
  a: "90",
  b: "50",
  c: "65",
  d: "55",
  ans: "ans2"
},
{
    question: "2. If a triangle has sides of 3cm, 4cm, what is the length of hypotenuse of triangle?",
    a: "6",
    b: "8",
    c: "5",
    d: "7",
    ans: "ans3"
},
{
    question: "3. What will be the area of triangle when length of base and height are 4cm and 10cm? ",
    a: "14",
    b: "16",
    c: "20",
    d: "18",
    ans: "ans3"
},
{
    question: "4. What type of triangle it is when length of all sides are 3cm",
    a: "Equilateral",
    b: "Isosceles",
    c: "Scalene",
    d: "both a and b",
    ans: "ans1"
},
{
    question: "5. What angle if present make a triangle an obtuse angled triangle?",
    a: "90",
    b: "180",
    c: "more than 180",
    d: "more than 90",
    ans: "ans4"
},
{
    question: "6. What type of triangle has 2 sides with equal lengths and 60 degree angle between them?",
    a: "Equilateral",
    b: "Isosceles",
    c: "both a and b",
    d: "scalene",
    ans: "ans1"
},
{
    question: "7. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?",
    a: "Equilateral",
    b: "Isosceles",
    c: "both a and b",
    d: "Scalene",
    ans: "ans4"
},
{
    question: "8. If a triangle has angles 25, 75, 80 in degrees. What type of triangle it is?",
    a: "Obtuse Angled",
    b: "Acute Angled",
    c: "Right Angled",
    d: "None",
    ans: "ans2"
}
]

let questions = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let btnChk = document.querySelector('#submit');
let answers = document.querySelectorAll('.answer');
let scoreDiv = document.querySelector('.scoreArea')

let index=0;
let score =0;

const loading = () => {
    questions.innerHTML = quesDB[index].question;
    console.log(questions)
    option1.innerHTML = quesDB[index].a;
    option2.innerHTML = quesDB[index].b;
    option3.innerHTML = quesDB[index].c;
    option4.innerHTML = quesDB[index].d;

}
loading();


const selectedOption = () => {
    let answer;
    answers.forEach((curElem) => {
        if(curElem.checked){
            answer = curElem.id;
        }
    })
    return answer;

}

const deselectOption = () =>{
    answers.forEach((curElem) => {
        curElem.checked = false;
    })
}


btnChk.addEventListener('click', () => {
    const checkanswer = selectedOption();
    
    if(checkanswer == quesDB[index].ans){
        score++
    }
    deselectOption();

    index++
    if(index<quesDB.length){
        loading();
    }
    else{
        scoreDiv.style.display = 'block';
        scoreDiv.innerHTML = `<p> You scored ${score}/${quesDB.length}.Thank you for your attempt! </p>`
    }
    
}) 