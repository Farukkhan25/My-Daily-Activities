import React from "react";
import "./Profile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = (props) => {
  const notify = () => toast("Wow Activities Completed!");
  const { time } = props;

  let total = 0;
  for (const product of time) {
    total = total + product.time;
  }

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
        <button id="rest">5h</button>
        <button>6h</button>
        <button>7h</button>
        <button>8h</button>
      </div>
      <h3>Activities Details</h3>
      <div className="activities-details">
        <h4>Activities Time</h4>
        <h4>{total}</h4>
      </div>
      <div className="activities-details">
        <h4>Rest Time</h4>
        <h4>{6} hours</h4>
      </div>
      <button onClick={notify} className="btn-activity">
        <h2>Activity Completed</h2>
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Profile;
