import { NavLink } from "react-router-dom";
import "../src/css/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home({ apiBaseUrl }) {
  const [welcomeMsg, setWelcomeMsg] = useState();

  const getHome = async () => {
    try {
      const response = await axios.get(apiBaseUrl + "/home");
      if (response.data.success) {
        setWelcomeMsg(response.data.message);
      } else {
        console.log("something error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getHome();
  }, []);
  return (
    <div className="container">
      <div className="home-container">
        <div>
          <h1>{welcomeMsg}</h1>
          <p>
            We value your feedback, Our system helps collect attendee opinions
            and suggestions to improve future events and create better
            experiences for everyone
          </p>
          <NavLink to="/events">Explore Events</NavLink>
        </div>
        <div>
          <img src="/feedbackboard_img2.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
