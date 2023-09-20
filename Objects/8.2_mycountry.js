let mycountry = {
    country : 'Israel',
    capital : 'jerusalem',
    language : 'Hebrew',
    population :'9m',
    neighbours : ['Syria','Lebanon','Egyptians','Jordan'],
    discripe : function() {
        return this.country + " has " + this.population + " people, their mother tongue is  " + this.language + " they have " +  this.neighbours.length +' neighbouring countries and a capital called '+ this.capital; 
      },
      
    checkIsland : function() {
       return mycountry.neighbours == [] ? 'true' : 'false';
      },



};

//  console.log(`${mycountry.discripe()}`);
// console.log(`${mycountry.checkIsland()}`);

