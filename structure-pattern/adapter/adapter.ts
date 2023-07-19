/**
 * Đây là class Account
 * @param {string} fullname
 */
export class Account {
  private fullname: string = "";
  getName(): string {
    return this.fullname;
  }
}

/**
 * Đây là class User
 * @param {string} firstname
 * @param {string} lastname
 */
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
