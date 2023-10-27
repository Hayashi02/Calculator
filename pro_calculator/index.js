let main;
let main2;


//first number in
    document.getElementById("nine").onclick = function() {
      if (main) {
        main += "9";
      } else {
        main = "9";
      }
      document.getElementById("output").innerHTML = main;
    };

    document.getElementById("eight").onclick = function() {
      if (main) {
        main += "8";
      } else {
        main = "8";
      }
      document.getElementById("output").innerHTML = main;
    };
    document.getElementById("seven").onclick = function(){
    if(main){
      main += "7";
    } else{
      main = "7";
    };
    document.getElementById("output").innerHTML = main;
   };
    document.getElementById("six").onclick = function(){
    if(main){
      main += "6";
    } else{
      main = "6";
    };
    document.getElementById("output").innerHTML = main;
   };
    document.getElementById("five").onclick = function(){
    if(main){
      main += "5";
    } else{
      main = "5";
    };
    document.getElementById("output").innerHTML = main;
   };
    document.getElementById("four").onclick = function(){
    if(main){
      main += "4";
    } else{
      main = "4";
    };
    document.getElementById("output").innerHTML = main;
   };
    document.getElementById("three").onclick = function(){
    if(main){
      main += "3";
    } else{
      main = "3";
    };
    document.getElementById("output").innerHTML = main;
   };
    document.getElementById("two").onclick = function(){
    if(main){
      main += "2";
    } else{
      main = "2";
    };
    document.getElementById("output").innerHTML = main;
   };
   document.getElementById("one").onclick = function(){
    if(main){
      main += "1";
    } else{
      main = "1";
    };
    document.getElementById("output").innerHTML = main;
   };
   document.getElementById("zero").onclick = function(){
    if(main){
      main += "0";
    } else{
      main = "0";
    };
    document.getElementById("output").innerHTML = main;
   };
  
  //operator

  document.getElementById("divide").onclick = function(){
    main +=" / ";
    document.getElementById("output").innerHTML = main;
  };
  document.getElementById("multiply").onclick = function(){
    main += " * ";
    document.getElementById("output").innerHTML = main;
  };

  document.getElementById("subtraction").onclick = function(){
    main += " - ";
    document.getElementById("output").innerHTML = main;
  };

  document.getElementById("addition").onclick = function(){
    main +=" + ";
    document.getElementById("output").innerHTML =main;
  };

  document.getElementById("erase").onclick = function(){
    main = "";
    main2 = "";
    document.getElementById("output").innerHTML = main;
    document.getElementById("output_2").innerHTML = main;
  };

document.getElementById("equal").onclick = function(){
  let num1;
  let num2;
  let op;
  main2 = main;
  num1 = parseInt(main2.slice(0, main2.indexOf(" ")));
  num2 = parseInt(main2.slice(main2.indexOf(" ")+3));
  op = main2.charAt(main2.indexOf(" ")+1);
  
  switch(op){
    case "+":
      main2 = num1 + num2;
      break;
    case "-":
      main2 = num1 - num2;
      break;
    case "*":
      main2 = num1 * num2;
      break;
    case "/":
      main2 = num1 / num2;
      break;
    default:
      document.getElementById("output").innerHTML = "Please enter an operator!";
      break;
  };
  
  document.getElementById("output_2").innerHTML = main + " = ";
  document.getElementById("output").innerHTML = main2;

};