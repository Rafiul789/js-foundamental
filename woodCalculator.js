function woodCalcutor(chairQuantity, tableQuantity, bedQuantity) {

    const perChair = 3
    const perTable = 10
    const perBed = 50

    const chairWoodQuantity = chairQuantity * perChair

    const tableWoodQuantity = tableQuantity * perTable

    const bedWoodQuantity = bedQuantity * perBed


    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity

    return totalWood




}


const firstOption = woodCalcutor(6, 9, 4)

console.log(firstOption)