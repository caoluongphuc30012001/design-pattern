/**
 * Composite là một mẫu thiết kế thuộc nhóm cấu trúc (Structural Pattern).
 * Composite Pattern là một sự tổng hợp những thành phần có quan hệ với nhau để tạo ra thành phần lớn hơn.
 * Nó cho phép thực hiện các tương tác với tất cả đối tượng trong mẫu tương tự nhau.
 *
 * Nên sử dụng khi nào:
 * Composite Pattern chỉ nên được áp dụng khi nhóm đối tượng phải hoạt động như một đối tượng duy nhất (theo cùng một cách).
 * Composite Pattern có thể được sử dụng để tạo ra một cấu trúc giống như cấu trúc cây.
 */

import { FileComposite, FolderComposite } from "./composite";

const file1 = new FileComposite("file1", 1);
const file2 = new FileComposite("file2", 2);
const file3 = new FileComposite("file3", 3);

const folder1 = new FolderComposite("folder1", 1);
const folder2 = new FolderComposite("folder2", 2);
const folder3 = new FolderComposite("folder3", 3);

folder1.addChildren(file1);
folder1.addChildren(folder2);
folder1.addChildren(folder3);
folder2.addChildren(file2);
folder3.addChildren(file3);

console.log(folder1.totalSize());

folder1.removeChildren(folder2);

console.log(folder1.totalSize());
