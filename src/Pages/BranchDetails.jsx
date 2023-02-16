import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Container from "react-bootstrap/Container";
import PaymentForm from '../components/PaymentForm';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function BranchDetails() {
    const { state } = useLocation();

    const [eventsData, setEventsData] = useState([]);

    const handleSelect = ({ start, end }) => {
        console.log()
    };

    return (
        <Container style={{ marginTop: '100px' }}>
            <h1 style={{ textAlign: "center" }}>Time Slot</h1>
            <hr className="my-4" />
            <Calendar
                views={["day"]}
                selectable
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="day"
                events={eventsData}
                style={{ height: "100vh" }}
                onSelectEvent={(event) => alert(event.title)}
                onSelectSlot={handleSelect}
            />
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Payment</h1>
            <hr className="my-4" />
            <PaymentForm />
        </Container>
    )
}
