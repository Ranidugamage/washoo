import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BranchCreateForm() {
    const navigate = useNavigate();
    const [isLording, setIsLording] = useState(false);
    const user = useSelector((state) => state.user.user);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            img: "",
            street: "",
            postalCode: "",
            city: "",
            country: "",
            services: [{ name: "", price: "" }, { name: "", price: "" }, { name: "", price: "" }],
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            phone: Yup.string().required("Required"),
            img: Yup.string().required("Required"),
            street: Yup.string().required("Required"),
            postalCode: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            country: Yup.string().required("Required"),
            services: Yup.array().of(
                Yup.object().shape({
                    name: Yup.string(),
                    price: Yup.number(),
                })
            ),
        }),
        onSubmit: async (values) => {
            setIsLording(true)
            const newValue = {
                ...values,
                userId: user._id
            }
            console.log(values)
            try {
                const response = await axios.post(
                    "http://localhost:3001/api/branch/create-branch",
                    newValue
                );
                toast("Branch created successfully");
                setIsLording(false)
                navigate("/LaundryOwner-dashboard/branch-list");
            } catch (error) {
                console.error(error);
                toast("Error creating branch");
                setIsLording(false)
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="Name"
                    type="text"
                    // id="userName"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="Phone"
                    type="text"
                    // id="userName"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div style={{ color: "red" }}>{formik.errors.phone}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="Image Uri"
                    type="text"
                    // id="userName"
                    name="img"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.img}
                />
                {formik.touched.img && formik.errors.img ? (
                    <div style={{ color: "red" }}>{formik.errors.img}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="Street"
                    type="text"
                    // id="userName"
                    name="street"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.street}
                />
                {formik.touched.street && formik.errors.street ? (
                    <div style={{ color: "red" }}>{formik.errors.street}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="PostalCode"
                    type="text"
                    // id="userName"
                    name="postalCode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postalCode}
                />
                {formik.touched.postalCode && formik.errors.postalCode ? (
                    <div style={{ color: "red" }}>{formik.errors.postalCode}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="City"
                    type="text"
                    // id="userName"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                    <div style={{ color: "red" }}>{formik.errors.city}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    placeholder="Country"
                    type="text"
                    // id="userName"
                    name="country"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                />
                {formik.touched.country && formik.errors.country ? (
                    <div style={{ color: "red" }}>{formik.errors.country}</div>
                ) : null}
            </Form.Group>

            {formik.values.services.map((service, index) => {
                const serviceNameId = `services[${index}].name`;
                const servicePriceId = `services[${index}].price`;
                return (
                    <div style={{ display: "flex" }}>
                        <Form.Group className="m-3">
                            <Form.Control
                                type="text"
                                placeholder={`Service name ${index + 1}`}
                                // id="password"
                                name={serviceNameId}
                                onChange={formik.handleChange}
                                value={formik.values.services[index].name}
                            />

                        </Form.Group>
                        <Form.Group className="m-3 ">
                            <Form.Control
                                type="number"
                                placeholder={`Service price ${index + 1}`}
                                // id="password"
                                name={servicePriceId}
                                onChange={formik.handleChange}
                                value={formik.values.services[index].price}
                            />
                        </Form.Group>
                    </div>

                )
            })
            }

            <div style={{ textAlign: "center" }}>
                <Button type="submit" variant="primary" disabled={false}>
                    {isLording ? "Loading..." : "Add Branch"}
                </Button>
            </div>
        </Form>
    );
}

export default BranchCreateForm;
