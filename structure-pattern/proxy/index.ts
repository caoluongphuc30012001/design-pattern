//interface fot Subject
//Realsubject sẽ ủy quyền cho proxy hiện thực và check valid

// /**
//  * Dưới đây là một số ứng dụng của Proxy Design Pattern:
//  * 1. Remote Proxy: Được sử dụng để truy cập đối tượng nằm ở một nơi khác mà không cần phải thực sự tạo ra đối tượng đó.
//  * Ví dụ: Remote Method Invocation (RMI) trong Java.
//  *
//  * 2. Virtual Proxy: Được sử dụng để tạo ra một đối tượng trung gian để tải các tài nguyên nặng, như hình ảnh hoặc âm thanh, chỉ khi cần thiết.
//  * Ví dụ: Trang web tải ảnh chỉ khi người dùng cuộn trang đến vị trí ảnh đó.
//  *
//  * 3. Protection Proxy: Được sử dụng để kiểm soát quyền truy cập đến đối tượng gốc.
//  * Ví dụ: Trong một hệ thống quản lý tệp tin, người dùng chỉ có quyền truy cập vào những tệp tin mà họ được phép truy cập.
//  *
//  * 4. Caching Proxy: Được sử dụng để lưu trữ các dữ liệu phổ biến để giảm thiểu thời gian truy cập đối tượng gốc.
//  * Ví dụ: Trang web lưu trữ các trang web được truy cập thường xuyên để giảm thiểu thời gian tải trang.
//  *
//  * 5. Logging Proxy: Được sử dụng để ghi lại các hoạt động được thực hiện trên đối tượng gốc.
//  * Ví dụ: Ghi lại các yêu cầu và phản hồi mà ứng dụng nhận được từ các API.
//  */



/**
 * Interface ISubject định nghĩa phương thức signRegister để ký hợp đồng.
 */
interface ISubject {
  signRegister(client: Client): void;
}

/**
 * Lớp Leader hiện thực interface ISubject và định nghĩa phương thức signRegister để ký hợp đồng.
 */
class Leader implements ISubject {
  signRegister(client: Client): void {
    console.log("Kí hợp đồng");
  }
}

/**
 * Lớp ProxyPattern hiện thực interface ISubject và định nghĩa phương thức signRegister để kiểm tra tính hợp lệ của client trước khi ký hợp đồng.
 */
class ProxyPattern implements ISubject {
  subject: ISubject;
  constructor(subject: ISubject) {
    this.subject = subject;
  }

  /**
   * Phương thức signRegister kiểm tra tính hợp lệ của client trước khi ký hợp đồng.
   * @param client đại diện cho client muốn ký hợp đồng.
   */
  signRegister(client: Client): void {
    if (this.checkValid(client)) {
      this.subject.signRegister(client);
    }
  }

  /**
   * Phương thức checkValid kiểm tra tính hợp lệ của client.
   * @param client đại diện cho client muốn ký hợp đồng.
   * @returns trả về true nếu client hợp lệ và ngược lại.
   */
  private checkValid(client: Client): boolean {
    if (client.name === "phuc") return true;
    return false;
  }
}

/**
 * Lớp Client đại diện cho client muốn ký hợp đồng.
 */
class Client {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Phương thức applyFor để client muốn ký hợp đồng thông qua proxy.
   * @param proxy đại diện cho proxy muốn ký hợp đồng.
   */
  applyFor(proxy: ProxyPattern): void {
    proxy.signRegister(this);
  }
}

const leader = new Leader();

const thuky = new ProxyPattern(leader);

const developer = new Client("phuc");

developer.applyFor(thuky);
