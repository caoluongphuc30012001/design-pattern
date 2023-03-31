import { Circle, VisitorImpl } from "./visitor";

const visitorImpl = new VisitorImpl();
const circle = new Circle();
circle.accept(visitorImpl);

console.log(circle.constructor.name);
