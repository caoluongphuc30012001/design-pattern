/**
 * Đây là pattern phục vụ nhiều observer cùng quan sát 1 subject cụ thể.
 * Và subject đó có thể gửi thông báo cho toàn bộ các observer nào đang quan sát nó.
 */
class Observer {
  private _name: string = "";
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  constructor(name: string) {
    this.name = name;
  }
  public update(): void {
    console.log("update::", this.name);
  }
}

class Subject {
  private listObserver: Observer[] = [];
  constructor() {}

  public attach(observer: Observer): void {
    if (this.listObserver.includes(observer)) {
      console.log("Đã tồn tại");
    } else {
      this.listObserver.push(observer);
    }
  }

  public detach(observer: Observer): void {
    if (this.listObserver.includes(observer)) {
      const index = this.listObserver.indexOf(observer);
      this.listObserver.splice(index, 1);
    } else {
      console.log("Không tồn tại");
    }
  }

  public notify(): void {
    for (const observer of this.listObserver) observer.update();
  }

  public getCountObserver(): number {
    return this.listObserver.length;
  }
}

const subject = new Subject();
const observer1 = new Observer("1");
const observer2 = new Observer("2");
const observer3 = new Observer("3");

subject.attach(observer1);
subject.attach(observer2);
subject.attach(observer3);

subject.notify();

subject.detach(observer1);

subject.notify();
