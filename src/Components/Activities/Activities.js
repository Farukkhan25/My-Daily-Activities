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
          <Activity key={activity.id} activity={activity}></Activity>
        ))}
      </div>
      <div className="info-container">
        <div className="general-infos">
          <img src="/photos/myphoto.jpg" alt="" />
          <h2>Md. Faruk Khan</h2>
        </div>
        <div className="basic-infos">
          <div className="basic-info">
            <h2>
              63<span>kg</span>
            </h2>
            <h3>Weight</h3>
          </div>
          <div className="basic-info">
            <h2>
              29<span>yrs</span>
            </h2>
            <h3>Age</h3>
          </div>
          <div className="basic-info">
            <h2>
              5.7<span>feet</span>
            </h2>
            <h3>Height</h3>
          </div>
        </div>
        <h3>Add Rest Hours</h3>
        <div className="rest-hours">
          <p>5h</p>
          <p>6h</p>
          <p>7h</p>
          <p>8h</p>
        </div>
        <h3>Activities Details</h3>
        <div className="activities-details">
          <h4>Activities Time</h4>
          <h4>20 hours</h4>
        </div>
        <div className="activities-details">
          <h4>Rest Time</h4>
          <h4>6 hours</h4>
        </div>
        <button className="btn-activity">
          <h2>Activity Completed</h2>
        </button>
      </div>
    </div>
  );
};

export default Activities;
