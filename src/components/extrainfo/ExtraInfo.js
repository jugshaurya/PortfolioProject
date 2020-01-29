import React from "react";
import "./ExtraInfo.scss";

const ExtraInfo = () => {
  return (
    <div className="extra-info">
      <div className="container">
        <h3>
          Hello<span>!</span> I<span>'</span>m Shaurya<span>.</span>
        </h3>
        <p className="break-words">
          ​ I'm a Full Stack Developer primarily focusing on the stack consist
          of React, MongoDB, Node, Express and I primarily used Python as my
          goto language to code but later on started with Javascript. why?
          because I love the default functional programming Paradigm of the
          Javascript, which leads me to write clean code and maintain the purity
          of code.
        </p>
        <p className="break-words last">
          I enjoy building Web Applications which would helps the people around
          me to see a new insight into the world; whether it is figuring out the
          data and deriving a new concept out of it, or to build a already
          existing app that is changing the world, I enjoy all kinds of building
          and solving the problems that comes with the app.
        </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
