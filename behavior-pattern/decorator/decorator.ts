
interface EmployeeComponent {
  getName(): string;
  doTask(): void;
  join(joinDate: Date): void;
  terminate(): void;
}

/**
 * Class cho nhân viên
 * @param {string} name
 */
export class Employee implements EmployeeComponent {
  private name: string;

  /**
   * Get name của nhân viên
   * @returns {string} name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Set name của nhân viên
   * @param {string}name 
   */
  public setName(name: string): void {
    this.name = name;
  }

  constructor(name: string) {
    this.name = name;
  }

  /**
   * Tham gia ngày?
   * @param {Date} joinDate 
   */
  join(joinDate: Date): void {
    console.log(this.name, "join", joinDate.toDateString());
  }

  /**
   * Đang làm task nào
   */
  doTask(): void {
    console.log(this.name, "do task");
  }

  /**
   * Terminate
   */
  terminate(): void {
    console.log(this.name, "terminate");
  }
}

class EmployeeDecorator implements EmployeeComponent {
  protected employeeComponent: EmployeeComponent;
  constructor(employeeComponent: EmployeeComponent) {
    this.employeeComponent = employeeComponent;
  }

  getName(): string {
    return this.employeeComponent.getName();
  }

  join(joinDate: Date): void {
    this.employeeComponent.join(joinDate);
  }

  terminate(): void {
    this.employeeComponent.terminate();
  }

  doTask(): void {
    this.employeeComponent.doTask();
  }
}
/**
 * Class cho leader
 */
export class TeamLeader extends EmployeeDecorator {
  /**
   * Thông báo
   */
  notify(): void {
    console.log(this.employeeComponent.getName(), "notify");
  }
}

export class Manager extends EmployeeDecorator {
  /**
   * Assign task
   */
  assign(): void {
    console.log(this.employeeComponent.getName(), "assign");
  }
}
