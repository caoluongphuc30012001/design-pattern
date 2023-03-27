/**Strategy Pattern là một trong những Pattern thuộc nhóm hành vi (Behavior Pattern).
 * Nó cho phép định nghĩa tập hợp các thuật toán, đóng gói từng thuật toán lại, và dễ dàng thay đổi linh hoạt các thuật toán bên trong object.
 * Strategy cho phép thuật toán biến đổi độc lập khi người dùng sử dụng chúng.
 *
 *
 * Ý nghĩa thực sự của Strategy Pattern là giúp tách rời phần xử lý một chức năng cụ thể ra khỏi đối tượng.
 * Sau đó tạo ra một tập hợp các thuật toán để xử lý chức năng đó và lựa chọn thuật toán nào mà chúng ta thấy đúng đắn nhất khi thực thi chương trình.
 * Mẫu thiết kế này thường được sử dụng để thay thế cho sự kế thừa, khi muốn chấm dứt việc theo dõi và chỉnh sửa một chức năng qua nhiều lớp con. */

import { DiscountStrategy, Ticket } from "./strategy";

class Discount10Percents implements DiscountStrategy {
  getDiscount(): number {
    return 10;
  }
}

class Discount50Percents implements DiscountStrategy {
  getDiscount(): number {
    return 50;
  }
}

class Discount70Percents implements DiscountStrategy {
  getDiscount(): number {
    return 70;
  }
}

const filmTicket = new Ticket("Xem film", 1000, new Discount10Percents());

const zooTicket = new Ticket("Zoo", 20000, new Discount50Percents());

const fairTicket = new Ticket("Fair", 100000000, new Discount70Percents());

console.log(
  filmTicket.getDiscount(),
  zooTicket.getDiscount(),
  fairTicket.getDiscount()
);

zooTicket.setDiscountStrategy(new Discount70Percents());

console.log(
  filmTicket.getDiscount(),
  zooTicket.getDiscount(),
  fairTicket.getDiscount()
);
