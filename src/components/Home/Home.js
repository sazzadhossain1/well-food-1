import React from "react";
import img from "./image/12-124276_m.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-component">
        <div className="details-div">
          <p className="delivery">Free Home Delivery 24 Hours</p>
          <h1>THE DELIGHT BURGER </h1>
          <h2>Your best Food</h2>
          <h5>
            Sink your teeth into a delicious restaurant-style, hamburger recipe
            made from lean beef. Skip the prepackaged patties and take the extra
            time to craft up your own, and that little extra effort will be
            worth it. To make cheeseburgers, about 1 minute before burgers are
            done, top with sliced cheese; continue cooking until cheese begins
            to melt.
          </h5>
        </div>

        <div>
          <img src={img} alt="" />
        </div>
      </div>


      <div className="customer-reviews">
          <h1>Customer Reviews</h1>
      </div>
    </div>
  );
};

export default Home;
