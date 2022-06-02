class UberPrice {

distance = 0;
rate = 0;

    constructor() {
        this.rate = 10;
        this.distance = 100;
    }

    constructor(distance) {
        this.rate = 10;
        this.distance = Number(distance);
    }


    constructor(distance, rate) {
        this.distance = Number(distance);
        this.rate = Number(rate);
    }

    getDistance(){
        return this.distance;
    }

    setDistance(distance){
        this.distance = Number(distance);
    }

    setRate(rate){
        this.rate = Number(rate);
    }

    getRate() {
        return this.rate;
        }

    getPrice() {
        return rate*distance;
    }

}