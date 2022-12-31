import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import homeImg from "../assets/homeImg.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-end"
          >
            <img alt="sideLogo" src={homeImg} />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-start gap-3"
          >
            <h1>Find Your Nearest Laundromat</h1>
            <h2>Wash your cloths easily</h2>
            <Button onClick={() => navigate("/auth")} variant="primary">
              Join Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
