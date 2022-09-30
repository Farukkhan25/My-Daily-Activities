import React, { useEffect, useState } from "react";
import "./Profile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = (props) => {
  const { time } = props.time;
  const notify = () => toast("Wow Activities Completed!");
  let total = 0;
  for (const times of props.time) {
    total = total + times.time;
  }

  const [restTime, setRestTime] = useState([]);
  useEffect(() => {
    const existData = JSON.parse(localStorage.getItem("data"));
    if (existData) {
      setRestTime(existData);
    }
  }, []);

  const handleRestTime = (e) => {
    const newRestTime = e.target.innerText;
    localStorage.setItem("data", JSON.stringify(newRestTime));
    setRestTime(newRestTime);
  };

  return (
    <div className="all-infos">
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
        <button onClick={handleRestTime}>6h</button>
        <button onClick={handleRestTime}>7h</button>
        <button onClick={handleRestTime}>8h</button>
        <button onClick={handleRestTime}>9h</button>
      </div>
      <h3>Activities Details</h3>
      <div className="activities-details">
        <h4>Activities Time</h4>
        <h4>{total} hours</h4>
      </div>
      <div className="activities-details">
        <h4>Rest Time</h4>
        <h4>{restTime}</h4>
      </div>
      <button onClick={notify} className="btn-activity">
        <h2>Activity Completed</h2>
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Profile;
