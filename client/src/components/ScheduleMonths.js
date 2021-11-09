import React, {useEffect, useState} from 'react';
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionItem from "react-bootstrap/AccordionItem";
import ScheduleItems from "./ScheduleItems";

const DATA = [
    {
        id: "gig-0",
        group: "Glenn Web - Jazz All Stars",
        month: "November",
        time: "8:00 - 11:00 PM",
        date_text: "November 5, 2021",
        location: "Blues N' Katz - St. George, UT 84770"
    },
    {
        id: "gig-1",
        group: "Glenn Web - Jazz All Stars",
        month: "November",
        time: "8:00 - 11:00 PM",
        date_text: "November 11, 2021",
        location: "Blues N' Katz - St. George, UT 84770"
    },
    {
        id: "gig-1",
        group: "Glenn Web - Jazz All Stars",
        month: "November",
        time: "8:00 - 11:00 PM",
        date_text: "November 11, 2021",
        location: "Blues N' Katz - St. George, UT 84770"
    },
    {
        id: "gig-1",
        group: "Glenn Web - Jazz All Stars",
        month: "December",
        time: "8:00 - 11:00 PM",
        date_text: "December 11, 2021",
        location: "Blues N' Katz - St. George, UT 84770"
    }
]

const ScheduleMonths = ({month}) => {
    const [gigs] = useState(DATA);

    return (
        <AccordionItem eventKey={month.id}>
            <AccordionHeader>{month.month_name}</AccordionHeader>
            <div>
                {gigs
                    .filter(gig => gig.month === month.month_name)
                    .map(gig => {
                        return (
                            <ScheduleItems gig={gig}/>
                        )
                    })}
            </div>
        </AccordionItem>

    )
}
export default ScheduleMonths;
