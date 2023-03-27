//Design pattern này giúp tạo ra 1 đối tượng duy nhất cho toàn bộ hệ thống, khi gọi chỉ trả về đúng 1 object đó ko tạo ra đối tượng mới
import { Vehicle } from "./singleton";

// const abc = new Vehicle();
// const abc1 = new Vehicle();

// console.log(abc === abc1);

// console.log(abc.getInformation());
// console.log(abc1.getInformation());

console.log(Vehicle.getInstance());
