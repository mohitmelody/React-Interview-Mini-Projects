//single selection
//multiple selection

// Import the useState hook from React
import { useState } from "react";
// Import the data array from Data.js
import data from "./Data.js";

// Define the functional component Index
export const Accordian = () => {
  // Initialize state variable 'selected' to null using useState hook
  const [selected, setSelected] = useState(null);

  // Function to handle single selection of an accordion item
  function handleSingleSelection(getId) {
    // Log the ID of the selected item to the console
    // console.log(getId);
    // Update the 'selected' state based on the selected item's ID
    // If the selected ID is the same as the current selected ID, set 'selected' to null (close the accordion)
    // Otherwise, set 'selected' to the new selected ID (open the accordion)
    setSelected(getId === selected ? null : getId);

  }

  // Log the current value of 'selected' to the console
  console.log(selected);

  // Return the JSX to render the accordion component
  return (
    <div className="wrapper">
      <div className="accordian">
        {/* Check if data exists and has items */}
        {data && data.length > 0 ? (
          // Map over the data array to render each item as an accordion item
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}> {/* Added a key prop for efficient list rendering */}
              <div
                className="tittle"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span></span>
              </div>
              {/* Conditionally render the answer based on the 'selected' state */}
              {selected === dataItem.id ? (
                <div>
                  <h3>{dataItem.answer}</h3>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          // Render a message if no data is found
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
};