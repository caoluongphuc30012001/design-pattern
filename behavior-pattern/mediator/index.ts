import { AdminChangeInformationUser } from './mediator';
/**
 * https://viblo.asia/p/mediator-design-pattern-tro-thu-dac-luc-cua-developers-m68Z0jVj5kGß
 */

import { Admin, User } from "./mediator";

const user1 = new User("phuc");

const admin = new Admin<AdminChangeInformationUser>("admin");

const adminChangeInformationUser= new AdminChangeInformationUser();

adminChangeInformationUser.addComponent(admin);
adminChangeInformationUser.addComponent(user1);

admin.changeName(1,'Nghia')

console.log(user1.getName());