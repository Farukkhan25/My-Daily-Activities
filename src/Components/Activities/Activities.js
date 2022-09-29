import React, { useEffect, useState } from "react";
import { addToDb } from "../../Utilities/fakedb";
import Activity from "../Activity/Activity";
import Profile from "../Profile/Profile";
import Questions from "../Questions/Questions";
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
        // addToDb(activity.id);
    }
    
    // const AddToLocalStorage = (activity) => {
    //     addToDb(id.innerText);
    // }

    return (
      <div className="all-activities-container">
        <div className="activities-container">
          {activities.map((activity) => (
            <Activity
              key={activity.id}
              activity={activity}
              AddActivitiesTime={AddActivitiesTime}
            ></Activity>
          ))}
        </div>

        <div className="info-container">
          <Profile time={time} ></Profile>
        </div>
      </div>
    );
};

export default Activities;
