function calculateMaturityAmount(){
    //Get input values from form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //Perform the calculation
    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    //Display the Result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}
// Attach the event listener to calculate button 

document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);