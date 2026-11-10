//Write a JavaScript program to check whether a number is even or odd. 

function evenOrOddNumber(){

    //declare an array
    let number=[11,30,20,45,58];
    for(let i=0;i<number.length;i++){
       if(number[i]%2 ==0){
         console.log("Number is even: "+number[i]);
  }else{
    console.log("Number is odd: "+number[i]);
  }

    }
}

evenOrOddNumber();
