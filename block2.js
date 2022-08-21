// To get the fullName of user


    // Write two tests for the following functions
    // Get full name
    // Write a function that takes two input firstName and lastName and returns full name. You will get the full name by adding first and last name with an space.
    // After writing the function write two tests for above function
    // Make the first test fail and look at the output
    // After making the first test fail do you see the output of the second test?
function fullName(firstName,secondName){
    return firstName+" "+secondName
}
// test 1
result=fullName('ajay','rajput')
expected="Ajay rajput"
if(result!==expected){
    throw new Error(`${result} is not equal ${expected}`)
}
// test2
result=fullName('ajay','rajput')
expected="Ajay Rajput"
if(result!==expected){
    throw new Error(`${result} is not equal ${expected}`)
}

 // Calculate total amount
    // Write a function that takes two input amount and taxRate and returns the total amount by amount + (amount * taxRate)
    // Write two tests for the above function
    // Make the first test fail and look at the output
    // After making the first test fail do you see the output of the second test?
function totalAmount(amount,taxRate){
return amount+(amount*taxRate)
}

   //Test-1
   result=totalAmount(200,10)
expected=2000
if(result!==expected){
    throw new Error(`${result} is not equal ${expected}`)
}

// test2
result=totalAmount(200,10)
expected=3440
if(result!==expected){
    throw new Error(`${result} is not equal ${expected}`)
}