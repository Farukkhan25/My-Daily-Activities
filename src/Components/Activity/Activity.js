import React from "react";
import "./Activity.css";

const Activity = ({ activity, AddActivitiesTime }) => {
  const { name, picture, priority, time, description } = activity;

  return (
    <div className="activity">
      <img src={picture} alt=""></img>
      <div className="activity-info">
        <p className="activity-name">{name}</p>
        <p>
          <small>{description}</small>
        </p>
        <p>Priority: {priority}</p>
        <p className="activity-time">Time: {time} hours</p>
      </div>
      <button onClick={() => AddActivitiesTime(activity)} className="btn-cart">
        <p className="btn-text">Add Activities Time</p>
      </button>
    </div>
  );
};

export default Activity;
