export interface IVisitor {
  visitSquare(square: Square): void;
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
  visit(shape: IShape): void;
}
interface IShape {
  accept(visitor: IVisitor): void;
}

export class Circle implements IShape {
  /**
   * accept ở đấy có nghĩa là chấp nhận. Chấp nhận thàng visitor đến lấy thông tin
   */
  accept(visitor: IVisitor): void {
    visitor.visitCircle(this);
  }

  circle() {
    console.log("circle");
  }
}

export class Square implements IShape {
  accept(visitor: IVisitor): void {
    visitor.visitSquare(this);
  }

  square() {
    console.log("square");
  }
}
export class Rectangle implements IShape {
  accept(visitor: IVisitor): void {
    visitor.visitRectangle(this);
  }

  rectangle() {
    console.log("rectangle");
  }
}

//Khi có thay đổi gì thì chỉ thay đổi code bên trong Visitor chứ ko cần thay đổi trong các class ban đầu
export class VisitorImpl implements IVisitor {
  visitCircle(circle: Circle): void {
    /**
     * Ngay tại đây chúng ta có thể làm bất kỳ thứ gì đối với circle.
     * Có thể sửa dụng toàn bộ những gì đối tượng circle public ra bên ngoài
     */
    circle.circle();
  }

  visitRectangle(rectangle: Rectangle): void {
    rectangle.rectangle();
  }

  visitSquare(square: Square): void {
    square.square();
  }

  visit(shape: IShape): void {
    const visitorMethod = "visit" + shape.constructor.name;
    if (typeof this[visitorMethod] === "function") {
      this[visitorMethod](shape);
    } else {
      console.log("Không có visitor phù hợp");
    }
  }
}
