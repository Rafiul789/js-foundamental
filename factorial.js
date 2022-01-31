function getFactorial(number) {
    let factorial = 1
    for (var i = 1; i <= number; i++) {


        factorial = factorial * i


    }
    return factorial

}

var firstFactorial = getFactorial(4)

console.log(firstFactorial)