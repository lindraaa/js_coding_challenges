function checkEvenOrOdd(num){
    const result  = (num % 2 ==0)? "Even" : "Odd";
                            
}



//checkEvenOrOdd(1);
while(true){
    const num = parseFloat(prompt("Enter a number: "));

    //Without using if and else statment
    (!isNaN(num)? checkEvenOrOdd(num) : alert("Enter Integer Only!"));
    

}
