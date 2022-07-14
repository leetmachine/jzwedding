import * as React from "react";
import { IoMapOutline } from "@react-icons/all-files/io5/IoMapOutline";
import { IoGlobeOutline } from "@react-icons/all-files/io5/IoGlobeOutline";
import {} from "@react-icons/all-files/";

import Head from "../components/Head";

import piggyBackImg from "../images/piggyback1.jpg";

import rioVistaImg from "../images/riovista1.jpeg";
import img1 from "../images/carousel/IMG_0397.jpg";
import img2 from "../images/carousel/IMG_0857.jpg";
import img3 from "../images/carousel/IMG_2855.jpg";
import img4 from "../images/carousel/IMG_2861.jpg";
import img5 from "../images/carousel/IMG_5804.jpg";

import "normalize.css";
import "../styles/app.scss";
import "../styles/header.scss";

const borderStyle = (color) => {
  return { border: `2px solid ${color}` };
};

// markup
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#details">WEDDING DETAILS</a>
        </li>
        <li>
          <a href="#traveling">TRAVELING</a>
        </li>
      </ul>
    </header>
  );
};

const DetailSection = () => {
  return (
    <div id="details" className="sectionContainer">
      <div className="botanicalVectorOne"></div>
      <h1>Wedding Details</h1>
      <div className="twoColumns">
        <div className="column rioVistaColumn">
          <h2>Venue</h2>
          <h3>Rio Vista Wines</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              maxWidth: "80%",
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IoGlobeOutline size={"1.5em"} />
              <a href="http://riovistawines.com">Rio Vista Website</a>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IoMapOutline size={"1.5em"} />
              <span style={{ paddingLeft: "10px" }}>
                24415 SR 97, Chelan, WA 98816
              </span>
            </div>
          </div>
          <p className="rioVistaText">
            Our celebrations will be held at Rio Vista Wines on August 12, 2023.
            The venue is about 10 miles out of Downtown Chelan, or a 15-minute
            drive. There will be parking available onsite for those who choose
            to drive, and we will be sharing information about shuttles as
            details become available.
          </p>
        </div>
        <div className="column">
          <img
            src={rioVistaImg}
            className="rioVistaImg"
            alt="rio vista wines"
          />
        </div>
      </div>
    </div>
  );
};

