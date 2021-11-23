import React, {useState} from 'react';
import {BsClock, BsFillCalendarEventFill, GoLocation} from "react-icons/all";
import AccordionBody from "react-bootstrap/AccordionBody";

const icon = {
    fontSize: "20px",
    marginRight: "10px"
}
const gigsInfo = {
    borderBottom: "solid 1px black",
    width: "60%",
    justifyContent: "center",
    margin: "1.5em auto"
}

const Gig = ({event}) => {
    const [hasEvent] = useState(event);

    if(hasEvent){
        return (
            <AccordionBody>
                <h5>
                    {event.event_name}
                </h5>
                <div><BsFillCalendarEventFill style={icon}/>
                    {event.event_date_formatted}
                </div>
                <div><BsClock style={icon}/>
                    {event.start_time} - {event.end_time}
                </div>
                <div><GoLocation style={icon}/>
                    <div>{event.venue}</div>
                    <div>{event.location}</div>

                </div>
                <div style={gigsInfo}/>
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
