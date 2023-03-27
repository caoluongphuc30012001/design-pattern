//Định nghĩa command

interface ICommand {
  excute(): void;
  undo(): void;
}

//Định nghĩa người dùng sẽ nhận tin nhắn thành công từ comman (optional có cũng dc ko có cũng ko sao)

export class User {
  public username: string;
  constructor(username: string) {
    this.username = username;
  }
}
export class StartFanCommand implements ICommand {
  private user: User;
  constructor(user: User) {
    this.user = user;
  }

  excute(): void {
    console.log("Start fan", this.user.username);
  }
  undo(): void {
    console.log("Undo start fan", this.user.username);
  }
}

export class StopFanCommand implements ICommand {
  private user: User;
  constructor(user: User) {
    this.user = user;
  }
  excute(): void {
    console.log("Stop fan", this.user.username);
  }

  undo(): void {
    console.log("Undo start fan", this.user.username);
  }
}

//Định nghĩa Điều khiển (Ivoker)

abstract class Invoker {
  public abstract onStart(): void;
  public abstract onStop(): void;
}

export class Remote extends Invoker {
  private startCommand: ICommand;
  private stopCommand: ICommand;
  constructor(startCommand: ICommand, stopCommand: ICommand) {
    super();
    this.startCommand = startCommand;
    this.stopCommand = stopCommand;
  }

  public override onStart(): void {
    this.startCommand.excute();
  }

  public override onStop(): void {
    this.stopCommand.excute();
  }
}
