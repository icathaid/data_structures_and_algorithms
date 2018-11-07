'use strict';

function multiBracketValidation (str) {
  let starray = str.split('');
  let parenL = 0;
  let parenR = 0;
  let bracketL = 0;
  let bracketR = 0;
  let braceL = 0;
  let braceR = 0;
  for(let i = 0; i < starray.length; i++){
    if(starray[i] === '(' ){ parenL +=1; }
    if(starray[i] === ')' ){ parenR +=1; }
    if(starray[i] === '{' ){ bracketL +=1; }
    if(starray[i] === '}' ){ bracketR +=1; }
    if(starray[i] === '[' ){ braceL +=1; }
    if(starray[i] === ']' ){ braceR +=1; }
  }
  if((parenL === parenR) && (bracketL === bracketR) && (braceL === braceR)){
    return true;
  }
  else {
    return false;
  }
}

module.exports = multiBracketValidation;