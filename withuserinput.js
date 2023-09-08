function reverseString(inputString){
    let n_str = "";

    for(let i = inputString.length -1; i>=0; --i){
        n_str += inputString[i];        
    }
    console.log("The word in reverse : "+ n_str);

}



const inputString = (prompt("Enter a string: "));
reverseString(inputString);