const TravelingSection = () => {
  return (
    <div
      id="traveling"
      className="sectionContainer parchmentBackground"
      style={{ paddingTop: "220px" }}
    >
      <div className="eucalyptusTwo"></div>
      <h1>Traveling</h1>
      <p>
        We can't wait to show you all the reasons we love Chelan! Our favorite
        little town books up extremely quickly and well in advance, so we
        recommend booking your accommodations as soon as you're able to.
      </p>
      <p>
        There are a ton of options available, most of which can also be found on
        your favorite booking sites (booking.com, expedia.com, etc). We have
        found some of the most budget friendly options to be renting a house in
        the area with friends or family!
      </p>
      <div>
        <h2>Flying In</h2>
        <p>
          For our guests flying in, we recommend flying into Seattle-Tacoma
          International Airport. From there, it is roughly a 3.5-hour drive to
          Lake Chelan.
        </p>

        <p>
          Alternatively, you can fly into Pangborn Memorial Airport in
          Wenatchee. It is roughly a 1-hour drive to Lake Chelan. Note that
          connecting flights between Wenatchee and Seattle are very limited and
          can be tricky to coordinate.
        </p>
      </div>
      <h2>Hotels</h2>
      <div>
        <h3>Campbells Resort</h3>
        <a href="https://campbellsresort.com/">Cambells Resort Website</a>
        <p>
          We will be securing a small block of hotel rooms at Campbell's later
          on this year. If this is the spot that catches your attention, please
          check back on October 1 for discount details.{" "}
        </p>
        <p>
          Fun fact - Jenessa worked at Campbells for one summer in college!{" "}
        </p>
      </div>
      <div>
        <h3>Wapato Point</h3>
        <a href="https://wapatopoint.com/">
          Wapato Point – Resort on Lake Chelan
        </a>
      </div>
      <div>
        <h3>Lakeside Lodge</h3>
        <a href="https://www.lakesidelodgeandsuites.com/?_ga=2.71457232.2139132414.1656561963-311620743.1656561963">
          The Official Website of Lakeside Lodge and Suites at Lake Chelan, WA -
          Lakeside Lodge and Suites
        </a>
        <p>
          *Make sure to mention the Crippen/Gladstone Wedding when booking your
          reservation to receive our block discount (while rooms last!).
        </p>
      </div>
      <div>
        <h3>Grandview On the Lake </h3>
        <a href="https://windermerevacations.com/grandview/">
          Grandview On the Lake | Lake Chelan Hotel & Condo | Waterfront & Pool
          (windermerevacations.com)
        </a>
      </div>

      <h2>Motels</h2>
      <div>
        <h3>Riverwalk Inn & Cafe</h3>
        <a href="https://riverwalkinnchelan.com/">
          River Walk Inn – Inn and Motel and Lake Chelan
          (riverwalkinnchelan.com)
        </a>
      </div>
      <div>
        <h3>Apple Inn Motel</h3>
        <a href="https://appleinnmotel.com/">
          Apple Inn Motel in Lake Chelan – Hotels in Chelan
        </a>
      </div>
      <div>
        <h3>Deep Water Inn</h3>
        <a href="https://deepwaterinn.com/">Deep Water Inn Website</a>
      </div>

      <h2>House Rentals</h2>
      <div>
        <h3>The Lookout</h3>
        <a href="https://chelanlookout.com/renting-at-the-lookout/">
          Renting at the Lookout - The Lookout (chelanlookout.com)
        </a>
        <p>
          Our #1 recommendation! We highly recommend the rental homes available
          in The Lookout. Houses range in accommodations from 2 to 14+ - perfect
          for families or groups wishing to stay together!
        </p>
      </div>
      <div>
        <h3>Vacasa Vacation Rentals </h3>
        <a href="https://www.vacasa.com/usa/Washington/Chelan/">
          Chelan Vacation Rentals, House Rentals, Cabins | Vacasa
        </a>
      </div>
      <div>
        <h3>Worldmark Chelan - Lake House</h3>
        <a href="https://www.tripadvisor.com/Hotel_Review-g58395-d1544680-Reviews-WorldMark_Chelan_Lake_House-Chelan_Washington.html">
          WORLDMARK CHELAN - LAKE HOUSE - Updated 2022 Prices & B&B Reviews (WA)
          (tripadvisor.com)
        </a>
      </div>

      <h2>Camping</h2>
      <div>
        <h3>Lakeshore RV Park</h3>
        <a href="https://cityofchelan.us/departments/parks-recreation/rv-park/">
          Lakeshore RV Park - City of Chelan
        </a>
      </div>
    </div>
  );
};

const MapSection = () => {
  return (
    <div className="sectionContainer reverseParchmentBackground">
      <p>
        We’ve put together this map to show a few different points of interest
        to help you plan, including our venue, where the Gladstone house is, and
        how far down the lake we recommend staying. Click on each pin to see
        details.
      </p>
      <div className="centeredContentContainer">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1OBfjoivIRBO5C0roZVZI7YZL3bLTQac&ehbc=2E312F"
          width="640"
          height="480"
          title="JZ Chelan Interactive Map"
        ></iframe>
      </div>
    </div>
  );
};

const PhotoCollage = () => {
  return (
    <div className="collageContainer">
      <img className="collageItem" height="400px" src={img1} alt="image 1" />
      <img className="collageItem" height="400px" src={img2} alt="image 2" />
      <img className="collageItem" height="400px" src={img3} alt="image 3" />
      <img className="collageItem" height="400px" src={img4} alt="image 4" />
      <img className="collageItem" height="400px" src={img5} alt="image 5" />
    </div>
  );
};

const IndexPage = () => {
  return (
    <>
      <Head />
      <Header />
      <div id="home" className="backgroundImg"></div>
      <main>
        <DetailSection />
        <TravelingSection />
        <MapSection />
        <div className="centeredContentContainer">
          <img width="60%" src={piggyBackImg} alt="piggyback" />
        </div>
        <p>
          We are incredibly excited to share this special celebration in our
          lives with each of you, in one of our favorite places. If you have any
          questions as you begin to plan, please drop us a line at
          jztietheknot2023@gmail.com.
        </p>
        <p>
          We will continue to update this website with more details as they are
          solidified and will send formal invitations closer to.
        </p>
        <PhotoCollage />
      </main>
      <footer style={borderStyle("green")}>
        <p className=".preloadMe">Sites by Keegz</p>
      </footer>
    </>
  );
};

export default IndexPage;
