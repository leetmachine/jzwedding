import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import Select from "react-select";
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
    attendingCount: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [submitted, onSubmitted] = useState(false);

  function onSubmitRsvp(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new URLSearchParams(form).toString();
    console.log("formData", formData);

    fetch("/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
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
      return setForm({ ...form, [key]: target.value, attendingCount: "0" });
    }
    setForm({ ...form, [key]: target.value });
  }

  const isButtonDisabled = Object.keys(form).find(
    (key) => form[key] === undefined || form[key] === null || form[key] === ""
  );

  return (
    <>
      <Head />
      <Header />
      <main className="backgroundImg fixed">
        <div className="contentContainer" style={{ marginBottom: "10em" }}>
          <div className="mainContent formBox">
            <div className="loader">
              <BeatLoader loading={loading} />
            </div>
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
                  netlify-honeypot="botField"
                >
                  <input
                    name="botField"
                    value={form.botField}
                    onChange={({ target }) => onChange(target, "botField")}
                    style={{ visibility: "hidden", height: 0 }}
                  />
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
                      <label htmlFor="attendingCount">Number in Party</label>
                      <span>(Please refer to your invite)</span>
                      <Select
                        options={[
                          { label: "1", value: "1" },
                          { label: "2", value: "2" },
                          { label: "3", value: "3" },
                          { label: "4", value: "4" },
                          { label: "5", value: "5" },
                          { label: "6", value: "6" },
                        ]}
                        name="attendingCount"
                        onChange={(option) =>
                          onChange(option, "attendingCount")
                        }
                      />
                    </>
                  )}
                  <button
                    type="submit"
                    disabled={isButtonDisabled}
                    className="submitButton"
                  >
                    {isButtonDisabled ? "Please complete the form" : "RSVP"}
                  </button>
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
