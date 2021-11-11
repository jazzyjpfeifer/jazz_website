import React, {useState} from 'react';
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionItem from "react-bootstrap/AccordionItem";
import Gig from "./Gig";

const GIGS = [
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

const Gigs = ({month}) => {
    const [gigs] = useState(GIGS);

            return (
                <AccordionItem eventKey={month.id}>
                    <AccordionHeader className="accordion-header">{month.month_name}</AccordionHeader>
                    {
                        gigs
                            .filter(gig => gig.month === month.month_name)
                            .map(gig => {
                                return (
                                    <Gig key={gig.id} gig={gig}/>
                                )
                            })}
                </AccordionItem>
            )

}


export default Gigs;
