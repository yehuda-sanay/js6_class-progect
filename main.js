const VehicleArray=[Vehicle.enginecapacity];
class Vehicle{
    constructor(wheelsnumber,enginecapacity,color){
        this.wheelsnumber=wheelsnumber;
        this.enginecapacity=enginecapacity;
        this.color=color;
        this.vehicleDitels()
    }
    static bigEngine(){
        return Math.max(...VehicleArray);
    }
    vehicleDitels(){
        return `${this.wheelsnumber}${this.enginecapacity}${this.color}` 
    }
}
class Car extends Vehicle{
    constructor(type,wheelsnumber,enginecapacity,color){
    super(wheelsnumber,enginecapacity,color)
    this.type=type;
}
vehicleDitels(){
    return `${this.type}${super.vehicleDitels()}`
}
}
class Bus extends Vehicle{
    constructor(type,wheelsnumber,enginecapacity,color){
        super(wheelsnumber,enginecapacity,color)
        this.type=type;
    }
    vehicleDitels(){
        return `${this.type}${super.vehicleDitels()}`
    }
}
class Truck extends Vehicle{
    constructor(type,wheelsnumber,enginecapacity,color){
        super(wheelsnumber,enginecapacity,color)
        this.type=type;
    }
    vehicleDitels(){
        return `${this.type}${super.vehicleDitels()}`
    }
    printTipe(){
        let letrf=this.type.substring(0,1).toUpperCase();
        let midel=this.type.substring(1,this.type.length-1);
        let letrs=this.type.substring(this.type.length-1).toUpperCase();
        return `${letrf}${midel}${letrs}`
    }
    get printPri(){
        `${this.printTipe}`
    }
}console.log(Truck.printPri)



// let stext="yehuda";
// let sp=stext.substring(0,1).toUpperCase();
// let ps=stext.substring(stext.length-1).toUpperCase();
// let pps=stext.substring(1,stext.length-1);
// console.log(pps);
// console.log(sp);
// console.log(ps);