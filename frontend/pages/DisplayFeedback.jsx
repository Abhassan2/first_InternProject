import { useState, useEffect } from "react";
import "../src/css/DisplayFeedback.css";
import axios from "axios";
import FeedbackCard from "../src/components/FeedbackCard";

export default function DisplayFeedback({ apiBaseUrl }) {
  const [allFeedback, setAllFeedback] = useState([]);
  const [browserWidth, setBrowserWidth] = useState();

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

  function checkViewport() {
    if (window.innerWidth < 600) {
      setBrowserWidth(window.innerWidth);
    } else {
      setBrowserWidth(undefined);
    }
  }
  console.log(browserWidth);

  useEffect(() => {
    window.addEventListener("resize", checkViewport);
    getFeedback();
    checkViewport();
  }, [browserWidth]);

  return (
    <div className="container">
      <div className="logfeedback-container">
        <div className="header">
          <h1>Submitted Feedback</h1>
          <p>Below is a list of feedback that has been submitted</p>
        </div>
        <div className="list-feedback">
          {allFeedback.map(
            (feed, index) =>
              browserWidth !== undefined ? (
                <FeedbackCard
                  key={index + 1}
                  index={index + 1}
                  email={feed.email}
                  event={feed.event}
                  name={feed.name}
                  rating={feed.rating}
                  submittedOn={feed.submittedOn.split("T")[0]}
                />
              )
              :(
                <FeedbackCard
                  key={index + 1}
                  index={index + 1}
                  comment={feed.feedback}
                  email={feed.email}
                  event={feed.event}
                  name={feed.name}
                  rating={feed.rating}
                  submittedOn={feed.submittedOn.split("T")[0]}
                />
              )              
          )}

          {/* {allFeedback.map(
            (feed, index) =>
              browserWidth && (
                <FeedbackCard
                  key={index + 1}
                  index={index + 1}
                  comment={feed.feedback}
                  email={feed.email}
                  event={feed.event}
                  name={feed.name}
                  rating={feed.rating}
                  submittedOn={feed.submittedOn.split("T")[0]}
                />
              )
          )} */}
        </div>
      </div>
    </div>
  );
}
