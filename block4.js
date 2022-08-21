// Write your implementation of testing framework and assertion. Only after completing this go forward.
// Write two tests for the following functions using test framework assertion


// Add two number
// Write a function that takes two input numA and numB and returns the sum of both numbers.
// After writing the function write 5 tests for above function with different values
// Throw an error when the arguments passed in not a number.
// Make first test fail and see if you get the result of second test.
// If not fix it using the test framework (try...catch) we learned in the testing framework video.

function addTwonumber(numA,numB){
return numA+numB
   
}

function add(){
    let result=addTwonumber(2,4)
    expected=6
    if(result!==expected){
        throw new Error(`${result} is not equal ${expected}`)
    }
}

function test1(message,callback){
    try{
        callback()
        
    }catch(error){
        console.error(message)
    }
}
test1("equal to",add())
// Multiply two numbers
// Write a function that takes two input numA and numB and returns the multiplication of both numbers.
// After writing the function write 5 tests for above function with different values
// Throw an error when the arguments passed in not a number.
// Make first test fail and see if you get the result of second test.
// If not fix it using the test framework (try...catch) we learned in the testing framework video.
function MultiplyTwonumber(numA,numB){
    return numA*numB
}

function Multiply(){
    let result=MultiplyTwonumber(2,4)
    expected=5
    if(result!==expected){
        throw new Error(`${result} is not equal ${expected}`)
    }
}

function test2(message,callback){
    try{
        callback()
        
    }catch(error){
        console.error(message)
    }
}

test2('equal',Multiply())
