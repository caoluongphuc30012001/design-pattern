//Định nghĩa command

interface ICommand {
  excute(): void;
  undo(): void;
}

//Định nghĩa người dùng sẽ nhận tin nhắn thành công từ comman (optional có cũng dc ko có cũng ko sao)

/**
 * Đây là class cho người dùng
 * @param {string} username -> username của người dùng
 */
export class User {
  public username: string;
  constructor(username: string) {
    this.username = username;
  }
}

/**
 * Đây là class cho command khởi động quạt
 * @implements {ICommand}
 * @param {User} user
 */
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


/**
 * Đây là class cho command tắt quạt
 * @implements {ICommand}
 * @param {User} user
 */
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

/**
 * Đây là class cho điều khiển
 * @extends {Invoker}
 * @param {ICommand} startCommand
 * @param {ICommand} stopCommand
 */
export class Remote extends Invoker {
  private startCommand: ICommand;
  private stopCommand: ICommand;
  constructor(startCommand: ICommand, stopCommand: ICommand) {
    super();
    this.startCommand = startCommand;
    this.stopCommand = stopCommand;
  }

  /**
   * Khởi động quạt
   */
  public override onStart(): void {
    this.startCommand.excute();
  }

  /**
   * Tắt quạt
   */
  public override onStop(): void {
    this.stopCommand.excute();
  }
}
