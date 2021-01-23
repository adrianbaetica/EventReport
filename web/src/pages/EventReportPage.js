import React, {useState} from "react";

import './EventReportPage.css';

const EventReportPage = () => {
  const [reportedEvent, setReportedEvent] = useState({});

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert(`Submitting Report`);
  }

  return (
    <div className="report-page">
      <h2> Report an event here: </h2>
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <input type="text" 
                   value={reportedEvent.descripiton} 
                   onChange={e => setReportedEvent(e.target.value)} 
            />
          </label>

          <label>Please select the event's alert code from below: </label>
          <select>
            <option value="earthquake">Fire</option>
            <option value="fire">Earthquake</option>
            <option value="tornado">Tornado</option>
          </select>
          
          <label>Please select the event's tag from below: </label>
          <select>
            <option value="earthquake">Minor</option>
            <option value="fire">Dangerous</option>
            <option value="tornado">Disastrous</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default EventReportPage;
