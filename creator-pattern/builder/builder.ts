/**
 * Lớp TypeProduct đại diện cho loại sản phẩm.
 */
export class TypeProduct {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * Lớp InforProduct đại diện cho thông tin sản phẩm.
 */
export class InforProduct {
  name: string;
  price: number;
  yearOfProduce?: string;
  size?: string[];
  color?: string[];

  constructor(
    name: string,
    price: number,
    yearOfProduce?: string,
    size?: string[],
    color?: string[]
  ) {
    this.name = name;
    this.price = price;
    this.yearOfProduce = yearOfProduce;
    this.size = size;
    this.color = color;
  }
}

/**
 * Lớp BrandProduct đại diện cho thương hiệu sản phẩm.
 */
export class BrandProduct {
  country?: string;
  brandName: string;
  constructor(brandName: string, country?: string) {
    this.country = country;
    this.brandName = brandName;
  }
}

/**
 * Lớp Product đại diện cho sản phẩm.
 */
class Product {
  private quantity: number;
  private typeProduct: TypeProduct;
  private inforProduct: InforProduct;
  private brandProduct: BrandProduct;
  constructor(
    quantity: number,
    typeProduct: TypeProduct,
    inforProduct: InforProduct,
    brandProduct: BrandProduct
  ) {
    this.quantity = quantity;
    this.typeProduct = typeProduct;
    this.inforProduct = inforProduct;
    this.brandProduct = brandProduct;
  }
}

/**
 * Lớp ProductBuilder đại diện cho builder của sản phẩm.
 */
export class ProductBuilder {
  private quantity: number = 0;
  private typeProduct: TypeProduct = new TypeProduct("");
  private inforProduct: InforProduct = new InforProduct("", 0);
  private brandProduct: BrandProduct = new BrandProduct("");

  /**
   * Thiết lập loại sản phẩm.
   * @param typeProduct Loại sản phẩm.
   * @returns Trả về đối tượng ProductBuilder.
   */
  setTypeProduct(typeProduct: TypeProduct): ProductBuilder {
    this.typeProduct = typeProduct;
    return this;
  }

  /**
   * Thiết lập thương hiệu sản phẩm.
   * @param brandProduct Thương hiệu sản phẩm.
   * @returns Trả về đối tượng ProductBuilder.
   */
  setBrandProduct(brandProduct: BrandProduct): ProductBuilder {
    this.brandProduct = brandProduct;
    return this;
  }

  /**
   * Thiết lập thông tin sản phẩm.
   * @param inforProduct Thông tin sản phẩm.
   * @returns Trả về đối tượng ProductBuilder.
   */
  setInforProduct(inforProduct: InforProduct): ProductBuilder {
    this.inforProduct = inforProduct;
    return this;
  }

  /**
   * Thiết lập số lượng sản phẩm.
   * @param quantity Số lượng sản phẩm.
   * @returns Trả về đối tượng ProductBuilder.
   */
  setQuantity(quantity: number): ProductBuilder {
    this.quantity = quantity;
    return this;
  }

  /**
   * Xây dựng sản phẩm.
   * @returns Trả về đối tượng Product.
   */
  builder(): Product {
    return new Product(
      this.quantity,
      this.typeProduct,
      this.inforProduct,
      this.brandProduct
    );
  }
}
