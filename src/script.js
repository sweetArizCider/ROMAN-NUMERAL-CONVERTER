const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const result = document.getElementById("output");

const toRoman = (num) => {
  if (num >= 1000) return 'M' + toRoman(num - 1000);
  if (num >= 900) return 'CM' + toRoman(num - 900);
  if (num >= 500) return 'D' + toRoman(num - 500);
  if (num >= 400) return 'CD' + toRoman(num - 400);
  if (num >= 100) return 'C' + toRoman(num - 100);
  if (num >= 90) return 'XC' + toRoman(num - 90);
  if (num >= 50) return 'L' + toRoman(num - 50);
  if (num >= 40) return 'XL' + toRoman(num - 40);
  if (num >= 10) return 'X' + toRoman(num - 10);
  if (num >= 9) return 'IX' + toRoman(num - 9);
  if (num >= 5) return 'V' + toRoman(num - 5);
  if (num >= 4) return 'IV' + toRoman(num - 4);
  if (num >= 1) return 'I' + toRoman(num - 1);
  return ''
};

const handleClick = () => {
  if(!numberInput.value){
    result.innerText = 'Please enter a valid number';
    return
  }
  if(numberInput.value <= -1){
    result.innerText = 'Please enter a number greater than or equal to 1'
    return
  }
  if(numberInput.value >= 4000){
    result.innerText = 'Please enter a number less than or equal to 3999'
    return
  }
  result.innerText = '';
  let romanNumber = toRoman(parseInt(numberInput.value));
  result.innerText = romanNumber;
}

convertButton.addEventListener("click", handleClick);
