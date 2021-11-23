import React from 'react';
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionItem from "react-bootstrap/AccordionItem";
import Gig from "./Gig";
import Events from "../assets/events.json";

/*
const GIGS =
    {
        id: "gig-0",
        group: "No Gigs",
        month: "",
        hasGigs: false
    },
    {
        id: "gig-1",
        group: "Glenn Web - Jazz All Stars",
        month: "November",
        time: "8:00 - 11:00 PM",
        date_text: "November 5, 2021",
        location: "Blues N' Katz - St. George, UT 84770",
        hasGigs: true
    },
    {
        id: "gig-2",
        group: "Glenn Web - Jazz All Stars",
        month: "November",
        time: "8:00 - 11:00 PM",
        date_text: "November 11, 2021",
        location: "Blues N' Katz - St. George, UT 84770",
        hasGigs: true
    },
    {
        id: "gig-3",
        group: "Glenn Web - Jazz All Stars",
        month: "November",
        time: "8:00 - 11:00 PM",
        date_text: "November 11, 2021",
        location: "Blues N' Katz - St. George, UT 84770",
        hasGigs: true
    },
    {
        id: "gig-4",
        group: "Glenn Web - Jazz All Stars",
        month: "December",
        time: "8:00 - 11:00 PM",
        date_text: "December 11, 2021",
        location: "Blues N' Katz - St. George, UT 84770",
        hasGigs: true
    }
]

 */
// const SortedEvents = Events.sort((a, b) => {
//     return new Date(a.event_date) - new Date(b.event_date)
// });
//
// console.log(Events.sort(function(a, b) {
//     return new Date(b.event_date) - new Date(a.event_date)
// }))


const Gigs = ({month}) => {
            return (
                <AccordionItem eventKey={month.id}>
                    <AccordionHeader className="accordion-header">{month.month_name}</AccordionHeader>
                    {
                        Events
                            .filter(event => event.month_name === month.month_name)
                            .sort(function(a, b) {
                                return new Date(a.event_date) - new Date(b.event_date)
                            })
                            .map(event => {
                                return (
                                    <Gig key={event.id} event={event}/>
                                )
                            })}
                </AccordionItem>
            )

}


export default Gigs;
