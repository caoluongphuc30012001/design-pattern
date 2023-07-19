/**
 * Interface cho Iterator
 */
export interface Iterator<T> {
  /**
   * Trả về đối tượng kế tiếp của Iterator
   * @returns {T}
   */
  next(): T;

  /**
   * Trả về đối tượng hiện tại
   * @returns {T}
   */
  currentItem(): T;

  /**
   * Trả về đối tượng đầu tiên của danh sách
   * @returns {T}
   */
  first(): T;

  /**
   * Reset lại vị trí của Iterator
   */
  rewind(): void;

  /**
   * Trả về true/false -> Iterator đã duyệt hết danh sách hay chưa
   * @returns {boolean}
   */
  isDone(): boolean;
}

/**
 * Class cho interator
 * @implements {Iterator}
 */
export class IteratorConcrete<T> implements Iterator<T> {
  /**
   * @param {T[]} numberCollection
   */
  private numberCollection: T[];

  /**
   * @param {number} position
   */
  private position: number = 0;

  /**
   * Khởi tạo đối tượng
   * @param {T[]} numberCollection 
   */
  constructor(numberCollection: T[]) {
    this.numberCollection = numberCollection;
  }

  next(): T {
    if (this.position < this.numberCollection.length) {
      this.position++;
      return this.numberCollection[this.position];
    } else return this.currentItem();
  }

  currentItem(): T {
    return this.numberCollection[this.position];
  }

  first(): T {
    return this.numberCollection[0];
  }

  rewind(): void {
    this.position = 0;
  }

  isDone(): boolean {
    if (this.position === this.numberCollection.length - 1) return true;
    return false;
  }
}
