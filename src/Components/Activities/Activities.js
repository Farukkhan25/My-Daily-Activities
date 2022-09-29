import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="all-activities-container">
      <div className="activities-container">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
          ></Activity>
        ))}
      </div>
      <div className="info-container">
        <h4>Info section</h4>
      </div>
    </div>
  );
};

export default Activities;
