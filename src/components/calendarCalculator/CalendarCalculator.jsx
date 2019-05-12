import React from "react";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarCalculator.css";
import BigCalendar from "react-big-calendar";
import moment from "moment";

const localizer = BigCalendar.momentLocalizer(moment);

class CalendarCalculator extends React.Component {
  render() {
    return (
      <div>
        <BigCalendar
          className="calendarCalculator"
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

export default CalendarCalculator;
