import React, { useState } from "react";
import Head from "../components/Head";
import Header from "../components/Header";

const FaqsPage = () => {
  const [submitted, onSubmitted] = useState(true);

  function onSubmitRsvp(e) {
    e.preventDefault();

    onSubmitted(true);
  }

  return (
    <>
      <Head />
      <Header />
      <main className="backgroundImg fixed">
        <div className="contentContainer">
          <div className="mainContent">
            <h1>FAQs</h1>
            <h3>What should I wear?</h3>
            <span>
              Join us in celebrating in style with cocktail or garden party
              attire. Note that August in Chelan can get over 100 F, so we
              encourage you to take that into account when finding your perfect
              outfit. Our celebrations will also be taking place on outside on
              grass, so we recommend no stiletto heels.
            </span>
            <h3>Are kids invited?</h3>
            <span>
              We have chosen to make our day adult only to give all of our
              guests, including parents, a night to let loose and celebrate to
              the fullest! We ask that kids only plan to attend if named on your
              invite.
            </span>
            <h3>Can I bring a +1?</h3>
            <span>
              Please only plan to bring a plus one if your invite includes "and
              guest."
            </span>
            <h3>Are there any other events during the weekend?</h3>
            <span>
              We will have an open house at the Gladstone's on Sunday from
              11:30-2pm. You are more than welcome to swing by to say hello and
              enjoy a little hair of the dog.
            </span>
            <h3>When should we RSVP by?</h3>
            <span>
              Please be sure to let us know if you plan to join us or not by
              Friday, June 16 via our wedding website only.
            </span>
            <h3>How do I get to the venue?</h3>
            <span>
              While our venue is a bit out of town, there are multiple ways to
              get there! If you plan to drive yourself, there will be parking
              onsite (please be responsible - no drinking and driving!). If you
              prefer to leave the driving to someone else, we have set up the
              following shuttle schedule for the day:
            </span>
            <h3>What time should I plan to arrive?</h3>
            <span>
              Our ceremony start at 5pm sharp, so we ask all guests plan to
              arrive by 4:30pm.
            </span>
            <h3>Will there be vegan/vegetarian/special diet options?</h3>
            <span>
              Unfortunately not with the menu we've chose for the evening,
              though both dinner and cocktail hour will include a mix of veggie
              and meat dishes.
            </span>
            <h3>Where are you registered?</h3>
            <span>
              Visit the 'Registry' tab on our website for more details. We will
              have a card box on the day, but kindly ask any gifts are shared
              via our website to save extra logistics when we cross the border
              back home.
            </span>
            <h3>
              I still have questions, what is the best way to contact you?
            </h3>
            <span>Shoot us an email at jztietheknot@gmail.com</span>
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

export default FaqsPage;
