import "../css/RatingCard.css";

export default function RatingCard({ extractingRating, useRef }) {

  const handleRating = (e) => {
    const selected = Number(e.target.id);
    extractingRating(selected);

    let children = e.target.parentElement.childNodes;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("rating-cardColor");
    }

    for (let i = 0; i < selected; i++) {
      children[i].classList.add("rating-cardColor");
    }
  };

  return (
    <div className="rating-cards" ref={useRef}>
      <div
        className="rating-card"
        id="1"
        onClick={(e) => handleRating(e)}
      ></div>
      <div
        className="rating-card"
        id="2"
        onClick={(e) => handleRating(e)}
      ></div>
      <div
        className="rating-card"
        id="3"
        onClick={(e) => handleRating(e)}
      ></div>
      <div
        className="rating-card"
        id="4"
        onClick={(e) => handleRating(e)}
      ></div>
      <div
        className="rating-card"
        id="5"
        onClick={(e) => handleRating(e)}
      ></div>
    </div>
  );
}
