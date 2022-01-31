function getGrade(number) {

    if (number >= 80 && number <= 100) {

        return 'Your grade is A+'
    } else if (number >= 70 && number <= 80) {

        return 'Your grade is A'
    } else if (number >= 60 && number <= 70) {

        return 'Your grade is A-'
    } else if (number >= 50 && number <= 60) {

        return 'Your grade is B+'
    } else if (number >= 40 && number <= 50) {

        return 'Your grade is C'
    } else if (number >= 33 && number <= 40) {
        return 'Your grade is D'
    } else { return 'You have failed' }



}

var myNum = getGrade(87)

console.log(myNum)
var myNum1 = getGrade(77)

console.log(myNum1)
var myNum2 = getGrade(67)

console.log(myNum2)
var myNum3 = getGrade(57)

console.log(myNum3)
var myNum4 = getGrade(47)

console.log(myNum4)
var myNum5 = getGrade(37)

console.log(myNum5)
var myNum6 = getGrade(33)

console.log(myNum6)
var myNum7 = getGrade(3)

console.log(myNum7)