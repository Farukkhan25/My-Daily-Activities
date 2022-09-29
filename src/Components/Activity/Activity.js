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
        <p>
          <small>Priority: {priority}</small>
        </p>
        <p>Time: {time} hours</p>
      </div>
      <button className="btn-cart">
        <p className="btn-text">Add Activities Time</p>
      </button>
    </div>
  );
};

export default Activity;
