function getCelcius(farenheit) {

    var celcius = (farenheit - 32) * 5 / 9

    return celcius

}

var myFarenheit = getCelcius(45)

console.log('your celcius is ', myFarenheit)