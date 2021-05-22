//// create arrays for special character types

var caseArray= [];
var lowerCaseChar=[
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
var upperCaseChar=[
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numericChar=[
  "1","2","3","4","5","6","7","8","9","0"
];
var specialChar=[
  "!","@","#","$","%","^","&","*","(",")","[","]","|","{","}",":",";","'","<",">","?","/"
];

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var selectLength = function () {
  var passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."))
  if(passwordLength > 8 && passwordLength < 128) {
    console.log(passwordLength)
    return passwordLength;
  } else {
      alert("Please choose a number that is more than 8 and less than 128 characters");
      return selectLength();
      }
};

var selectCriteria = function () {
      var inputLowerCase=confirm("Do you want to include lowercase characters?");
      var inputUpperCase=confirm("Do you want to include uppercase characters?");
      var inputNumeric=confirm("Do you want to include numeric characters?");
      var inputSpecial=confirm("Do you want to include special characters?");
        
      //THEN my input should be validated and at least one character type should be selected
    if (inputLowerCase == true) {
      return inputLowerCase
    }if (inputUpperCase == true) {
      return inputUpperCase
    }if (inputNumeric == true) {
      return inputNumeric
    }if (inputSpecial == true) {
    return inputSpecial 
    
  } else {
      alert("Please select one type of character");
      return selectCriteria();
    }
};

var passwordInfo = {
  length: selectLength(),
  lowercase: selectCriteria(),
};

// create a function for generating the password
function generatePassword() {
  selectLength();  
  selectCriteria();

  var passwordOutput="";
    
      // WHEN all prompts are answered
      // THEN a password is generated that matches the selected criteria
    
      if (inputLowerCase==true){
          caseArray.push(lowerCaseChar);
      
      }
      if (inputUpperCase==true){
          caseArray.push(upperCaseChar)
      
      }
      if (inputNumeric==true){
          caseArray.push(numericChar)
          
      }
      if (inputSpecial==true){
          caseArray.push(specialChar)
      }
    
      //  inputs charcters based on password prompt length
      for(var i=0; i<passwordLength; i++){
    
          var randomCharArrayNum;
          var selectedCharArray;
          var randomCharNum;
          var randomChar;
          
          randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length));
          selectedCharArray=caseArray[randomCharArrayNum];
          randomCharNum=Math.floor(Math.random()*selectedCharArray.length);
          randomChar=selectedCharArray[randomCharNum];
          passwordOutput+=randomChar;      
      }
      passwordEntry.textContent=passwordOutput;    
    
  }

  //WHEN I answer each prompt

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var generateButton=document.getElementById("generate");
var passwordEntry=document.getElementById("password");
generateButton.onclick = generatePassword;
