//Design pattern này giúp tạo ra một object mới có các property giống như bản gốc

import { User } from "./property";
const user1 = new User();

const user2 = user1.clone();

user1.setFullname("hihi");
user2.setFullname("abc");
console.log(user2.getFullname());
