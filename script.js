    
    // Delete the alert from Step #9 and create an array of strings, 
    // each of which uses the maximum and minimum values for the three RGB color components.  
    // (Eventually we will replace this list with a randomly-generated list of colors, 
    //     but this is a good place to start).  Here are the values: 
    
    
    var listOfColors = ["rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"];

    // Now select all 6 colored divs from the HTML page (using a DOM selector starting with document...) 
    // and store them in a variable called squares or something similar.

     let squares = document.getElementsByClassName('box');

    //  Loop through all six squares on your HTML page and assign the six colors in your array, to those squares.
    //  Hint: this will look something like this: squares[index].style.backgroundColor = colors[index])
let secretColor =  listOfColors[3];


// Now display the RGB color specified in Step #13 in the middle of your h1.  You can use a span to do this. 
// The RGB value from your secret color variable should replace the word "RGB" in the h1. 
// You can use something like: variable_name.innerHTML = secretColor;


document.getElementById("secret").innerHTML = secretColor;

     for (var i = 0; i < squares.length; i++) {
         squares[i].style.backgroundColor = listOfColors[i];
     }