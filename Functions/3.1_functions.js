// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
//     }
//     function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
//     }
//     function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
//     }
//     // From function expressions to function declarations
//     const hello = () => "Hello!";
//     const squareRoot = a => Math.sqrt(a);
//     const randomNumbers = (a, b) => Math.random() * (a - b) +
//     b;


const welcome = function() {
        let welcome = 'Welcome to Appleseeds Bootcamp!';
        return welcome;
        }
        const power = function(a) {
        let myNumber = a;
        let result = Math.pow(myNumber, 2);
        return result;
        }
        const add = function(a, b = 5) {
        let myNumber = a;
        let sum = myNumber + b;
        sum
        return sum;
        }
add(3)

// const hello = () => "Hello!";

function hello(){
    return `Hello!`
}
    // const squareRoot = a => Math.sqrt(a);
function squareRoot(a){
    
    a =  Math.sqrt(a);
    
    return a;
} 
   

// const randomNumbers = (a, b) => Math.random() * (a - b) +
    // b;

function randomNumbers(a,b){
    result =  Math.random() * (a - b) + b;
    result
    return result;
}

   
    