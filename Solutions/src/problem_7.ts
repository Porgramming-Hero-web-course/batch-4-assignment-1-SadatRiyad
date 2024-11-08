{
    // Problem_7
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(): number {
            return new Date().getFullYear() - this.year;
        }
    }

    //Input
    const car = new Car("Honda", "Civic", 2018);
    //Output
    // console.log(car.getCarAge());
}