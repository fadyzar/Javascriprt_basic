
function date(){

    //year
const year = new Date;



//month
let month1 = new Date;
let month = month1.getMonth()

//day
const day = new Date;
const date1 = day.getDate();


//day of the week
const birthday = new Date;
let day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6


switch (day1) {
case 0:
 day1 = 'Sunday';
break;

case 1:
 day1 = 'Monday';
 break;

  case 2:
 day1 = "Tuesday";
break;


 case 3:
  day1 = "Wednesday";
  break;

 case 4:
 day1 = 'Thursday';
 break;
 
 case 5:
 day1 = "Friday";
break;
 
case 6:
 day1 = 'Saturday';
 break;
  default:
    console.log(null);
}



switch (month) {
case 0:
 month = 'January';
break;

case 1:
 month = 'February';
 break;

  case 2:
 month = "March";
break;


 case 3:
  month = "April";
  break;

 case 4:
 month = 'May';
 break;
 
 case 5:
 month = "June";
break;
 
case 6:
 month = 'July';
 break;
 case 7:
 month = 'August';
 break;
 case 8:
 month = 'September';
 break;
 case 9:
 month = 'October';
 break;
 case 10:
 month = 'November';
 break;
 case 11:
 month = 'December';
 break;
 
    default:
      console.log(null);
  }


console.log(`Today is ${day1} the ${date1} of ${month} ${year.getFullYear()}`);
}

date();