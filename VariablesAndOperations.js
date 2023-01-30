//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 12;
		
//create a variable to hold the cost of groceries at checkout
var groceryCost = 154.76;

//create a variable to hold a person's middle initial
var middleInitial = 'I';

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = false;

//create a variable to hold a customer's first name
var customerFirstName = 'Samantha';

//create a variable to hold a street address
var streetAddress = '2970 Thorson Drive';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(groceryCost);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats -= 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
groceryCost += 2.15;
console.log(groceryCost);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'H';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName + ' ' + middleInitial + ' ' + 'Rogers';
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hi, my name is ' + fullName + ' and I live at ' + streetAddress + '.');