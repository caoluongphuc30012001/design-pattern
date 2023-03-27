/**
 * Cung cấp 1 class có các field là các instance của các class khác nhau.
 * Và hàm của class Facade sẽ chứa nhiều logic phức tạp của các instance khác.
 * Cung cấp các hàm dễ sử dụng cho người dùng
 */
import { Facade } from "./facade";
const shoppingService = Facade.getInstance();

shoppingService.getAccountInformation();
console.log("-------------------------------------------------");
shoppingService.expressShipPayingByCash();
console.log("-------------------------------------------------");
shoppingService.freeShipPayingByCredit();
