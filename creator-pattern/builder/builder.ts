export class TypeProduct {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

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

export class BrandProduct {
  country?: string;
  brandName: string;
  constructor(brandName: string, country?: string) {
    this.country = country;
    this.brandName = brandName;
  }
}

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

export class ProductBuilder {
  private quantity: number = 0;
  private typeProduct: TypeProduct = new TypeProduct("");
  private inforProduct: InforProduct = new InforProduct("", 0);
  private brandProduct: BrandProduct = new BrandProduct("");
  setTypeProduct(typeProduct: TypeProduct): ProductBuilder {
    this.typeProduct = typeProduct;
    return this;
  }

  setBrandProduct(brandProduct: BrandProduct): ProductBuilder {
    this.brandProduct = brandProduct;
    return this;
  }

  setInforProduct(inforProduct: InforProduct): ProductBuilder {
    this.inforProduct = inforProduct;
    return this;
  }

  setQuantity(quantity: number): ProductBuilder {
    this.quantity = quantity;
    return this;
  }

  builder(): Product {
    return new Product(
      this.quantity,
      this.typeProduct,
      this.inforProduct,
      this.brandProduct
    );
  }
}
