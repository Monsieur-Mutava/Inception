const dobInput = document.getElementById("dob");
const calculatebtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculatebtn.addEventListener("click", function () {
    const dob = new Date(dobInput.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    resultDiv.innerHTML = `You are ${age} years old.`;
    
});