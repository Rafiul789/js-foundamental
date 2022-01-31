var budget = 4000
var hotelCost = 3000
if (budget >= 5000) {
    var remainingMoney = budget - hotelCost

    if (remainingMoney >= 2000) {

        console.log("I will go to Barbeque Party")
    } else if (remainingMoney < 2000) {
        console.log("i will go to shopping")

    }


    console.log("I will go tour with my family")


} else if (budget < 5000) {
    console.log("I will sleep")

}