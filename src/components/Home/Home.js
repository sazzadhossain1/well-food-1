import React, { useEffect, useState } from "react";
import img from "./image/12-124276_m.jpg";
import "./Home.css";
import SingleReview from "../SingleReview/SingleReview";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("allproducts.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div className="home-component">
        <div className="details-div">
          <h1 className="delivery">Free Home Delivery 24 Hours</h1>
          <h3>THE DELIGHT BURGER </h3>
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

      <div className="review-container">
        <h1>Customer Reviews</h1>
        <div className="customer-reviews">
          {users.slice(0, 3).map((user) => (
            <SingleReview key={user.id} user={user}></SingleReview>
          ))}
        </div>
        <div>
          <Link to='/Reviews'><button className="button">See All Reviews</button></Link>
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;
