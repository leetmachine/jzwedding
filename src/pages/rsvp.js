import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import Head from "../components/Head";
import Header from "../components/Header";

import "../styles/form.scss";

const AfterSubmitted = () => (
  <div className="thankYouText">
    <h1>Thank you!</h1>
  </div>
);

const RsvpPage = () => {
  const [form, setForm] = useState({
    "form-name": "rsvpForm",
    firstName: "",
    lastName: "",
    attending: "",
    number: "0",
  });
  const [loading, setIsLoading] = useState(false);
  const [submitted, onSubmitted] = useState(false);

  function onSubmitRsvp(e) {
    e.preventDefault();
    setIsLoading(true);

    console.log(form);

    fetch("/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(form).toString(),
    })
      .then(() => {
        setIsLoading(false);
        onSubmitted(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("oops something went wrong.");
        console.log(err);
      });
  }

  function onChange(target, key) {
    if (key === "attending" && target.value === "no") {
      return setForm({ ...form, [key]: target.value, number: "0" });
    }
    setForm({ ...form, [key]: target.value });
  }

  return (
    <>
      <Head />
      <Header />
      <main className="backgroundImg fixed">
        <div className="contentContainer">
          <div className="mainContent formBox">
            <BeatLoader loading={loading} />
            {submitted ? (
              <AfterSubmitted />
            ) : (
              <div className="formWrapper">
                <h1>RSVP</h1>
                <form
                  name="rsvpForm"
                  method="post"
                  onSubmit={onSubmitRsvp}
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="rsvpForm" />
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={({ target }) => onChange(target, "firstName")}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={({ target }) => onChange(target, "lastName")}
                  />
                  <div className="radioRow">
                    <span>Attending?</span>
                    <label htmlFor="yes">Yes</label>
                    <input
                      type="radio"
                      id="yes"
                      value="yes"
                      checked={form.attending === "yes"}
                      name="attending"
                      onChange={({ target }) => onChange(target, "attending")}
                    />
                    <label htmlFor="no">No</label>
                    <input
                      type="radio"
                      id="no"
                      value="no"
                      checked={form.attending === "no"}
                      name="attending"
                      onChange={({ target }) => onChange(target, "attending")}
                    />
                  </div>
                  {form.attending === "yes" && (
                    <>
                      <label htmlFor="number">Number in Party</label>
                      <span>(Please refer to invite)</span>
                      <select
                        name="number"
                        value={form.number}
                        onChange={({ target }) => onChange(target, "number")}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </>
                  )}
                  <button type="submit">RSVP</button>
                </form>
              </div>
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
