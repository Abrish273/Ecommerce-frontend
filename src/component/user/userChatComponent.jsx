import React from "react";
import "../../chat.css";

const userChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat - Online</h6>
        </div>
        <div className="chat-form">
          <div className="cht-msg">
            {Array.from({ length: 20 }).map((_, id) => (
              <div key={id}>
                <p>
                  You wrote: <b>Hello world! This is a toast message</b>
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote: </b> Hello World! This is a toast response
                </p>
              </div>
            ))}
          </div>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          ></textarea>
          <button className="btn btn-success btn-block">Submit</button>
        </div>
      </div>
    </>
  );
};

export default userChatComponent;
