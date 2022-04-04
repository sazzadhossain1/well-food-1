import React from "react";
import "./SingleReview.css";

const SingleReview = (props) => {
  const { name, review, rating, image } = props.user;
  return (
    <div>
      <div className="user-review-container">
        <img src={image} alt="" />
        <h2>Name:{name}</h2>
        <h4>Review: {review}</h4>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default SingleReview;
