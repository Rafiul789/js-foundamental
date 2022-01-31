function interest(principle, rate, time) {

    let interest = (principle * rate * time) / 100

    return 'your interest is ' + interest + 'Tk'

}

let myInterest = interest(56789, 3.3, 1)

console.log(myInterest)