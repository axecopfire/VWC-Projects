for(var i = 1; i <= 100; i++ ){
   if(i % 3 === 0){
       if(i%5 === 0){
           console.log("fizzbuzz");
       } else {
           console.log("fizz");
       }
   } else if(i % 5 === 0){
       console.log("buzz");
   } else{
       console.log(i)
   }
   
   
   /* switch(i){
    case i % 3 === 0:
        console.log("fizz");
        break;
    case i % 5 === 0:
        console.log("buzz");
        break;
    case i % 3 === 0 && i % 3 === 0:
        console.log("fizzbuzz");
        break;
    default:
        console.log(i);
        break;
    }*/
}