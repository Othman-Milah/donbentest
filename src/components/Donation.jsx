import React, { useState, useEffect } from "react";
import Figure from "./Figure";

const Donation = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo([
      {
        heading: "Winter Coat",
        description: "provide warm winter to individuals and families in need",
        imagePath:
          "data:image/jpeg;base64,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",
      },
      {
        heading: "Medical Supplies",
        description:
          " fund the distribution of medical supplies in underserved areas",
        imagePath:
          "data:image/jpeg;base64,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",
      },
      {
        heading: "School Supplies",
        description:
          "Support education by providing school supplies to children",
        imagePath:
          "data:image/jpeg;base64,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",
      },
      {
        heading: "Sports Equipment",
        description: "Gently used sports equipment",
        imagePath:
          "https://miro.medium.com/v2/resize:fit:910/1*xO6eVRkgNeHMiM7v8rvvqg.png",
      },
      {
        heading: "Clothing",
        description: "Gently used clothing items",
        imagePath:
          "https://static.vecteezy.com/system/resources/previews/005/411/350/non_2x/donation-box-with-used-clothes-at-home-to-support-help-for-poor-people-in-the-world-free-photo.jpg",
      },
    ]);
  }, []);

  return (
    <div className="cards">
      {info.map((val, index) => (
        <Figure
          heading={val.heading}
          description={val.description}
          imagePath={val.imagePath}
        />
      ))}
    </div>
  );
};

export default Donation;