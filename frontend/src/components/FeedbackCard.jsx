import "../css/FeedbackCard.css";

export default function FeedbackCard({
  index,
  event,
  email,
  name,
  submittedOn,
  rating,
  comment,
}) {
  return (
    <div className="feedback-card" key={index}>
      <div>{index}</div>
      <div>
        <div>
          <p>{email}</p>
          <p>{event || "No Event Loaded"}</p>
        </div>
        <div>
          <p>Name</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Rating</p>
          <p>&#9734; {rating || 0}</p>
        </div>
        <div>
          <p>SubmittedOn</p>
          <p>{submittedOn}</p>
        </div>
        {comment && (
          <div>
            <p>Comment</p>
            <p>{comment}</p>
          </div>
        )}
      </div>
    </div>
  );
}
