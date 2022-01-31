function sumOfNumbers(num1, num2) {
    var result = num1 + num2

    return result
}


var result = sumOfNumbers(65, 4)
console.log(result)

var name = "p hero"


// write a simple function that taken as a parameter and then return a custom message


function msgGenerator(name) {

    var message = "Hello  " + name + ", welcome to programming hero. "

    return message

}

var hello = msgGenerator("Rafiul Islam")

console.log(hello)

// problem :  write a function for a food delivery service that sells pizza only. Each pizza cost 10$.  This function take the food name & quantity as a parameter and then return a custom message with order info.This function should be smart enough to handle wrong parameter input.

function pizzaPanda(foodName, quantity) {

    if (foodName.toLowerCase() != 'pizza') {
        return "Sorry,we sell pizza only."

    }
    if (quantity >= 10) {
        return "Sorry,We have only 10 pizza "

    }


    var price = 10 * quantity

    var message = "Order successful,Order info: " + foodName + ",price: " + price + "$"

    return message

}

console.log(pizzaPanda('Pizza', 404))