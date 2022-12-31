import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/dashboard");
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={handleLogIn} variant="primary">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
