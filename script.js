const txtBillAmount = document.querySelector("#bill-amount");
const txtAmountGiven = document.querySelector("#amount-given");
const btnCalculate = document.querySelector("#btn");
const err = document.querySelector("#error");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btnCalculate.addEventListener("click",process);

function process(){
    if(txtBillAmount.value>0){
        var change = txtAmountGiven.value - txtBillAmount.value;
        if(change > 0){
            err.textContent= "₹" + change + " needs to be returned";
            calculateChange(change);
        }else{
            err.textContent="You are poor";
        }
    }else{
        err.textContent="Amount can't be negative";
    }
}

function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length; i++) {
        // no of notes need for the denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        // 2010 / 2000 = 1 || 10 / 500 = 0
    
        // amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        // 2010 % 2000 = 10 || 10 % 500 = 10
    
        // updating the no of notes in the table for the current amount
        noOfNotes[i].textContent = numberOfNotes;
      }
}

