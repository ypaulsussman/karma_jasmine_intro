# Server-Side Calculator #

Welcome to your second weekend challenge! We are going to be building a calculator application using jQuery, Node, and Express.

[x] The client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM).

[x] Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. (_So, when the object is sent, it should look something like this:_ `{ x: 3, y: 4, type: Add }`)

[x] Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. (_The server should be able to handle Addition, Subtraction, Multiplication, and Division._)

[x] Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

[x] Finally, build a 'clear' button that resets the whole experience.


### HARD MODE: (Stretch Goal 1) ### 

[x] Convert the input fields for the two values to Buttons, so the experience would allow the user to click on a numerical button, then a mathematical operation, then a numerical button again. Then have an equal button that sends all of the information to the server.

### PRO MODE: (Stretch Goal 2) ### 

[x] Create a delay from when the client receives the response from the Server, and when the calculation is actually displayed on the DOM.

The delay should be 3 seconds. During that delay, show information that says 'computing' until the 3 second delay has finished, then remove the 'computing' message while showing the calculation.


### POST-CHALLENGE REFACTORING: (Proctor's Suggestions) ###  
[x] Code comments above their respective line.

[x] Switch cases on single value comparisons (your server side calc uses else/if chains).

[x] Get those event listener assignments out of the document ready and into a master function that turns on and off listeners.

[x] Have their function calls housed in their own functions for potential reuse.
