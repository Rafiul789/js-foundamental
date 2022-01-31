var age = 16;
var vaccineCount = 2
isVaccinated = false;

if (age > 20 && vaccineCount == 2) {

    console.log("They are allowed to go to foreign")


} else if (age > 15 && age < 20 && vaccineCount == 0) {
    console.log("You should take your vaccine")

}

if (age > 15 && age < 20 && vaccineCount == 2) {

    isVaccinated = true
    console.log("You have taken 2 dose vaccine")
}