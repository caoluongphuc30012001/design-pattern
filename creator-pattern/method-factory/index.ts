/**
 * Có nhiều khi chúng ta muốn mỗi khi truyền vào 1 tham số khác nhau sẽ tạo ra các instance khác nhau của các class khác nhau
 * Ví dụ: Khi chúng ta truyền type là book => hàm sẽ trả về 1 instance của class Book, nếu type truyền vào là Toy thì hàm sẽ trả về instance của Toy
 */


/**
 * Interface mô tả các thuộc tính của một sản phẩm
 */
interface Product {
  name: string;
  price: number;
  getInfor():void;
}

/**
 * Lớp ToyProduct và BookProduct định nghĩa các thuộc tính và phương thức của sản phẩm
 */
class ToyProduct implements Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  /**
   * Phương thức in ra thông tin của sản phẩm đồ chơi
   */
  getInfor(): void {
    console.log({
      type: "toy",
      name: this.name,
      price: this.price,
    });
  }
}

class BookProduct implements Product{
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  /**
   * Phương thức in ra thông tin của sản phẩm sách
   */
  getInfor(): void {
    console.log({
      type: "book",
      name: this.name,
      price: this.price,
    });
  }
}

/**
 * Lớp trừu tượng ProductFactory định nghĩa phương thức tạo sản phẩm
 */
abstract class ProductFactory {
  abstract createProduct(name: string, price: number): void;
}

/**
 * Lớp BookFactory kế thừa từ lớp ProductFactory và định nghĩa phương thức tạo sản phẩm sách
 */
class BookFactory extends ProductFactory {
  createProduct(name: string, price: number) {
    return new BookProduct(name, price);
  }
}

/**
 * Lớp ToyFactory kế thừa từ lớp ProductFactory và định nghĩa phương thức tạo sản phẩm đồ chơi
 */
class ToyFactory extends ProductFactory {
  createProduct(name: string, price: number) {
    return new ToyProduct(name, price);
  }
}

/**
 * Lớp Store định nghĩa phương thức tạo sản phẩm dựa trên ProductFactory được truyền vào
 */
class Store {
  private productFactory: ProductFactory;
  constructor(productFactory: ProductFactory) {
    this.productFactory = productFactory;
  }

  /**
   * Phương thức tạo sản phẩm dựa trên ProductFactory được truyền vào
   * @param name Tên sản phẩm
   * @param price Giá sản phẩm
   */
  createProduct(name: string, price: number) {
    return this.productFactory.createProduct(name, price);
  }
}

const bookFactory = new BookFactory();
const toyFactory = new ToyFactory();

const store1 = new Store(bookFactory);
const store2 = new Store(toyFactory);

const book = store1.createProduct("toan 1", 1000);
const toy = store2.createProduct("xe hoi", 1000);

console.log(book,toy)
