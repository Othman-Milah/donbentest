import React from "react";

const Figure = ({ heading, description, imagePath }) => {
  return (
    <main>
      <div class="card">
        <img src={imagePath} alt="" />
        <div class="card-content">
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
      </div>
      <button className="button__getItem">Apply For Donation</button>
    </main>
  );
};

export default Figure;
