// Function to add two numbers 
function addNums(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  console.log(addNums(2,3))
  
  // Function to subtract two numbers 
  function subNums(firstNum, secondNum) {
      return firstNum - secondNum;
  }
  console.log(subNums(5,3))
  
  // Function to multiply two numbers 
  function multiplyNums(firstNum, secondNum) {
    return firstNum * secondNum;
  }
  console.log(multiplyNums(3,4))
  
  // Function to divide two numbers 
  function divideNums(firstNum, secondNum) {
    return firstNum / secondNum;
  }
  console.log(divideNums(6,2))
  
  // Function to return the first name
  function firstName(name) {
      return name
  }
  console.log(firstName("Alex"))
  
  // Function to return first and last name
  function fullName(firstName, lastName) {
    return firstName + " " + lastName
  }
  console.log(fullName("Alex","Davis"))
  
  
  // Function to return hello to the name passed into firstName function
  function sayHello(name) {
    return "Hello " + firstName(name)
  }
  console.log(sayHello("Alex"))
  