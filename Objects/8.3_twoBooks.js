let book1 = {
     name : 'Astrophysics',
    author : 'Neil degrasse tyson' ,
    year : '2017',
  

    

};

let book2 = {
    name : 'Steve Jobs: The Man Behind the Bitten Apple',
    author : 'J. R. MacGregor' ,
    year : '2019',

};

let bookUtils = {
    getFirstPublished : function(){
        if(book1.year > book2.year){
            return book2.year;
        }else{
            return book1.year;
        }

   },

   setNewEdition : function(){
      book1.year = "2021";
      book2.year = "2003";
    
   },

   setLanguage : function(){
    book1.language = 'ENGLISH';
    book2.language = 'Arabic';
   },

   setTranslation : function(){
    book1.translator = 'Russian';
    
    book1.translation = {language : book1.language, translator : book1.translator};
    book2.translator = 'Russian';
    book2.translation = {language : book2.language, translator : book2.translator};

   },

   setPublisher : function(){
    book1.location = 'France';
     book1.publisher = {location : book1.location, name : book1.name};
     book2.location = 'France';
     book2.publisher = {location : book2.location, name : book2.name};
     
    },

    isSamePublisher : function(){
        if(book1.location === book2.location  ){
            console.log( 'its the same locations');
        }else{
            console.log('its not the same locations');
        }
        if(book1.publisher === book2.publisher){
            console.log( 'its the same publisher');
        }else{
            console.log('its not the same publisher');
        }
        

    },



};

//funcations call:
bookUtils.getFirstPublished();
bookUtils.setNewEdition();
bookUtils.setLanguage();
bookUtils.setTranslation();
bookUtils.setPublisher();
bookUtils.isSamePublisher();

console.log(book1);

