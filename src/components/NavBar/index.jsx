import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/Slice/userSlice";
import { toast } from "react-toastify";
import Dropdown from "../dropdown/index"
import { motion } from "framer-motion";

const MotionNavLink = ({ to, children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link to={to}>
        {children}
      </Link>
    </motion.button>
  );
};

export default function NavBar() {
  const { pathname } = useLocation();
  if (pathname.substring(0, 19) === "/customer-dashboard") {
    return <NavBarLayout><CustomerNav /></NavBarLayout>
  } else if (pathname.substring(0, 23) === "/LaundryOwner-dashboard") {
    return <NavBarLayout><LaundryOwnerNav /></NavBarLayout>
  } else {
    return <NavBarLayout><UnAuthNav /></NavBarLayout>
  }

}

function NavBarLayout({ children }) {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to={"/customer-dashboard"}>
            <img alt="sideLogo" src={logo} width={"300px"} />
          </Link>
        </Navbar.Brand>
        <Nav className="justify-content-end">

          {children}

          

        </Nav>
      </Container>
    </Navbar>
  )
}

function CustomerNav() {
  return (
    <Dropdown />
  )
}

function LaundryOwnerNav() {
  return (
    <>
      <Nav.Item>
        <MotionNavLink to={"/LaundryOwner-dashboard/branch-list"}>
          Branch List
        </MotionNavLink>
      </Nav.Item>
      <Nav.Item>
        <MotionNavLink to={"/LaundryOwner-dashboard/add-branch"}>
          Add Branch
        </MotionNavLink>
      </Nav.Item>
      <Dropdown />
    </>
  )
}

function UnAuthNav() {
  return (
    <>
      <Nav.Link>
        <Link to={"/start-tips"}>Discover</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to={"/auth"}>Join Now</Link>
      </Nav.Link>
    </>
  )
}

function LogOut() {

  const dispatch = useDispatch();

  const handleLogout = () => {
    toast("Logout successful");
    dispatch(setUser(null));
  };
  return (
    <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
  )
}





