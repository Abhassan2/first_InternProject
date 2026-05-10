import { useState, useEffect } from "react";
import "../src/css/DisplayFeedback.css";
import axios from "axios";

export default function DisplayFeedback({ apiBaseUrl }) {
  const [allFeedback, setAllFeedback] = useState([]);

  const getFeedback = async () => {
    try {
      const response = await axios.get(apiBaseUrl + "/feedback");

      if (response.data.success) {
        setAllFeedback(response.data.feedbacks);
      } else {
        console.log("something error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <div className="container">
      <div className="logfeedback-container">
        <div className="header">
          <h1>Submitted Feedback</h1>
          <p>Below is a list of feedback that has been submitted</p>
        </div>
        <div className="list-feedback">
          <table>
            <thead>
              <tr>
                <th>Sr no.</th>
                <th>Email</th>
                <th>Event</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Feedback</th>
                <th>Submitted on</th>
              </tr>
            </thead>
            <tbody>
              {allFeedback.map((feed, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{feed.email}</td>
                  <td>{feed.event}</td>
                  <td>{feed.name}</td>
                  <td>{feed.rating}</td>
                  <td>{feed.feedback}</td>
                  <td>{feed.submittedOn.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
