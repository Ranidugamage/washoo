import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/Slice/userSlice";
import { toast } from "react-toastify";

function LoginForm() {
  const navigate = useNavigate();
  const [isLording, setIsLording] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLording(true);
      try {
        const response = await axios.post("http://localhost:3001/api/user/login", {
          email: values.email,
          password: values.password,
        });
        toast("Login successful");
        dispatch(setUser(response.data));
        console.log(response.data)
        setIsLording(false);
        if (response.data.roll === "customer") {
          navigate("/customer-dashboard");
        } else if (response.data.roll === "laundryOwner") {
          navigate("/LaundryOwner-dashboard/branch-list");
        }
      } catch (error) {
        // alert.error(error.response.data.error);
        toast(error.response.data.error);
        setIsLording(false);
      }
    },

  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Email"
          type="text"
          // id="userName"
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
      <Button type="submit" variant="primary" disabled={isLording}>
        {isLording ? "Loading..." : "Login"}
      </Button>
    </Form>
  );
}

export default LoginForm;
