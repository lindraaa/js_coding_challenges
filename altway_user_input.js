function getting_area(l,w){
  let a = l*w;
  return a;
}

function getting_perimeter(l, w){
  let b = 2 * (l + w);
  return b;
}

function getting_lengdig(l,w){
  let c = Math.pow(l,2);
  let d = Math.pow(w,2);
  let e = Math.sqrt(c + d);
  return e;
}



while(true){
  let l, w;
  l = parseFloat(window.prompt("Enter the length of rectangle: "));
  w = parseFloat(window.prompt("Enter the width of rectangle: "));
  
  if(!isNaN(l) && !isNaN(w)){
      console.log("The area of a rectangle is ", getting_area(l,w));
      console.log("The perimeter of a rectangle is ", getting_perimeter(l,w));
      console.log("The diagonal of a rectangle is ", getting_lengdig(l,w));
      break;
  }
  else{
      alert("Entered wrong number!");
  }


}
