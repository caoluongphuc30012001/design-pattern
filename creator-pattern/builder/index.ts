/**
 * builder pattern dùng để tạo 1 instance mới
 * Lấy ví dụ bên dưới, thay vì khi khởi tạo 1 instance của product phải truyền rất nhiều tham số vào khi new Product()
 * chúng ta có thể từng bước thực hiện khởi tạo instance mới của product=> Làm cho việc khởi tạo 1 instance mới trở nên
 * tường minh rõ ràng hơn
 */

import {
  BrandProduct,
  InforProduct,
  ProductBuilder,
  TypeProduct,
} from "./builder";

const productBuilder = new ProductBuilder();

const product = productBuilder
  .setBrandProduct(new BrandProduct("Thiên Long"))
  .setInforProduct(new InforProduct("Bút bi 027", 3000))
  .setQuantity(10)
  .setTypeProduct(new TypeProduct("Bút bi"))
  .builder();

console.log(product);
