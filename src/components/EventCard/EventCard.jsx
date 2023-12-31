const EventCard=({id,heading,date,location,img})=>{
    const {year,month}=date;
    return (
          <>
        <div>
            <h3>{heading}</h3>
            <p>
                <span>Year:{year}</span>
                <span>Month:{month}</span>
            </p>
            <p>{location}</p>
        </div>
        <div>
              <img src={img}></img>
            </div>
            </>
    )
}

export default EventCard;