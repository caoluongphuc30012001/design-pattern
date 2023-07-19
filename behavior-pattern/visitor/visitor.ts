/**
 * Interface IVisitor định nghĩa các phương thức visit cho từng loại hình học.
 * Interface này được sử dụng để thực hiện Visitor Pattern.
 */
export interface IVisitor {
  visitSquare(square: Square): void;
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
  visit(shape: IShape): void;
}

/**
 * Interface IShape định nghĩa phương thức accept để chấp nhận một visitor.
 */
interface IShape {
  accept(visitor: IVisitor): void;
}

/**
 * Lớp Circle là một hình tròn và implements interface IShape.
 */
export class Circle implements IShape {
  /**
   * Phương thức accept chấp nhận một visitor và gọi phương thức visitCircle của visitor đó.
   * @param visitor - visitor được chấp nhận.
   */
  accept(visitor: IVisitor): void {
    visitor.visitCircle(this);
  }

  /**
   * Phương thức circle in ra "circle".
   */
  circle() {
    console.log("circle");
  }
}

/**
 * Lớp Square là một hình vuông và implements interface IShape.
 */
export class Square implements IShape {
  /**
   * Phương thức accept chấp nhận một visitor và gọi phương thức visitSquare của visitor đó.
   * @param visitor - visitor được chấp nhận.
   */
  accept(visitor: IVisitor): void {
    visitor.visitSquare(this);
  }

  /**
   * Phương thức square in ra "square".
   */
  square() {
    console.log("square");
  }
}

/**
 * Lớp Rectangle là một hình chữ nhật và implements interface IShape.
 */
export class Rectangle implements IShape {
  /**
   * Phương thức accept chấp nhận một visitor và gọi phương thức visitRectangle của visitor đó.
   * @param visitor - visitor được chấp nhận.
   */
  accept(visitor: IVisitor): void {
    visitor.visitRectangle(this);
  }

  /**
   * Phương thức rectangle in ra "rectangle".
   */
  rectangle() {
    console.log("rectangle");
  }
}

/**
 * Lớp VisitorImpl implements interface IVisitor và định nghĩa các phương thức visit cho từng loại hình học.
 * Lớp này được sử dụng để thực hiện Visitor Pattern.
 */
export class VisitorImpl implements IVisitor {
  /**
   * Phương thức visitCircle được sử dụng để thực hiện các thao tác trên đối tượng Circle.
   * @param circle - đối tượng Circle được truyền vào.
   */
  visitCircle(circle: Circle): void {
    /**
     * Ngay tại đây chúng ta có thể làm bất kỳ thứ gì đối với circle.
     * Có thể sử dụng toàn bộ những gì đối tượng circle public ra bên ngoài
     */
    circle.circle();
  }

  /**
   * Phương thức visitRectangle được sử dụng để thực hiện các thao tác trên đối tượng Rectangle.
   * @param rectangle - đối tượng Rectangle được truyền vào.
   */
  visitRectangle(rectangle: Rectangle): void {
    rectangle.rectangle();
  }

  /**
   * Phương thức visitSquare được sử dụng để thực hiện các thao tác trên đối tượng Square.
   * @param square - đối tượng Square được truyền vào.
   */
  visitSquare(square: Square): void {
    square.square();
  }

  /**
   * Phương thức visit được sử dụng để chấp nhận một đối tượng IShape và gọi phương thức visit tương ứng.
   * @param shape - đối tượng IShape được chấp nhận.
   */
  visit(shape: IShape): void {
    const visitorMethod = "visit" + shape.constructor.name;
    if (typeof this[visitorMethod] === "function") {
      this[visitorMethod](shape);
    } else {
      console.log("Không có visitor phù hợp");
    }
  }
}
