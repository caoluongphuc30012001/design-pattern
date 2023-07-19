//Design pattern này giúp tạo ra một object mới có các property giống như bản gốc

import { User } from "./property";
const user1 = new User();

const user2 = user1.clone();


console.log(Object.getPrototypeOf(user1))
console.log(Object.getPrototypeOf(user2))
console.log(user1===user2)