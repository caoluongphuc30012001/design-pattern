/**
 * Lớp AccountService cung cấp thông tin tài khoản.
 */
class AccountService {
  public getAccount() {
    console.log("Thông tin tài khoản");
  }
}

/**
 * Lớp PaymentService cung cấp các phương thức thanh toán.
 */
class PaymentService {
  public paymentByPaypal() {
    console.log("Thanh toán bằng PayPal");
  }

  public paymentByCreditCard() {
    console.log("Thanh toán bằng thẻ tín dụng");
  }

  public paymentByCash() {
    console.log("Thanh toán bằng tiền mặt");
  }
}

/**
 * Lớp ShippingService cung cấp các phương thức vận chuyển.
 */
class ShippingService {
  public freeShipping() {
    console.log("Vận chuyển miễn phí");
  }

  public standardShipping() {
    console.log("Vận chuyển tiêu chuẩn");
  }

  public expressShipping() {
    console.log("Vận chuyển nhanh");
  }
}

/**
 * Lớp Facade cung cấp các phương thức đơn giản để sử dụng các dịch vụ của AccountService, PaymentService và ShippingService.
 */
export class Facade {
  private static instance: Facade;
  private accountService: AccountService;
  private paymentService: PaymentService;
  private shippingService: ShippingService;

  constructor() {
    this.accountService = new AccountService();
    this.paymentService = new PaymentService();
    this.shippingService = new ShippingService();
  }
  
  /**
   * Phương thức getInstance trả về một instance của lớp Facade.
   * @returns instance của lớp Facade.
   */
  public static getInstance() {
    if (!Facade.instance) Facade.instance = new Facade();
    return Facade.instance;
  }

  //handle FACADE

  /**
   * Phương thức getAccountInformation sử dụng AccountService để lấy thông tin tài khoản.
   */
  public getAccountInformation() {
    this.accountService.getAccount();
  }

  /**
   * Phương thức freeShipPayingByCredit sử dụng ShippingService để vận chuyển miễn phí và PaymentService để thanh toán bằng thẻ tín dụng.
   */
  public freeShipPayingByCredit() {
    this.shippingService.freeShipping();
    this.paymentService.paymentByCreditCard();
  }

  /**
   * Phương thức expressShipPayingByCash sử dụng ShippingService để vận chuyển nhanh và PaymentService để thanh toán bằng tiền mặt.
   */
  public expressShipPayingByCash() {
    this.shippingService.expressShipping();
    this.paymentService.paymentByCash();
  }
}
