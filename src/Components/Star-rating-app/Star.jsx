// Import useState hook from react
import { useState } from "react";
// Import FaStar component from react-icons/fa
import { FaStar } from "react-icons/fa";

// Star component that takes noOfStars as props with default value of 5
export const Star = ({ noOfStars = 5 }) => {
  // State for storing the current rating
  const [rating, setRating] = useState(0);
  // State for storing the current hover value
  const [hover, setHover] = useState(0);

  // Function to handle click event and update the rating
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  // Function to handle mouse enter event and update the hover value
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  // Function to handle mouse leave event and reset the hover value to the current rating
  function handleMouseLeave() {
    setHover(rating);
  }

  // Return the JSX for the star rating component
  return (
    <div className="star-rating">
      {/* Heading for the star rating app */}
      <h1>Star-Rating-App</h1>
      {/* Create an array of noOfStars and map through it */}
      {[...Array(noOfStars)].map((_, index) => {
        // Increment index by 1 to start from 1 instead of 0
        index += 1;

        // Return a FaStar component for each star
        return (
          <FaStar
            // Unique key for each star
            key={index}
            // Set className based on hover or rating value
            className={index <= (hover || rating) ? "active" : "inactive"}
            // Call handleClick function on click event
            onClick={() => handleClick(index)}
            // Call handleMouseEnter function on mouse move event
            onMouseMove={() => handleMouseEnter(index)}
            // Call handleMouseLeave function on mouse leave event
            onMouseLeave={() => handleMouseLeave()}
            // Set size of the star
            size={100}
          />
        );
      })}
    </div>
  );
};
