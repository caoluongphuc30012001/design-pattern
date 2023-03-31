export interface Iterator<T> {
  next(): T;
  currentItem(): T;
  first(): T;
  rewind(): void;
  isDone(): boolean;
}

export class IteratorConcrete<T> implements Iterator<T> {
  private numberCollection: T[];

  private position: number = 0;
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
