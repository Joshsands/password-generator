// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function selectLength () {
  passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."))
  if(passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
      alert("Please choose a number that is more than 8 and less than 128 characters");
      return selectLength();
      }
};

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
function selectCriteria () {
  inputLowerCase=confirm("Do you want to include lowercase characters?");
  inputUpperCase=confirm("Do you want to include uppercase characters?");
  inputNumeric=confirm("Do you want to include numeric characters?");
  inputSpecial=confirm("Do you want to include special characters?");
  if (inputLowerCase === false && inputUpperCase === false && inputNumeric === false && inputSpecial === false) {
    alert("Please select one type of character");
    return selectCriteria();
  }
};

// creates a variable that stores a random variable for each of the 4 types of characters
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// targets the html button "generate" to initiate the select length, select criteria and
generate.addEventListener('click', function() {
selectLength();
selectCriteria();

// stores the password length and true/false statements
const hasLength = passwordLength;
const hasLower = inputLowerCase;
const hasUpper = inputUpperCase;
const hasNumber = inputNumeric;
const hasSymbol = inputSpecial;

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
password.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, hasLength);
});

// added reset button function
reset.addEventListener('click', function() {
  password.innerText = ""
});

// added copy button function
copy.addEventListener('click', function() {
  copyPass = document.getElementById("password");
  copyPass.select();
  copyPass.setSelectionRange(0,128)
  document.execCommand("copy");
});

//function to randomly select 1 of the variable types in a loop
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

// creates an array of random variables for each character type and filters out the categories with false statements.
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
  );

// loops the character selection according to the password length and number of vairable types
for(let i = 0; i < length; i += typesCount) {
  typesArr.forEach(type => {
const funcName = Object.keys(type)[0];

generatedPassword += randomFunc[funcName]();
  });
}
const finalPassword = generatedPassword;
return finalPassword;
}

// generates random character from the character code specification for upper and lower case, numbers or a random symbol
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
// end of random character generation functions