import React from "react";
import Map from "./Map";
import Footer from "./Footer";

const Location = () => {
  return (
    <div>
      <Map />
      <div className="location-text">
        <h2> Our location</h2>

        <ul>
          <li>
            {" "}
            <h4> 99 King Street</h4>
          </li>
          <li>Newport</li>
          <li> RI 02840</li>
          <li>United States of America</li>
        </ul>
        <p>
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
      <Footer className="orange" />
    </div>
  );
};

export default Location;
