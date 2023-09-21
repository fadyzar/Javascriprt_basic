// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.

function circleArea(radius){
    let result = (Math.PI) * (radius*radius);
     console.log(result);
     console.log(result.toFixed(2));
}

circleArea(2);