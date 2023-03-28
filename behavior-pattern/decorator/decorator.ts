interface EmployeeComponent {
  getName(): string;
  doTask(): void;
  join(joinDate: Date): void;
  terminate(): void;
}

export class EmployeeConcreteComponent implements EmployeeComponent {
  private name: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  constructor(name: string) {
    this.name = name;
  }

  join(joinDate: Date): void {
    console.log(this.name, "join", joinDate.toDateString());
  }

  doTask(): void {
    console.log(this.name, "do task");
  }

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

export class TeamLeader extends EmployeeDecorator {
  notify(): void {
    console.log(this.employeeComponent.getName(), "notify");
  }
}

export class Manager extends EmployeeDecorator {
  assign(): void {
    console.log(this.employeeComponent.getName(), "assign");
  }
}
