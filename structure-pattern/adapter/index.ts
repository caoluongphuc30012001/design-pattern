/**
 * Là cầu nối giúp 2 class không liên quan tới nhau có thể giao tiếp với nhau.
 * Được thực hiện nhiều trong quá trình chuyển đổi dữ liệu từ be trả về cho frontend render cho người dùng
 */

import { Adapter } from "./adapter";
import { User } from "./adapter";

const user = new User("cao", "phuc");

const account = new Adapter(user);

console.log(account.getName());
