import { NavLink } from "react-router-dom";


export default function EventCard({imgUrl, title, date, location, description}) {
  return (
    <div className='card'>
        <div>
            <img src={imgUrl} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{location}</p>
            <p>An annual conference bringing together tech leaders and innovators</p>
            <button type="submit"><NavLink to="/feedback">Submit Feddback</NavLink></button>
        </div>
    </div>
  )
}
