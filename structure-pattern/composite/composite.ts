/**
 * Giao diện Component định nghĩa các phương thức chung cho các đối tượng FileComposite và FolderComposite.
 */
interface Component {
  /**
   * Phương thức trả về tên của đối tượng.
   * @returns Tên của đối tượng.
   */
  getProperty(): string;
  /**
   * Phương thức tính toán tổng kích thước của đối tượng.
   * @returns Tổng kích thước của đối tượng.
   */
  totalSize(): number;
}

/**
 * Lớp FileComposite đại diện cho một tệp tin.
 */
export class FileComposite implements Component {
  private name: string = "";
  private size: number = 0;
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
  /**
   * Phương thức trả về tên của tệp tin.
   * @returns Tên của tệp tin.
   */
  getProperty(): string {
    return this.name;
  }

  /**
   * Phương thức trả về kích thước của tệp tin.
   * @returns Kích thước của tệp tin.
   */
  totalSize(): number {
    return this.size;
  }
}

/**
 * Lớp FolderComposite đại diện cho một thư mục.
 */
export class FolderComposite implements Component {
  private name: string = "";
  private size: number = 0;
  private children: Component[] = [];

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  /**
   * Phương thức trả về tên của thư mục.
   * @returns Tên của thư mục.
   */
  getProperty(): string {
    return this.name;
  }

  /**
   * Phương thức tính toán tổng kích thước của thư mục và các đối tượng con.
   * @returns Tổng kích thước của thư mục và các đối tượng con.
   */
  totalSize(): number {
    let size = this.size;
    for (let child of this.children) {
      size += child.totalSize();
    }
    return size;
  }

  /**
   * Phương thức thêm một đối tượng con vào thư mục.
   * @param children Đối tượng con cần thêm vào thư mục.
   */
  addChildren(children: Component): void {
    this.children.push(children);
  }

  /**
   * Phương thức xóa một đối tượng con khỏi thư mục.
   * @param children Đối tượng con cần xóa khỏi thư mục.
   */
  removeChildren(children: Component): void {
    const index = this.children.indexOf(children);
    this.children = [
      ...this.children.slice(0, index),
      ...this.children.slice(index + 1),
    ];
  }
}
