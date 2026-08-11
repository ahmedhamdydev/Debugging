function divideNumbers(a, b) {
  try{  
    if(b === 0 ){
    throw new Error("You cannot dive by ZERO")
  }
  const result = a / b;
  return result;
} catch(error){
    return error.message
}
}


function printResult() {
  const num1 = 221;
  const num2 = 0;

  const answer = divideNumbers(num1, num2);

  console.log("Result =", answer);
}

printResult();