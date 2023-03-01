import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import PaymentForm from '../components/PaymentForm';
import BranchService from '../components/BranchService';
import MultiStep from 'react-multistep'
import DateTimePicker from 'react-datetime-picker';


export default function BranchDetails() {
    const { state } = useLocation();
    const [date, setDate] = useState(new Date());
    const [value, onChange] = useState(new Date());

    console.log(state)

    const [eventsData, setEventsData] = useState([]);

    const handleSelect = ({ start, end }) => {
        console.log()
    };

    return (
        <Container style={{ paddingTop: '100px' }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img style={{ borderRadius: "10px" }} width={500} height={200} src='https://images.unsplash.com/photo-1675779245403-f7f55cf97bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjYwMzY2NQ&ixlib=rb-4.0.3&q=80&w=1080' />
                <h3>The Laundromat</h3>
            </div>
            <MultiStep activeStep={0}
                prevButton={{
                    style: {
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        fontSize: '16px',
                        cursor: 'pointer',
                        marginRight: "10px"
                    }, title: 'Previews'
                }}
                nextButton={{
                    style: {
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }, title: 'Next'
                }}
            >
                <div title="service" style={{ paddingBottom: "50px" }}>
                    <BranchService services={state.services} />
                </div>
                <div title="Date Time" style={{ paddingBottom: "50px" }}>
                    <DateTimePicker onChange={onChange} value={value} />
                </div>
                <div title="Payment" style={{ paddingBottom: "50px" }}>
                    <PaymentForm />
                </div>
            </MultiStep>
        </Container>
    )
}
