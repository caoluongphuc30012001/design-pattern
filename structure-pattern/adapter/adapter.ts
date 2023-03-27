export class Account {
  private fullname: string = "";
  getName(): string {
    return this.fullname;
  }
}

export class User {
  public firstname: string;
  public lastname: string;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

export class Adapter extends Account {
  private readonly user: User;
  constructor(user: User) {
    super();
    this.user = user;
  }

  override getName(): string {
    return this.user.firstname + this.user.lastname;
  }
}
