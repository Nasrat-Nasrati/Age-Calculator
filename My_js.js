const dobInput= document.getElementById("dob");
const calculateBtn= document.getElementById("calcualte-btn");
const resutlDiv= document.getElementById("result");

calculateBtn.addEventListener("click",function(){

const dob = new Date(dobInput.value);
const ageInMs = Date.now() - dob.getTime();
const ageDate = new Date(ageInMs);
const age = Math.abs(ageDate.getUTCFullYear()-1970)

resutlDiv.innerHTML = ` Your age is ${age} years.`;

});