import { useEffect, useState } from "react";
import Angela from "../assets/angela-gray.webp";
import Anna from "../assets/anna-kim.webp";
import Jacob from "../assets/jacob-thompson.webp";
import Kimberly from "../assets/kimberly-smith.webp";
import Mark from "../assets/mark-webber.webp";
import Nathan from "../assets/nathan-peterson.webp";
import Rizky from "../assets/rizky-hasanuddin.webp";
import PlayingChess from "../assets/image-chess.webp";
import classes from "./Notification.module.css";

const IMAGES = [Mark, Angela, Jacob, Rizky, Kimberly, Nathan, Anna];

const Notification = (props) => {
  const [isRead, setIsRead] = useState(props.read);
  const markRead = () => {
    if (!isRead) {
      setIsRead(true);
      props.readNotifications > 0 &&
        props.setReadNotifications((prevState) => prevState - 1);
    }
  };
  useEffect(() => {
    props.allRead && setIsRead(true);
  }, [props.allRead]);

  console.log(props.allRead);
  return (
    <div
      className={`${classes.notification} ${!isRead && classes.unread}`}
      onClick={markRead}
    >
      <div className={classes.imageBox}>
        <img src={IMAGES[props.id]} alt="" className={classes.profileImage} />
      </div>
      <div className={classes.textBox}>
        <div className={classes.activityBox}>
          <p className={classes.activity}>
            <span className={classes.name}>{props.name} </span>
            <span className={classes.activityDescription}>
              {props.activity}
            </span>
            {props.subject && (
              <span className={classes.subject}> {props.subject} </span>
            )}
            {!isRead && <span className={classes.redCircle} />}
          </p>
        </div>
        <div className={classes.time}>
          <p>{props.time} ago</p>
        </div>
        {props.message && (
          <div className={classes.messageBox}>
            <p>{props.message}</p>
          </div>
        )}
      </div>
      {props.name === "Kimberly Smith" && (
        <div className={classes.notificationPic}>
          <img src={PlayingChess} alt="Girl playing chess" />
        </div>
      )}
    </div>
  );
};

export default Notification;
