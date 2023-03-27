//interface fot Subject
//Realsubject sẽ ủy quyền cho proxy hiện thực và check valid
interface Subject {
  signRegister(client: Client): void;
}

class Leader implements Subject {
  signRegister(client: Client): void {
    console.log("Kí hợp đồng");
  }
}

class ProxyPattern implements Subject {
  subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
  }

  signRegister(client: Client): void {
    if (this.checkValid(client)) {
      this.subject.signRegister(client);
    }
  }

  private checkValid(client: Client): boolean {
    if (client.name === "phuc") return true;
    return false;
  }
}

class Client {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  applyFor(proxy: ProxyPattern): void {
    proxy.signRegister(this);
  }
}

const leader = new Leader();

const thuky = new ProxyPattern(leader);

const developer = new Client("phuc");

developer.applyFor(thuky);
