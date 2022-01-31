function getLeapYear(year) {

    if (year % 4 == 0) {

        return year + '  is leap year'
    } else {
        return 'Your year is not leap year'

    }

}

var myYear = getLeapYear(1949)

console.log(myYear)
var myYear2 = getLeapYear(1948)

console.log(myYear2)