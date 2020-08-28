/* 
1: our inputted values should be appended as the text content of Total
and Bill each

2: inputPercentange should be multiplied by the inputed value and * 100 
and the result should be added to  the total value and it should also be 
appeded to the tip-value

3:the bill each person is should be equal to the inputed number plus the 
inputpercentage value divide by the number of people t share the bill */



/* GRABBING ALL THE VALUES THAT WILL BE USED */

const input = document.querySelector('.input');
const inputPercentage = document.querySelector('#inputPercentage');
const tipValue = document.querySelector('.tip-value');
const totalValue = document.querySelector(".total-value");
const splitFigure = document.querySelector('.split-figure');
const splitRange = document.querySelector("#splitRange");
const billEach = document.querySelector(".Bill-each");
const tipEach = document.querySelector(".Tip-each");
const selectTipFigure = document.querySelector(".select-tip-figure");

/* creating the function that attaches the input to the various field */

let bill = ""
let percentageTip = ""
let tip = ''

function addInput() {
    let inputVal = input.value;
    bill = Number(inputVal)

    /* appending the bill value to the tip alue also */
  billEach.textContent = bill ;  
  
  totalValue.textContent = bill;
}


/* adding an event listner to the range */
    
function firstSlider() {
  let percent = inputPercentage.value;

  percentageTip = Number(percent);
  /* appending the percentage value to the dom */
  selectTipFigure.textContent = percentageTip;

  /* CALCULATING THE TIP PERCENTAGE */
    tip = (bill * percent) / 100;
    
    
    tipValue.textContent = tip;
      
    /* calculating the value for the total value */
   
  totalValue.textContent = bill + tip
  billEach.textContent = bill + tip;
}


/* CREATING THE SPLIT BILL FUNCTION */

function splitBill() {
  const splittedBill = Number(splitRange.value);

  /* Appending the number of persons splitting the splitted bill into the dom*/
  splitFigure.textContent = splittedBill
  

  /* dividing the splitted bill by the initial inputted bill */
  
  const finalBill = ((bill + tip) / splittedBill ).toFixed(1)

  /* appending the bill each to the dom */
  billEach.textContent = finalBill;
  
  const TotalIndividualTip = (tip / splittedBill).toFixed(1);

  tipEach.textContent =  TotalIndividualTip;
}