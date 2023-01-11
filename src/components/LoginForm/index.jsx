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
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setIsLording(true);
      axios
        .post("http://localhost:8004/signin", {
          id: values.userName,
          password: values.password,
        })
        .then(function (response) {
          toast("Login successful");
          dispatch(setUser(response.data));
          setIsLording(false);
          navigate("/dashboard");
        })
        .catch(function (error) {
          // alert.error(error.response.data.error);
          toast(error.response.data.error);
          setIsLording(false);
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="User Name"
          type="text"
          // id="userName"
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div style={{ color: "red" }}>{formik.errors.userName}</div>
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
