import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("log out");
    navigate("/auth");
  };

  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img alt="sideLogo" src={logo} width={"300px"} />
          </Link>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          {pathname.substring(0, 10) === "/dashboard" ? (
            <>
              <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>Discover</Nav.Link>
              <Nav.Link>
                <Link to={"/auth"}>Sign Up</Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
