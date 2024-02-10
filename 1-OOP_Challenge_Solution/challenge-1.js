/*
    1- Use a constructor function to implement a Laptop.
    
        a. A laptop has a brand, model, and batteryPercentage properties.
        b. The batteryPercentage property is the current battery level of the laptop.

    2- Implement a useSoftware method that will decrease the laptop's batterPercentage by 15 and log the new battery level to the console.

    3- Implement a charge method that will incerease the laptop's batteryPercentage by 25, but it should not exceed 100. Also, log the new battery level to the console.

    4- Create 2 laptop objects an experiment with calling useSoftware and charge multiple times on each of them.
*/

// Construction Function
/*
function Laptop (brand, model, batteryPercentage = 100) {
    this.brand = brand;
    this.model = model;
    this.batteryPercentage = batteryPercentage;
}

Laptop.prototype.useSoftware = function () {
    this.batteryPercentage -= 15;
    if (this.batteryPercentage < 0) {
        console.log(`Battery is too low to run the app.`);
    } else {
        console.log(`Battery level is ${this.batteryPercentage}`);
    }
}

Laptop.prototype.charge = function () {
    if (this.batteryPercentage >= 100) {
        console.log(`The battery is full`);
    } else {
        this.batteryPercentage += 25;
        console.log(`The battery level is ${this.batteryPercentage}`);
    }
}
*/

// ES6 Class
class Laptop {
    constructor (brand, model, batteryPercentage = 100) {
        this.brand = brand;
        this.model = model;
        this.batteryPercentage = batteryPercentage;
    }

    useSoftware() {
        this.batteryPercentage -= 15;
        this.batteryPercentage < 0 ? console.log(`Battery is too low to run the app.`) : console.log(`The battery level is ${this.batteryPercentage}`);
        if (this.batteryPercentage <= 0) {
            this.batteryPercentage = 0;
        }
    }

    charge() {
        if (this.batteryPercentage >= 100) {
            console.log(`The battery is full`);
        } else {
            this.batteryPercentage += 25;
            console.log(`The battery level is ${this.batteryPercentage}`);
        }
    }
}

const laptop1 = new Laptop("Samsung", "Probook");
const laptop2 = new Laptop("Lenovo", "Yoga");