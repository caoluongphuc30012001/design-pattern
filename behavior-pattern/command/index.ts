/**
 * Composite Design Pattern được sử dụng khi chúng ta muốn tạo ra một cấu trúc cây đối tượng có thể được truy cập giống nhau, dù là đối tượng lá đơn lẻ hay đối tượng phức tạp hơn gồm nhiều đối tượng con.
 * Điều này có thể giúp chúng ta tăng tính linh hoạt, giảm thiểu sự phức tạp trong mã nguồn và tăng khả năng tái sử dụng.
 * Dưới đây là một số ứng dụng của Composite Design Pattern:
 * 1. GUI (Graphical User Interface): Composite Design Pattern được sử dụng để tạo ra một cấu trúc cây các thành phần của giao diện người dùng,
 * chẳng hạn như các thành phần của một trang web hoặc ứng dụng desktop.
 *
 * 2. Trình duyệt tệp: Composite Design Pattern được sử dụng để tạo ra một cấu trúc cây các thư mục và tệp tin.
 * Tệp tin có thể là lá đơn lẻ hoặc một thư mục có thể chứa nhiều tệp tin và thư mục con.
 *
 * 3. Xử lý văn bản: Composite Design Pattern được sử dụng để tạo ra một cấu trúc cây của các thành phần trong văn bản,
 * chẳng hạn như các đoạn, câu và từ.
 *
 * 4. Các thuật toán xử lý đồ họa: Composite Design Pattern được sử dụng để tạo ra một cấu trúc cây các thành phần của một hình ảnh,
 * chẳng hạn như các đường thẳng, hình chữ nhật và các đối tượng khác.
 *
 * 5. Quản lý các tài nguyên: Composite Design Pattern được sử dụng để tạo ra một cấu trúc cây các tài nguyên,
 * chẳng hạn như các thư mục, tệp tin và các tài nguyên khác. Ví dụ: một ứng dụng quản lý tài liệu có thể sử dụng Composite Design Pattern để quản lý các tài liệu được tổ chức dưới dạng cây.
 * */
import { Remote, StartFanCommand, StopFanCommand, User } from "./command";
const user = new User("phuc");
const startFanCommand = new StartFanCommand(user);
const stopFanCommand = new StopFanCommand(user);
const remote = new Remote(startFanCommand, stopFanCommand);

//Bấm nút điều khiển

remote.onStart();
remote.onStop();
