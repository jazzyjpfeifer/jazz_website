import React, {useState} from 'react';
import {Accordion} from "react-bootstrap";
import Gigs from "./Gigs";


const MONTHS = [
    {id: 1, month_name: "January"},
    {id: 2, month_name: "February"},
    {id: 3, month_name: "March"},
    {id: 4, month_name: "April"},
    {id: 5, month_name: "May"},
    {id: 6, month_name: "June"},
    {id: 7, month_name: "July"},
    {id: 8, month_name: "August"},
    {id: 9, month_name: "September"},
    {id: 10, month_name: "October"},
    {id: 11, month_name: "November"},
    {id: 12, month_name: "December"}
]

const gigsStyle = {
    margin: "0 auto",
    width: "40em",
    padding: "10px"
}


function GigsMonth() {
    const [months] = useState(MONTHS);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Defaults current month to be expanded in the accordion

        return (
            <Accordion style={gigsStyle} flush defaultActiveKey={currentMonth}>
                {months
                    .map(month => {
                        return (
                            <Gigs key={month.id} month={month}/>
                        )
                    })}
            </Accordion>

        )
}

export default GigsMonth;
