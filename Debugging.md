# app1.js Bug Report

## Identify:-
- The function `calculateTotal` is expericencing a `ReferenceError`, The vaiable `quntity` is not defined.

- Also the function result is wrong.
  
## Reproduce:-
Tried multiple value combinations such as `15` and `3` and the same bug appeard again.

```js
const result = calculateTotal(15, 3);
const result = calculateTotal(5, 3);
```
### Output:

```js
ReferenceError: quntity is not defined
ReferenceError: quntity is not defined
```

## Analyze:-
- Inside the function `calculateTotal` the variable name was written as `quntity`,
But the correct paramenter name is `quantity`.
- Also the mathematical operator that that is used is wrong as it was addition `+` instead of mult. `*`.


### Current Bug:

```js
function calculateTotal(price, quantity) {
  const total = price + quntity;

  return total;
}
```

## Fix:-
- Correct the typo by replacing: `quntity` with `quantity`.
- Also correct the mathematical operator to be mult. `*`.


### Updated code:

```js
function calculateTotal(price, quantity) {
  const total = price * quantity;

  return total;
}
```

## Verify:-
Tested the function agian using different values:

### Test Case:

```js
const result = calculateTotal(15, 4);
const result = calculateTotal(5, 3);
```
### output:

```js
60
15
```

# app2.js Bug Report

## Identify:-
- The function `divideNumbers` is resulting an unexpected result `infinity`

  
## Reproduce:-
Tried running the program using multiple values `21` and `7`, and the same issue appeard again.

```js
  const answer = divideNumbers(21, 0);
  const answer = divideNumbers(15, 0);
```
### Output:

```js
Result = Infinity
Result = Infinity
```

## Analyze:-
- Inside the function `divideNumbers(a, b)`, the parameter `b` contains the value of `0`.
- Dividing any number by `0` in JavaScript results in `Infinity`.
- This creates an invalid result and may cause unexpected behaviour in the application.

### Current Bug:

```js
function divideNumbers(a, b) {
  const result = a / b;

  return result;
}
```

## Fix:-
- Added a try and catch statement to throw an error in case of an if statement condition is ture.


### Updated code:

```js
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
```

## Verify:-
Tested the function again using different values:

### Test Case:

```js
  const answer = divideNumbers(21, 7);
  const answer = divideNumbers(15, 3);
  const answer = divideNumbers(15, 0);
  const answer = divideNumbers(21, 0);
```
### output:

```js
3
5
Result = You cannot dive by ZERO
Result = You cannot dive by ZERO
```
**The bug is fixed and the function works correctly.**