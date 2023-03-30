interface Component {
  getProperty(): string;
  totalSize(): number;
}

export class FileComposite implements Component {
  private name: string = "";
  private size: number = 0;
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
  getProperty(): string {
    return this.name;
  }

  totalSize(): number {
    return this.size;
  }
}

export class FolderComposite implements Component {
  private name: string = "";
  private size: number = 0;
  private children: Component[] = [];

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  getProperty(): string {
    return this.name;
  }

  totalSize(): number {
    let size = this.size;
    for (let child of this.children) {
      size += child.totalSize();
    }
    return size;
  }

  addChildren(children: Component): void {
    this.children.push(children);
  }

  removeChildren(children: Component): void {
    const index = this.children.indexOf(children);
    this.children = [
      ...this.children.slice(0, index),
      ...this.children.slice(index + 1),
    ];
  }
}
