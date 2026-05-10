import { useEffect, useState } from "react";
import "../src/css/Feedback.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function Feedback({ apiBaseUrl }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState();
  const [event, setEvent] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleRating = (e) => {
    setError();
    const selected = Number(e.target.id);
    setRating(selected);

    let lists = e.target.parentElement.childNodes;
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.remove("ratingColor");
    }

    for (let i = 0; i < selected; i++) {
      lists[i].classList.add("ratingColor");
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!rating) {
      return setError("Enter rating");
    }

    try {
      const response = await axios.post(apiBaseUrl + "/feedback", {
        name,
        email,
        event,
        rating,
        comment,
      });

      if (response.data.success) {
        toast.success("successfully submitted");
        setEmail("");
        setName("");
        setComment("");
        setRating();
        setEvent("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="feedback-container">
        <div className="header">
          <h1>Feedback</h1>
          <p>
            We'd love to hear your thoughts, Please fill out the form below to
            submit your feedback.
          </p>
        </div>
        <div className="form-container">
          <form onSubmit={(e) => handleForm(e)}>
            <div className="form-grouped">
              <div className="form-items">
                <label>Event</label>
                <select value={event} onChange={(e) => setEvent(e.target.value)} required>
                  <option value="">Select an event</option>
                  <option required value="Tech Conference">
                    Tech Conference
                  </option>
                  <option required value="Workshop-Web Development">
                    Workshop-Web Development
                  </option>
                  <option required value="Music Festival 2026">
                    Music Festival 2026
                  </option>
                </select>
              </div>
              <div className="form-items">
                <label htmlFor="name">Your Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-items">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  value={email}
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="form-items">
              <label htmlFor="">Rating</label>
              {error && <p>{error}</p>}
              <div className="rating-form">
                <div
                  className="rating"
                  id="1"
                  onClick={(e) => handleRating(e)}
                ></div>
                <div
                  className="rating"
                  id="2"
                  onClick={(e) => handleRating(e)}
                ></div>
                <div
                  className="rating"
                  id="3"
                  onClick={(e) => handleRating(e)}
                ></div>
                <div
                  className="rating"
                  id="4"
                  onClick={(e) => handleRating(e)}
                ></div>
                <div
                  className="rating"
                  id="5"
                  onClick={(e) => handleRating(e)}
                ></div>
              </div>
            </div>
            <div className="form-items">
              <label htmlFor="comment">Comment</label>
              <textarea
                onChange={(e) => setComment(e.target.value)}
                name="comment"
                value={comment}
                rows="4"
                cols="50"
                id="comment"
                placeholder="Share your feedback, suggestions, or comments"
                required
              />
            </div>
            <div className="form-btn">
              <button role="submit">Submit Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
