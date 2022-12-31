import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/start-tips");
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Conform Password" />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Sign Up
      </Button>
    </Form>
  );
}
