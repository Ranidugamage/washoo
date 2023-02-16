import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

export default function ServiceListPage({ userId }) {
    const [branchData, setBranchData] = useState(null);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            const url = "http://localhost:3001/api/branch/get-branch-by-user-id";
            const data = { userId: "63ed98ab975b003ef55869d1" };
            try {
                const response = await axios.get(url, data);
                if (isMounted) {
                    setBranchData(response.data);
                    console.log(response.data)
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [userId]);


    const handleNavigateCalender = (_id) => {
        navigate("/LaundryOwner-dashboard/calender", { state: _id });
    }

    return (
        <div style={{ paddingTop: "100px", textAlign: "center", marginLeft: "30px", marginRight: "30px" }}>
            <h3>Branch List</h3>
            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Street</th>
                        <th>city</th>
                        <th>Country</th>
                        <th>PostalCode</th>
                        <th>Services</th>
                        <th>Booking</th>
                    </tr>
                </thead>
                <tbody>

                    {branchData ? (
                        branchData.map((row, index) => (
                            <tr key={row._id}>
                                <td>{row.name}</td>
                                <td>{row.phone}</td>
                                <td>{row.street}</td>
                                <td>{row.city}</td>
                                <td>{row.country}</td>
                                <td>{row.postalCode}</td>
                                <td>
                                    {
                                        row.services.map((service, index) => (
                                            <p key={index}>{`${service.name ? service.name : "-"} ${service.price ? `(Rs: ${service.price})` : "-"}`}</p>
                                        ))
                                    }
                                </td>
                                <td
                                    onClick={() => handleNavigateCalender(row._id)}
                                    style={{
                                        textDecoration: "underline",
                                        cursor: "pointer"
                                    }}>Orders</td>
                            </tr>)
                        )

                    ) : (
                        <p>Loading branch data...</p>
                    )}
                </tbody>
            </Table>
        </div >
    );
}

