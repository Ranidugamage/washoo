import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import PaymentForm from '../../components/PaymentForm';
import BranchService from '../../components/BranchService';
import MultiStep from 'react-multistep'
import DateAndTimePicker from '../../components/dateAndTimePicker';
import Reviews from '../../components/rating';


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
        <Container style={{ paddingTop: '100px', display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ borderRadius: "50px" }} width={500} height={500}  src='https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.6435-9/36222523_202227767164672_3195153349771001856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m7vUI2tb0E8AX9HLU4m&_nc_ht=scontent.fcmb5-1.fna&oh=00_AfCDrh_KJS3Y07CAyFiEI5FNKmxl_hOBemC2R_HRv8WTAg&oe=6427059C' />
          <h3>The Laundromat</h3>
        </div>
       
        <div className='service-selecter' style={{ 
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', 
            backgroundColor: '#fff', 
            borderRadius: '50px', 
            padding: '20px', 
            marginLeft: '80px',
            width:'900px',
            height:'1000px'
          }}>
          <MultiStep
            activeStep={0}
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
              }, 
              title: 'Previews'
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
              }, 
              title: 'Next'
            }}
          >
            <div title="service" style={{ paddingBottom: "50px" }}>
              <BranchService services={state.services} />
            </div>
            <div title="Date Time" style={{ paddingBottom: "50px" }}>
              <DateAndTimePicker onChange={onChange} value={value} />
            </div>
            <div title="Payment" style={{ paddingBottom: "50px" }}>
              <PaymentForm />
            </div>
          </MultiStep>
        </div>
        <div >
            <Reviews />
        </div>
        
      </Container>
    )
}
