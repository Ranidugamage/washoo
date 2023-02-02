import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { branchFilterByLocation, resetToInitialBranchState, branchFilterByName } from "../../app/Slice/branchSlice";

export default function Search() {

  const dispatch = useDispatch();

  const handleNameChange = (value) => {
    dispatch(resetToInitialBranchState())
    dispatch(branchFilterByName(value))
  }
  const handleLocationChange = (value) => {
    dispatch(resetToInitialBranchState())
    dispatch(branchFilterByLocation(value))
  }
  return (
    <Form className="d-flex gap-5">
      <Form.Control onChange={(e) => handleNameChange(e.target.value)} type="text" placeholder="Name" />
      <Form.Control onChange={(e) => handleLocationChange(e.target.value)} type="text" placeholder="Location" />
    </Form>
  );
}
