import { IteratorConcrete, Iterator } from "./iterator";

interface Aggregator<T> {
  getIterator(): Iterator<T>;
}
class NumberCollection implements Aggregator<number> {
  private numberCollection: number[] = [];

  getIterator(): Iterator<number> {
    return new IteratorConcrete<number>(this.getItems());
  }

  getItems(): number[] {
    return this.numberCollection;
  }

  addItem(...args: number[]): void {
    this.numberCollection.push(...args);
  }
}

const numberCollection = new NumberCollection();

numberCollection.addItem(1, 2, 3, 4, 5, 6, 7);

const iterator = numberCollection.getIterator();

while (!iterator.isDone()) {
  console.log(iterator.currentItem());
  iterator.next();
}

iterator.rewind();

console.log(iterator.currentItem());
