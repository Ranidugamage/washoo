import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import BranchCard from "../components/BranchCard";
import Search from "../components/Search";
import Slider from "../components/Slider";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from "react-redux";
import axios from "axios";

export default function CustomerDashBoardPage() {
  const branchData = useSelector((state) => state.branch.branch);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const url = "http://localhost:3001/api/branch/get-all-branch";
      try {
        const response = await axios.get(url);
        if (isMounted) {
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
  }, []);


  return (
    <div
      style={{
        paddingTop: "100px",
      }}
    >
      <Container>
        <Search />
      </Container>
      <div style={{ marginTop: "30px" }}>
        <Slider />
        <Container>
          <Row>
            {
              branchData.map((data) => (
                <Col key={data.id} xs={12} md={3} ><BranchCard data={data} /></Col>
              ))

            }
          </Row>


        </Container>
      </div>
    </div>
  );
}
