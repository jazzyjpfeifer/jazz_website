import React from 'react';
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

const ScheduleItems = ({gig}) => {
     return (
                        <AccordionBody>
                            <h5>
                                {gig.group}
                            </h5>
                            <div><BsFillCalendarEventFill style={icon}/>
                                {gig.date_text}
                            </div>
                            <div><BsClock style={icon}/>
                                {gig.time}
                            </div>
                            <div><GoLocation style={icon}/>
                                {gig.location}
                            </div>
                            <div style={gigsInfo}/>
                        </AccordionBody>
            )
}

export default ScheduleItems;
