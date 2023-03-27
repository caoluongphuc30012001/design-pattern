/**
 * Có nhiều khi chúng ta muốn mỗi khi truyền vào 1 tham số khác nhau sẽ tạo ra các instance khác nhau của các class khác nhau
 * Ví dụ: Khi chúng ta truyền type là book => hàm sẽ trả về 1 instance của class Book, nếu type truyền vào là Toy thì hàm sẽ trả về instance của Toy
 */

interface Product {
  name: string;
  price: number;
}

abstract class ProductFactory {
  abstract createProduct(name: string, price: number): void;
}

class BookFactory extends ProductFactory {
  createProduct(name: string, price: number) {
    console.log({
      type: "book",
      name,
      price,
    });
  }
}

class ToyFactory extends ProductFactory {
  createProduct(name: string, price: number) {
    console.log({
      type: "toy",
      name,
      price,
    });
  }
}

class Store {
  private productFactory: ProductFactory;
  constructor(productFactory: ProductFactory) {
    this.productFactory = productFactory;
  }

  createProduct(name: string, price: number) {
    return this.productFactory.createProduct(name, price);
  }
}

const bookFactory = new BookFactory();
const toyFactory = new ToyFactory();

const store1 = new Store(bookFactory);
const store2 = new Store(toyFactory);

store1.createProduct("toan 1", 1000);
store2.createProduct("xe hoi", 1000);
