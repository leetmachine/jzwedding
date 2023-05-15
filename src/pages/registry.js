import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";

import "../styles/registry.scss";

const items = [
  { title: "Flights to Europe", amount: 2000 },
  { title: "Train from London to Brussels", amount: 500 },
  { title: "Wine tasting in France", amount: 300 },
  { title: "Evening canal tour in Amsterdam", amount: 300 },
  { title: "One night at a B&B in Ireland", amount: 250 },
  { title: "One hotel night in Glasgow", amount: 250 },
  { title: "Glasgow distillery tour", amount: 200 },
  { title: "Tickets to a Broadway show in NYC", amount: 150 },
  { title: "Dinner out in Glasgow", amount: 150 },
  { title: "Guiness Factory Tour", amount: 100 },
  { title: "Tickets to European soccer match", amount: 100 },
  { title: "Tickets to the Eiffel Tower", amount: 100 },
  { title: "Morning coffee in Amsterdam", amount: 50 },
  { title: "Drinks on a rooftop patio", amount: 50 },
  { title: "Daily car rental to adventure in Ireland", amount: 50 },
  { title: "A picnic and bottle of wine in Paris", amount: 50 },
  { title: "Tickets to the Louvre", amount: 50 },
  { title: "A couple of pints in Belfast", amount: 20 },
];

const RegistryPage = () => {
  return (
    <>
      <Head />
      <Header />
      <main className="backgroundImg fixed">
        <div className="contentContainer">
          <div className="mainContent">
            <h1>Registry</h1>
            <span>
              Your presence at our wedding is the best gift we could ask for! If
              you’re considering a formal gift, we would be honored if you would
              contribute to our experiences fund. Your generosity will help us
              create unforgettable memories in this next chapter of our lives
              together!
            </span>

            <h2>Canadian Guests:</h2>
            <span>
              Donations can be made via e-transfer to
              jztietheknot2023@gmail.com! Feel free to include an item from
              below in the title so we know exactly what to thank you for!
            </span>

            <h2>US Guests:</h2>
            <span>
              Donations can be made via Zelle Pay to jztietheknot2023@gmail.com!
              It may warn you the account belongs to "Keegan", that is okay, and
              is Jenessa's brother!. Feel free to include an item from below in
              the title so we know exactly what to thank you for!
            </span>

            <h1>Honeymoon Fund!</h1>
            <span style={{ fontStyle: "italic" }}>
              We'll be celebrating this moment in our lives with a one-year
              anniversary trip across Europe in 2024 (Jenessa has an MBA to
              finish first!) While we're still deciding on our final travel
              plans, here are a few things we'd like to do!"
            </span>
            <div className="itemGrid">
              {items.map((item) => (
                <div className="gridItem">
                  <span className="itemTitle">{item.title}</span>
                  <span className="itemAmount">{item.amount}</span>
                </div>
              ))}
            </div>
            <span>
              have questions? shoot us an email at jztietheknot@gmail.com
            </span>
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

export default RegistryPage;
