import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/Slice/userSlice";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [isLording, setIsLording] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      conformPassword: "",
      isCheck: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Invalid email format"),
      password: Yup.string().required("Required"),
      conformPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setIsLording(true);
      try {
        const response = await axios.post("http://localhost:3001/api/user/signup", {
          email: values.email,
          roll: values.isCheck ? "laundryOwner" : "customer",
          password: values.password,
        });
        toast("Register successful");
        toast("Trying to Log In");
        // login
        const loginResponse = await axios.post("http://localhost:3001/api/user/login", {
          email: values.email,
          password: values.password,
        });
        toast("Login successful");
        dispatch(setUser(loginResponse.data));
        setIsLording(false);
        if (loginResponse.data.roll === "customer") {
          navigate("/customer-dashboard");
        } else if (loginResponse.data.roll === "laundryOwner") {
          navigate("/LaundryOwner-dashboard/branch-list");
        }
      } catch (error) {
        toast(error.response.data.error);
        setIsLording(false);
        if (error.response.status === 401) {
          toast("Unable to Login Please Log in Manually");
          console.log(error);
        }
      }
    },

  });

  return (
    <Form onSubmit={formik.handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email"
          // id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          // id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Conform Password"
          // id="conformPassword"
          name="conformPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.conformPassword}
        />
        {formik.touched.conformPassword && formik.errors.conformPassword ? (
          <div style={{ color: "red" }}>{formik.errors.conformPassword}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Sign Up As Launderer"
          name="isCheck"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isCheck}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isLording ? "Loading..." : "SignUp"}
      </Button>
    </Form>
  );
}
