//interface fot Subject
//Realsubject sẽ ủy quyền cho proxy hiện thực và check valid

/**
 * Dưới đây là một số ứng dụng của Proxy Design Pattern:
 * 1. Remote Proxy: Được sử dụng để truy cập đối tượng nằm ở một nơi khác mà không cần phải thực sự tạo ra đối tượng đó.
 * Ví dụ: Remote Method Invocation (RMI) trong Java.
 *
 * 2. Virtual Proxy: Được sử dụng để tạo ra một đối tượng trung gian để tải các tài nguyên nặng, như hình ảnh hoặc âm thanh, chỉ khi cần thiết.
 * Ví dụ: Trang web tải ảnh chỉ khi người dùng cuộn trang đến vị trí ảnh đó.
 *
 * 3. Protection Proxy: Được sử dụng để kiểm soát quyền truy cập đến đối tượng gốc.
 * Ví dụ: Trong một hệ thống quản lý tệp tin, người dùng chỉ có quyền truy cập vào những tệp tin mà họ được phép truy cập.
 *
 * 4. Caching Proxy: Được sử dụng để lưu trữ các dữ liệu phổ biến để giảm thiểu thời gian truy cập đối tượng gốc.
 * Ví dụ: Trang web lưu trữ các trang web được truy cập thường xuyên để giảm thiểu thời gian tải trang.
 *
 * 5. Logging Proxy: Được sử dụng để ghi lại các hoạt động được thực hiện trên đối tượng gốc.
 * Ví dụ: Ghi lại các yêu cầu và phản hồi mà ứng dụng nhận được từ các API.
 */
interface Subject {
  signRegister(client: Client): void;
}

class Leader implements Subject {
  signRegister(client: Client): void {
    console.log("Kí hợp đồng");
  }
}

class ProxyPattern implements Subject {
  subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
  }

  signRegister(client: Client): void {
    if (this.checkValid(client)) {
      this.subject.signRegister(client);
    }
  }

  private checkValid(client: Client): boolean {
    if (client.name === "phuc") return true;
    return false;
  }
}

class Client {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  applyFor(proxy: ProxyPattern): void {
    proxy.signRegister(this);
  }
}

const leader = new Leader();

const thuky = new ProxyPattern(leader);

const developer = new Client("phuc");

developer.applyFor(thuky);
