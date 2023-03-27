export class Ticket {
  private name: string;
  private price: number;
  discountStrategy: DiscountStrategy;

  constructor(name: string, price: number, discountStrategy: DiscountStrategy) {
    this.name = name;
    this.price = price;
    this.discountStrategy = discountStrategy;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public setDiscountStrategy(discountStrategy: DiscountStrategy): void {
    this.discountStrategy = discountStrategy;
  }

  getDiscount(): number {
    return this.discountStrategy.getDiscount();
  }
}

export interface DiscountStrategy {
  getDiscount(): number;
}
