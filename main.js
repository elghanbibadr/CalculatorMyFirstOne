const equalBtn=document.querySelector('.equal');
const AC=document.querySelector('.reset');
const Del=document.querySelector('.delete');
let display=document.querySelector('.display h1');
const btns=document.querySelectorAll('button[data-number]');
const operation=document.querySelectorAll('button[data-operation]');
let them=document.querySelector('.them-item');
let circle=document.querySelector('.circle');
let displayContainer=document.querySelector('.display');
const body=document.body;
let container=document.querySelector('.container');
let calc=document.querySelector('h3');
let theme=document.querySelector('h6');
// them
them.addEventListener('click',()=>{
circle.classList.toggle('moveToEnd');
body.classList.toggle('bodyChangeBg');
 Del.classList.toggle('deleteBg');
displayContainer.classList.toggle('containerBg');
container.classList.toggle('containerBg');
AC.classList.toggle('deleteBg');
circle.classList.toggle('circleBg');
equalBtn.classList.toggle('circleBg');
calc.classList.toggle('textChange');
theme.classList.toggle('textChange');
})


// update Display text content
function updateDisplay(e){
    display.innerText+=e.target.innerText;
}


// btns
btns.forEach(btn=>btn.addEventListener('click',updateDisplay));
operation.forEach(btn=>btn.addEventListener('click',(e)=>{
    updateDisplay(e);
}));

// equal
equalBtn.addEventListener('click',()=>{
   
   try{
    display.innerText= Number(eval( display.innerText));
   } 
   catch{
       display.innerText=`Ooops..!`;

   }
})

//  delete actions
 AC.addEventListener('click',()=>{
     display.innerText='';
 });
  Del.addEventListener('click',()=>{
   display.innerText=display.innerText.slice(0,-1);
  })