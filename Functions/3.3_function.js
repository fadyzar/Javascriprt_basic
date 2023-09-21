function percentageOfWorld1(population,contry){
const worldPopulation = 7900;
  let result =  (population / worldPopulation) * 100;
  let par = result.toFixed(1)
 
 return  `${contry}   has
${population}  million people, so it's about  ${par}% of the world
population`
}


const china = console.log(percentageOfWorld1(1441,"china"))
 const USA= console.log(percentageOfWorld1(3345,"USA"))
 const France = console.log( percentageOfWorld1(6784,"France"))