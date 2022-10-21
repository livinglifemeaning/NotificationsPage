import { useState } from "react";
import Notification from "./Notification";
import notifications from "../assets/data.json";
import classes from "./Notifications.module.css";

const Notifications = () => {
  let [allRead, setAllRead] = useState(false); 
  let [readNotifications, setReadNotifications] = useState(3)
  const markAllRead = () => {
    setAllRead(true); 
    setReadNotifications(0)
  }
  return (
    <div className={classes.notifications}>
      <div className={classes.head}>
        <div>
          <p className={classes.title}>Notifications</p>
          <div className={classes.unreadNotifications}>{readNotifications}</div>
        </div>
        <p className={classes.markRead} onClick={markAllRead}>
          Mark all as read
        </p>
      </div>
      {notifications.map((n, index) => {
        return <Notification {...n} id={index} key={n.name} read={allRead ? true : n.read} readNotifications={readNotifications} setReadNotifications={setReadNotifications} allRead={allRead}/>;
      })}
    </div>
  );
};

export default Notifications;
