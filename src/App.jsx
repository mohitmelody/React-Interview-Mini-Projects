import "./App.css";
import { Accordian } from "./Components/Accordian/Accordian";
import { Git } from "./Components/Github-profile-Finder/Git";
import { Index } from "./Components/Qr-code-generator/Index";
import { Star } from "./Components/Star-rating-app/Star";

function App() {
  return (
    <div>
      <h1>Accordian by react</h1>
      <Accordian />
      <hr />
      <h1>Github Profile Finder</h1>
      <Git />

      <Index />
      <hr />
      <Star noOfStars={10} />
      <hr />
    </div>
  );
}

export default App;
