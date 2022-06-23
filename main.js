class Vehicle{
    constructor(wheelsnumber,enginecapacity,color){
        this.wheelsnumber=wheelsnumber;
        this.enginecapacity=enginecapacity;
        this.color=color;
        this.vehicleDitels()
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
}
