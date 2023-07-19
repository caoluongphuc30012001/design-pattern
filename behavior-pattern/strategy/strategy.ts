/**
 * Lớp Ticket đại diện cho một vé, bao gồm tên, giá và chiến lược giảm giá.
 */
export class Ticket {
  private name: string;
  private price: number;
  discountStrategy: DiscountStrategy;

  constructor(name: string, price: number, discountStrategy: DiscountStrategy) {
    this.name = name;
    this.price = price;
    this.discountStrategy = discountStrategy;
  }

  /**
   * Phương thức trả về tên của vé.
   * @returns Tên của vé.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Phương thức thiết lập tên cho vé.
   * @param name Tên mới của vé.
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Phương thức trả về giá của vé.
   * @returns Giá của vé.
   */
  public getPrice(): number {
    return this.price;
  }

  /**
   * Phương thức thiết lập giá cho vé.
   * @param price Giá mới của vé.
   */
  public setPrice(price: number): void {
    this.price = price;
  }

  /**
   * Phương thức thiết lập chiến lược giảm giá cho vé.
   * @param discountStrategy Chiến lược giảm giá mới cho vé.
   */
  public setDiscountStrategy(discountStrategy: DiscountStrategy): void {
    this.discountStrategy = discountStrategy;
  }

  /**
   * Phương thức trả về số tiền được giảm giá của vé.
   * @returns Số tiền được giảm giá của vé.
   */
  getDiscount(): number {
    return this.discountStrategy.getDiscount();
  }
}

/**
 * Interface DiscountStrategy đại diện cho một chiến lược giảm giá.
 */
export interface DiscountStrategy {
  /**
   * Phương thức trả về số tiền được giảm giá.
   * @returns Số tiền được giảm giá.
   */
  getDiscount(): number;
}
