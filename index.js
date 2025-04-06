/*
let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

mark.calcBMI()
john.calcBMI()
console.log(mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}` : `${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`)*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + calcTip(bills[i]))
}

console.log(tips)
console.log(totals)