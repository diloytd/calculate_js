
const btn = document.querySelector(".btn");
const conclude = document.querySelector(".conclude");



function calculateBMI (h = 1, w= 1){
    const hei = document.querySelector(".hei");
const wei = document.querySelector(".wei");
const height = hei.value;
    const weight = wei.value;
    const heightCM = height/100;
 const HeightFormula = Math.pow(heightCM,2);
 const IMT = (weight / HeightFormula); 
const result = IMT.toFixed(2);
conclude.innerHTML = "Индекс массы тела: " + result;}

// height= Math.pow(height, height);
// const IMT = Math.round(weight / height);
// conclude.innerHTML = "Индекс массы тела: " + IMT;


// btn.addEventListener("click", calculateBMI);
