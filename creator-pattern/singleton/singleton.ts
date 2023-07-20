/**
 * Đây là class Vehicle được thiết kế theo singleton design pattern
 */
export class Vehicle {
  private static instance: Vehicle = new Vehicle();
  private fullname: string = "";
  private price: number = 0;

  /**
   * Khởi tạo instance của Vehicle
   * Nếu đã có 1 instance trước đó, sẽ trả về instance đó. Ngược lại sẽ tạo mới instance
   */
  constructor() {
    if (Vehicle.instance) return Vehicle.instance;
    Vehicle.instance = this;
    this.fullname = "Phuc";
    this.price = 0;
    return Vehicle.instance;
  }

  /**
   * Trả về thông tin của vehicle đó
   * @returns {Object} thông tin của vehicle
   */
  public getInformation(): Object {
    return {
      fullname: this.fullname,
      price: this.price,
    };
  }

  /**
   * Cài đặt tên cho vehicle
   * @param fullname 
   */
  public setFullname(fullname: string): void {
    this.fullname = fullname;
  }

  /**
   * Cài đặt giá cho vehicle
   * @param price 
   */
  public setPrice(price: number): void {
    this.price = price;
  }
}
