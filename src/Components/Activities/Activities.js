import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Profile from "../Profile/Profile";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const AddActivitiesTime = (activity) => {
    // console.log(activity);
    const newTime = [...time, activity];
    setTime(newTime);
  };

  return (
    <div className="all-activities-container">
      <div className="all-activities">
        <div className="header">
          <img src="./icon.JPG" alt="" />
          <h1 className="text">My Daily Activities</h1>
        </div>

        <div className="activities-container">
          {activities.map((activity) => (
            <Activity
              key={activity.id}
              activity={activity}
              AddActivitiesTime={AddActivitiesTime}
            ></Activity>
          ))}
        </div>
      </div>
      <div className="info-container">
        <Profile time={time}></Profile>
      </div>
    </div>
  );
};

export default Activities;
