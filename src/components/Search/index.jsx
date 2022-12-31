import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Search() {
  return (
    <Form className="d-flex gap-5">
      <Form.Control type="text" placeholder="Enter which type service" />
      <Form.Control type="text" placeholder="Location" />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}
