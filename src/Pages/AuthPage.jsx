import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import loginImg from "../assets/loginImg.png";

export default function AuthPage() {
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
          <Col>
            <img alt="sideLogo" src={loginImg} width="500px" />
          </Col>
          <Col>
            <Tabs
              defaultActiveKey="login"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="signUp" title="Sign Up">
                <SignUpForm />
              </Tab>
              <Tab eventKey="login" title="Login">
                <LoginForm />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
