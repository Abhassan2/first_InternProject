import EventCard from "../src/components/EventCard.jsx";
import "../src/css/Event.css";

export default function Event() {
  return (
    <div className="container">
      <div className="event-container">
        <div>
          <h1>Events</h1>
          <p>
            Browse our upcoming and past events. We look forward to your
            participation.
          </p>
        </div>
        <div className="event-cards">
          <EventCard
            imgUrl={"/techConference_img.webp"}
            title={"Tech Conference"}
            date={"April 30, 2026"}
            location={"Greater Noida, New Delhi"}
            description={
              "An annual conference bringing together tech leaders and innovators"
            }
          />
          <EventCard
            imgUrl={"/workshop_img.jpg"}
            title={"Workshop-Web Development"}
            date={"April 30, 2026"}
            location={"Greater Noida, New Delhi"}
            description={
              "An annual conference bringing together tech leaders and innovators"
            }
          />
          <EventCard
            imgUrl={"/musicfestival_img.jpg"}
            title={"Music Festival 2026"}
            date={"April 30, 2026"}
            location={"Greater Noida, New Delhi"}
            description={
              "An annual conference bringing together tech leaders and innovators"
            }
          />

          <EventCard
            imgUrl={"/techConference_img.webp"}
            title={"Tech Conference"}
            date={"April 30, 2026"}
            location={"Greater Noida, New Delhi"}
            description={
              "An annual conference bringing together tech leaders and innovators"
            }
          />
          <EventCard
            imgUrl={"/workshop_img.jpg"}
            title={"Workshop-Web Development"}
            date={"April 30, 2026"}
            location={"Greater Noida, New Delhi"}
            description={
              "An annual conference bringing together tech leaders and innovators"
            }
          />
          <EventCard
            imgUrl={"/musicfestival_img.jpg"}
            title={"Music Festival 2026"}
            date={"April 30, 2026"}
            location={"Greater Noida, New Delhi"}
            description={
              "An annual conference bringing together tech leaders and innovators"
            }
          />
          
        </div>
      </div>
    </div>
  );
}
