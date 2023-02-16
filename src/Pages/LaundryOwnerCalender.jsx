import React from 'react'
import { useLocation } from 'react-router-dom';

export default function LaundryOwnerCalender() {
    const location = useLocation();
    const data = location.state;
    return (
        <div style={{ paddingTop: "100px" }}>{data}</div>
    )
}
