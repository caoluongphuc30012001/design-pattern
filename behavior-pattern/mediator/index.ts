import { Group, User } from "./mediator";

const groupChat = new Group();

const user1 = new User("user1", groupChat);
const user2 = new User("user2", groupChat);
const user3 = new User("user3", groupChat);
const user4 = new User("user4", groupChat);

user1.sendMessage("hello world");
