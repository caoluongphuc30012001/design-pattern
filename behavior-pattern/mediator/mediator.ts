abstract class Mediator {
  abstract notify(message: string): void;
  abstract addUser(user: Component): void;
}

abstract class Component {
  abstract sendMessage(message: string): void;
  abstract receiveMessage(message: string): void;
}

export class User extends Component {
  private name: string;
  private group: Mediator;

  constructor(name: string, group: Mediator) {
    super();
    this.name = name;
    this.group = group;
    group.addUser(this);
  }

  sendMessage(message: string): void {
    this.group.notify(message);
  }

  receiveMessage(message: string): void {
    console.log(this.name, message);
  }
}

export class Group extends Mediator {
  listUser: Component[] = [];
  addUser(user: Component): void {
    this.listUser.push(user);
  }

  notify(message: string): void {
    for (let user of this.listUser) {
      user.receiveMessage(message);
    }
  }
}
