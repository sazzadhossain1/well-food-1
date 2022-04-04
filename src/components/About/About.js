import React from "react";
import './About.css';

const About = () => {
  return (
    <div>
      <h1 className="about"> About us</h1>
      <div className="great-food">
        <h3>Great Food Comes First</h3>
        <p>
          Every day, more than 11 million guests visit Burger King restaurants
          around the world. And they do so because our restaurants are known for
          serving high-quality, great-tasting, and affordable food. Founded in
          1954, Burger King is the second largest fast food hamburger chain in
          the world. The original Home of the Whopper, our commitment to premium
          ingredients, signature recipes, and family-friendly dining experiences
          is what has defined our brand for more than 50 successful years.
        </p>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <h4>Well Food Corporation</h4>
        <p>Phone Number:XXXXXXXXXXX</p>
      </div>
    </div>
  );
};

export default About;
