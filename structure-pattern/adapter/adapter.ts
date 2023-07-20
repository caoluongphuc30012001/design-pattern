/**
 * Lớp Account đại diện cho tài khoản người dùng.
 */
export class Account {
  private fullname: string = "";
  /**
   * Phương thức trả về tên đầy đủ của người dùng.
   * @returns {string} Tên đầy đủ của người dùng.
   */
  getName(): string {
    return this.fullname;
  }
}

/**
 * Lớp User đại diện cho người dùng.
 */
export class User {
  public firstname: string;
  public lastname: string;
  /**
   * Khởi tạo một đối tượng User với firstname và lastname.
   * @param {string} firstname Tên của người dùng.
   * @param {string} lastname Họ của người dùng.
   */
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

/**
 * Lớp Adapter kế thừa từ lớp Account và chuyển đổi đối tượng User thành đối tượng Account.
 */
export class Adapter extends Account {
  private readonly user: User;
  /**
   * Khởi tạo một đối tượng Adapter với đối tượng User.
   * @param {User} user Đối tượng User cần chuyển đổi.
   */
  constructor(user: User) {
    super();
    this.user = user;
  }

  /**
   * Phương thức trả về tên đầy đủ của người dùng.
   * @returns {string} Tên đầy đủ của người dùng.
   */
  override getName(): string {
    return this.user.firstname + this.user.lastname;
  }
}
