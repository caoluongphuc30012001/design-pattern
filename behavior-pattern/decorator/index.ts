/**
 * Decorator pattern là một trong những Pattern thuộc nhóm cấu trúc (Structural Pattern).
 * Nó cho phép người dùng thêm chức năng mới vào đối tượng hiện tại mà không muốn ảnh hưởng đến các đối tượng khác.
 * Kiểu thiết kế này có cấu trúc hoạt động như một lớp bao bọc (wrap) cho lớp hiện có. Mỗi khi cần thêm tính năng mới, đối tượng hiện có được wrap trong một đối tượng mới (decorator class).
 * Decorator pattern sử dụng composition thay vì inheritance (thừa kế) để mở rộng đối tượng. Decorator pattern còn được gọi là Wrapper hay Smart Proxy.
 */

import { Employee, Manager, TeamLeader } from "./decorator";
const newEmployee = new Employee("phuc");

const newLeader = new TeamLeader(newEmployee);

const newManager = new Manager(newLeader);

const secondLeader = new TeamLeader(newManager);
newEmployee.setName("tien");
secondLeader.notify();
