import React from "react";
import "./App.css";

import CalendarCalculator from "../calendarCalculator/CalendarCalculator.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CalendarCalculator />
      </div>
    );
  }
}

export default App;
