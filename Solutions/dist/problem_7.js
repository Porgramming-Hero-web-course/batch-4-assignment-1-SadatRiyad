"use strict";
{
    // Problem_7
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            return new Date().getFullYear() - this.year;
        }
    }
    //Input
    const car = new Car("Honda", "Civic", 2018);
    //Output
    // console.log(car.getCarAge());
}
