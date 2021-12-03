import React, {useState} from 'react';
import {BsClock, BsFillCalendarEventFill, GoLocation} from "react-icons/all";
import AccordionBody from "react-bootstrap/AccordionBody";

const icon = {
    fontSize: "20px",
    marginRight: "10px"
}

const gigsList = {
    padding: "0",
    listStyleType: "none"
}

const gigsItem = {
    padding: ".1em"
}

const gigsLocation = {
    marginLeft: "30px"
}

const Gig = ({event}) => {
    const [hasEvent] = useState(event);

    if(hasEvent){
        return (
            <AccordionBody>
                <h5>
                    {event.event_name}
                </h5>
                <ul style={gigsList}>
                    <li style={gigsItem}>
                        <BsFillCalendarEventFill style={icon}/>
                        {event.event_date_formatted}
                    </li>
                    <li style={gigsItem}>
                        <BsClock style={icon}/>
                        {event.start_time} - {event.end_time}
                    </li>
                    <li style={gigsItem}>
                        <GoLocation style={icon}/>
                        {event.venue}
                    </li>
                    <li style={gigsLocation}>
                        {event.location}
                    </li>
                </ul>
            </AccordionBody>
        )
    } else {
        return (
            <AccordionBody>
                <h5>
                    No Gigs
                </h5>
            </AccordionBody>
        )
    }


}
export default Gig;
