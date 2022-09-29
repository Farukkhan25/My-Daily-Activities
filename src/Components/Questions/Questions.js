import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="question-container">
      <div className="question">
        <img src="/photos/react.jpg" alt=""></img>
        <div className="activity-info">
          <p className="activity-name">How does react works?</p>

          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes. The declarative view makes your code more
            predictable and easier to debug. A React application is made of
            multiple components, each responsible for rendering a small,
            reusable piece of HTML. Components can be nested within other
            components to allow complex applications to be built out of simple
            building blocks.
          </p>
        </div>
      </div>
      <div className="question">
        <img src="/photos/useEffect.jpg" alt=""></img>
        <div className="activity-info">
          <p className="activity-name">
            What is the use of useEffect in react?
          </p>
          <p>
            The useEffect() is used for causing side effects in functional
            components and it is also capable for handling
            component-Did-Mount(), component-Did-Update() and
            component-Will-Unmount() life-cycle methods of class based
            components into functional component. For example, consider updating
            the document title for a simple counter component to the current
            value. On the initial render, we set the current clicked value to 0
            clicks. So, this section is coded into the componentDidMount()
            method which is executed only once in the component life cycle.
          </p>
        </div>
      </div>
      <div className="question">
        <img src="/photos/props.jpg" alt=""></img>
        <div className="activity-info">
          <p className="activity-name">
            What are the difference between props and state?
          </p>

          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components. Both the props and the state
            decide what data the component will display. The state of one
            component will often become the props of a child component. They are
            simple Javascript objects that will re-render the component every
            time they change. Initially, both the props and the state can have
            default values or receive values from a parent component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
