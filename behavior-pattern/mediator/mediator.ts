class Component{
  protected mediator: Mediator;
  setMediator(mediator: Mediator):void{
    this.mediator = mediator
  }

  constructor(){}
}

abstract class Mediator{
  abstract excute(agrs: any):void
  abstract addComponent(component: Component):void;
}

/**
 * Đây là class cho User
 */
export class User extends Component {
  /**
   * @param {string} name
   */
  private name: string

  constructor(name: string){
    super();
    this.name = name
  }
  /**
   * Lấy tên người dùng
   * @returns {string}name
   */
  getName(): string{
    return this.name
  }

  /**
   * Set tên người dùng
   * @param name 
   */
  setName(name: string): void{
    this.name= name
  }

  /**
   * Set mediator
   * @param mediator 
   */
  setMediator(mediator:Mediator){
    this.mediator = mediator
  }
}

export class Admin<T extends Mediator> extends User {
  protected mediator: T;
  changeName(index: number,name: string){
    this.mediator.excute([index,name]);
  }
}

export class AdminChangeInformationUser implements Mediator{
  private listUser: User[]

  constructor() {
    this.listUser = [];
  }

  addComponent(user: User): void {
    this.listUser = [...this.listUser,user]
    user.setMediator(this);
  }

  excute(agrs: [number, string]): void {
    this.listUser[agrs[0]].setName(agrs[1]);
  }
}