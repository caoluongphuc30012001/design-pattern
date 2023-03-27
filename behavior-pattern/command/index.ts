import { Remote, StartFanCommand, StopFanCommand, User } from "./command";
const user = new User("phuc");
const startFanCommand = new StartFanCommand(user);
const stopFanCommand = new StopFanCommand(user);
const remote = new Remote(startFanCommand, stopFanCommand);

//Bấm nút điều khiển

remote.onStart();
remote.onStop();
