import React from "react";
import { Container } from "react-bootstrap";
import Search from "../components/Search";
import Slider from "../components/Slider";

export default function DashBoardPage() {
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
      </div>
    </div>
  );
}
