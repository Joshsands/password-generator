function selectLength () {
  passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."))
  if(passwordLength > 8 && passwordLength < 128) {
    console.log(passwordLength)
    return passwordLength;
  } else {
      alert("Please choose a number that is more than 8 and less than 128 characters");
      return selectLength();
      }
};

//function selectCriteria () {


//} else {
  //alert("Please select one type of character");
  //return selectCriteria();
//};
//};
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generate.addEventListener('click', () => {
const passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."))

const inputLowerCase=confirm("Do you want to include lowercase characters?");
const inputUpperCase=confirm("Do you want to include uppercase characters?");
const inputNumeric=confirm("Do you want to include numeric characters?");
const inputSpecial=confirm("Do you want to include special characters?");

const hasLength = passwordLength;
const hasLower = inputLowerCase;
const hasUpper = inputUpperCase;
const hasNumber = inputNumeric;
const hasSymbol = inputSpecial;

password.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, hasLength);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;
  console.log(typesCount)

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
  );
console.log('typesArr: ', typesArr);
if (typesCount === 0) {
  return '';
}
for(let i = 0; i < length; i += typesCount) {
  typesArr.forEach(type => {
const funcName = Object.keys(type)[0];
console.log('funcName: ', funcName);

generatedPassword += randomFunc[funcName]();
  });
}
const finalPassword = generatedPassword;
return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]{}=+<>?/\.,';
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters





var generateButton=document.getElementById("generate");
var passwordEntry=document.getElementById("password");
