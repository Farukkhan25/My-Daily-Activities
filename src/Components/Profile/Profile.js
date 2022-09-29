import React from 'react';
import "./Profile.css";

const Profile = (props) => {
    const { time } = props;
    let total = 0;
    for (const product of time) {
        total = total + product.time;
    }
    console.log(props);

    return (
      <div>
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
          <h4>{total}</h4>
        </div>
        <div className="activities-details">
          <h4>Rest Time</h4>
          <h4>6 hours</h4>
        </div>
        <button className="btn-activity">
          <h2>Activity Completed</h2>
        </button>
      </div>
    );
};

export default Profile;