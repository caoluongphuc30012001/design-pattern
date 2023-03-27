export class Vehicle {
  private static instance: Vehicle = new Vehicle();
  private fullname: string = "";
  private price: number = 0;
  constructor() {
    if (Vehicle.instance) return Vehicle.instance;
    Vehicle.instance = this;
    this.fullname = "Phuc";
    this.price = 0;
  }

  public getInformation(): Object {
    return {
      fullname: this.fullname,
      price: this.price,
    };
  }

  public static getInstance(): Vehicle {
    return Vehicle.instance;
  }
}
