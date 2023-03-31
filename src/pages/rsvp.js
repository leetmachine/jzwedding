import React, { useState } from "react";
import Head from "../components/Head";

import "../styles/rsvp.scss";
import "../styles/header.scss";

const Header = () => (
  <header>
    <ul>
      <li>
        <a href="/">BACK HOME</a>
      </li>
    </ul>
  </header>
);

const AfterSubmitted = () => (
  <div className="thankYouText">
    <span>Thank you!</span>
  </div>
);

const RsvpPage = () => {
  const [submitted, onSubmitted] = useState(true);

  function onSubmitRsvp(e) {
    e.preventDefault();

    onSubmitted(true);
  }

  return (
    <>
      <Head />
      <Header />
      <main className="backgroundImg">
        <div className="rsvpContainer">
          <div className="formContainer">
            {submitted ? (
              <AfterSubmitted />
            ) : (
              <form onSubmit={onSubmitRsvp}>
                <div className="formColumn">
                  <div>
                    <div className="formHeading">
                      <span>RSVP for Zach and Jenessa</span>
                    </div>
                    <div className="formRow">
                      <label>Your First Name</label>
                      <input
                        name="firstName"
                        type="text"
                        className="textInput"
                      />
                    </div>
                    <div className="formRow">
                      <label>Your Last Name</label>
                      <input
                        name="lastName"
                        type="text"
                        className="textInput"
                      />
                    </div>
                    <div className="formRow">
                      <label className="formLabel">Number in Party</label>
                      <select name="number">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                    <div className="formRow attendingBlock">
                      <label className="formLabel">Attending</label>
                      <span className="formLabel">Yes</span>
                      <input name="attending" id="yes" type="radio"></input>
                      <span className="formLabel"></span>
                      <span className="formLabel">No</span>
                      <input name="attending" id="no" type="radio"></input>
                    </div>
                  </div>
                  <button className="submitButton" type="submit">
                    RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <footer>
        <span>&copy; 2022</span>
        <p>vector graphics attributed to their rightful owners</p>
      </footer>
    </>
  );
};

export default RsvpPage;
