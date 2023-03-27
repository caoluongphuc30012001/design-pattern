class AccountService {
  public getAccount() {
    console.log("Account information");
  }
}

class PaymentService {
  public paymentByPaypal() {
    console.log("Payment by PayPal");
  }

  public paymentByCreditCard() {
    console.log("Payment by Credit Card");
  }

  public paymentByCash() {
    console.log("Payment by Cash");
  }
}

class ShippingService {
  public freeShipping() {
    console.log("Free Shipping");
  }

  public standardShipping() {
    console.log("Standard Shipping");
  }

  public expressShipping() {
    console.log("Express Shipping");
  }
}

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
  public static getInstance() {
    if (!Facade.instance) Facade.instance = new Facade();
    return Facade.instance;
  }

  //handle FACADE

  public getAccountInformation() {
    this.accountService.getAccount();
  }

  public freeShipPayingByCredit() {
    this.shippingService.freeShipping();
    this.paymentService.paymentByCreditCard();
  }

  public expressShipPayingByCash() {
    this.shippingService.expressShipping();
    this.paymentService.paymentByCash();
  }
}
