//Design pattern này giúp tạo ra 1 đối tượng duy nhất cho toàn bộ hệ thống, khi gọi chỉ trả về đúng 1 object đó ko tạo ra đối tượng mới
import { Vehicle } from "./singleton";

const vehicle1 = new Vehicle();

vehicle1.setFullname("Nghĩa");
vehicle1.setPrice(1000000);
const vehicle2 = new Vehicle();
console.log(vehicle2)