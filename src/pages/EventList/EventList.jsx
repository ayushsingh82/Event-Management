import EventCard from '../../components/EventCard/EventCard'
import './EventList.css';
import { eventList } from '../../utils/EventDatabase';

const EventList=()=>{
    const renderEventCards=()=>{
        eventList.map(({id,date,heading,location,img})=>{
            return(
                <EventCard
                    key={id}
                    id={id}
                    date={date}
                    heading={heading}
                    location={location}
                    img={img}
                />
            )
        })
    }
    return(
        <div>
            <h1>Event List</h1>
            <EventCard></EventCard>
        </div>
    )
}

export default EventList