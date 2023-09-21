// From function declarations to explicit and implicit
// return functions (one of each).

const power = (a) => Math.pow(a, 2);//implicit
const power2 = (a) => {return  Math.pow(a, 2)};//explicit


 const welcome = () => ('Welcome to Appleseeds Bootcamp!');//implicit
 const welcome1 = () =>  {return 'Welcome to Appleseeds Bootcamp!'};//explicit



// // From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
const squareRoot =(function(a) {
    result = Math.sqrt(a);
    
    return result;
   
  })(4);

// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;

const randomNumbers = (function(a,b){
result = Math.random() * (a - b) + b;
return result;
})(4);

