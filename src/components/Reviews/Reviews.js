import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import './Reviews.css';

const Reviews = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("allproducts.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      
      <div className="review-component">
        {users.map((user) => (
          <SingleReview key={user.id} user={user}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
