import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import BranchCard from "../components/BranchCard";
import Search from "../components/Search";
import Slider from "../components/Slider";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBranch } from "../app/Slice/branchSlice";
import axios from "axios";

export default function CustomerDashBoardPage() {
  const branchData = useSelector((state) => state.branch.branch);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const url = "http://localhost:3001/api/branch/get-all-branch";
      try {
        const response = await axios.get(url);
        if (isMounted) {
          const newBranchData = response.data.map((obj) => {
            const { city, country, name, phone, postalCode, services, street, _id, img } = obj;
            return {
              id: _id,
              name,
              img,
              address: `${street} ${city}  ${country} ${postalCode}`,
              phone,
              services
            }

          })
          //set data state
          dispatch(setBranch(newBranchData));
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <Container>

      <div
        style={{
          paddingTop: "100px",
        }}
      >
        <Search />
        <div style={{ marginTop: "30px" }}>
          <Slider />
          <Row>
            {
              branchData.map((data) => (
                <Col key={data.id} xs={12} md={3} ><BranchCard data={data} /></Col>
              ))

            }
          </Row>
        </div>
      </div>
    </Container>
  );
}
