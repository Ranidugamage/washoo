import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import tip1 from "../../assets/tips/1.png";
import tip2 from "../../assets/tips/2.png";
import tip3 from "../../assets/tips/3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tipsList = [
  {
    title:
      "Choose your preferred local laundry store from drozens of options nearby.",
    subTitle: "View ratings and pricing per service for each store.",
    img: tip1,
  },
  {
    title: "Add your credit card and delivery address.",
    subTitle: "We will pickup your clothes within 30 minutes of your request ",
    img: tip2,
  },
  {
    title: "Once your laundry is all nice  and clean !",
    subTitle:
      "We’ll drop it off at your earliest convenience right at your door Easy!",
    img: tip3,
  },
];

export default function StartTips() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (index === tipsList.length - 1) {
      navigate("/dashboard");
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <Container>
      <div className="p-5 border rounded-5">
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <h4>{tipsList[index].title}</h4>
            <p>{tipsList[index].subTitle}</p>
          </Col>
          <Col md={4}>
            <img alt="sideLogo" src={tipsList[index].img} width="200px" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end align-items-center">
            <Button onClick={() => handleNextClick()} variant="primary">
              {index === tipsList.length - 1 ? "Let’s go!" : "Next"}
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
