let myArray = [1, 12, 15, 6, 7, 9, 13, 2, 6, 4]

function sum(myArray) {

    let sum = 0;

    for (let i = 0; i <= myArray.length; i++) {

        sum = sum + i
    }
    return sum

}

console.log(sum(myArray))