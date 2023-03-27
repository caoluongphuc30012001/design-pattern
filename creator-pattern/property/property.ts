export class User {
  public email: string = "";
  public fullname: string = "";
  constructor() {}

  getEmail(): string {
    return this.email;
  }

  getFullname(): string {
    return this.fullname;
  }

  setFullname(value: string) {
    this.fullname = value;
  }
  clone(): this {
    const component = new User();
    const clone = Object.setPrototypeOf({ ...this }, component);
    return clone;
  }
}
