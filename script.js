class uber{
    constructor(distance,rate,waitingperiod){
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod=waitingperiod
    }
getrideDetails(){
    return(`over all distance covered ${this.distance} ride rate is ${this.rate} cabe waiting charges
    ${this.waitingperiod}`)
}
getprice(){
    let price =(this.rate * this.distance) + (2*this.waitingperiod)
    return price;
}
}
 let uber1 = new uber( 200,50,20)
console.log(uber1.getprice())
console.log(uber1.getrideDetails())