    
    // Delete the alert from Step #9 and create an array of strings, 
    // each of which uses the maximum and minimum values for the three RGB color components.  
    // (Eventually we will replace this list with a randomly-generated list of colors, 
    //     but this is a good place to start).  Here are the values: 
    
    
     var listOfColors = generateRandomColors(6);

    // Now select all 6 colored divs from the HTML page (using a DOM selector starting with document...) 
    // and store them in a variable called squares or something similar.

     let squares = document.querySelectorAll('.box');

    //  Loop through all six squares on your HTML page and assign the six colors in your array, to those squares.
    //  Hint: this will look something like this: squares[index].style.backgroundColor = colors[index])
     let secretColor = secretColors();
     let colorDisplay = document.getElementById("colorDisplay");
     var messageDisplay = document.querySelector("#message");
     var h1 = document.querySelector("h1");
     var resetButton = document.querySelector("#reset");

     resetButton.addEventListener("click", function() {
         // generate random colors
         colors = generateRandomColors(6);
         // try to pick a new random color from the array
         let secretColor = secretColors();
         // change colorDisplay
         colorDisplay.textContent = secretColor;
         // try to change the colors of squares
         for(var i = 0; i < squares.length; i++) {
             squares[i].style.backgroundColor = colors[i];
         }
         h1.style.backgroundColor = "#232323";
     })

     colorDisplay.textContent = secretColor;


// Now display the RGB color specified in Step #13 in the middle of your h1.  You can use a span to do this. 
// The RGB value from your secret color variable should replace the word "RGB" in the h1. 
// You can use something like: variable_name.innerHTML = secretColor;




     for (var i = 0; i < squares.length; i++) {
         // add initial colors to sqaures
        squares[i].style.backgroundColor = listOfColors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === secretColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "rgb(35, 35, 35)";
                messageDisplay.textContent = "Try Again";
            }
            });
        }


        function changeColors(color) {
            //loop through squares
            for(var i = 0; i < squares.length; i++){
                squares[i].style.backgroundColor = color;
            }
        }

        // Write another function to select a random color from our array.  
        // To do this, first we need to pick a random number, then we need to use that number to select one of the array values.  
        // To pick a random number, you can use the Math.random() method -- 
        // this function randomly picks a number between 0 and 1.  But... it never includes the number 1 (try it out in the Console).  
        // AND our array has six colors in it -- how would you use this method to pick a random number between 1 and 6?

        function secretColors() {
            //pick random number
           var random = Math.floor(Math.random() * listOfColors.length);
           return listOfColors[random];
        }

        function generateRandomColors(num) {
            var arr = [];

            for(var i = 0; i < num; i++) {
                arr.push(randomColor())
            }
            
            return arr
        }

        function randomColor(){
            //Pick a "red" from 0 to 255
            var r = Math.floor(Math.random() * 256);
            //Pick a "green" from 0 to 255
            var g = Math.floor(Math.random() * 256);
            //Pick a "blue" from 0 to 255
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }

        