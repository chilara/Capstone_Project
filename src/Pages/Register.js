import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
  });
  return (
    <div className="todoContainer">
      <Sidebar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          var config = {
            method: "post",
            url: "https://jwt-project.onrender.com/register",
            headers: {
              "Content-Type": "application/json",
            },
            data: values,
          };

          try {
            const response = await axios(config);
            console.log(JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              width: "35%",
              backgroundColor: "#f8f9fd",
              padding: "2rem",
              margin: "2% auto",
              boxShadow: "none",
            }}
          >
            <div style={{ marginBottom: "30px" }}>
              <h1
                style={{
                  fontSize: "35px",
                  fontWeight: "500",
                }}
              >
                Create Your Blog
              </h1>
              <br />
              <h5
                style={{
                  fontWeight: "200",
                  color: "grey",
                }}
              >
                We're so glad you're ready to join Docre. Let's start by
                creating your account login.
              </h5>
            </div>
            <div>
              <label style={{ color: "#8E7F7F" }}>First Name</label>
              <input
                type="text"
                value={values.first_name}
                // placeholder="FIRST NAME"
                name="first_name"
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  outline: "none",
                  width: "100%",
                  height: "30px",
                  backgroundColor: "white",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
                  borderRadius: "10px",
                  paddingLeft: "15px",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  marginBottom: "15px",
                  marginTop: "8px",
                }}
              />
              <small
                style={{
                  display: "block",
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {touched.first_name && errors.first_name}
              </small>
            </div>
            <div>
              <label style={{ color: "#8E7F7F" }}>Last Name</label>
              <input
                type="text"
                value={values.last_name}
                // placeholder="LAST NAME"
                name="last_name"
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  outline: "none",
                  width: "100%",
                  height: "30px",
                  backgroundColor: "white",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
                  borderRadius: "10px",
                  paddingLeft: "15px",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  marginBottom: "15px",
                  marginTop: "8px",
                }}
              />
              <small
                style={{
                  display: "block",
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {touched.last_name && errors.last_name}
              </small>
            </div>
            <div>
              <label style={{ color: "#8E7F7F" }}>Email</label>
              <input
                type="email"
                value={values.email}
                name="email"
                // placeholder="EMAIL"
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  outline: "none",
                  width: "100%",
                  height: "30px",
                  backgroundColor: "white",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
                  borderRadius: "10px",
                  paddingLeft: "15px",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  marginBottom: "15px",
                  marginTop: "8px",
                }}
              />
              <small
                style={{
                  display: "block",
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {touched.email && errors.email}
              </small>
            </div>
            <div>
              <label style={{ color: "#8E7F7F" }}>Password</label>
              <input
                type="password"
                value={values.password}
                name="password"
                // placeholder="PASSWORD"
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  outline: "none",
                  width: "100%",
                  height: "30px",
                  backgroundColor: "white",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
                  borderRadius: "10px",
                  paddingLeft: "15px",
                  color: "black",
                  border: "none",
                  fontWeight: "500",
                  marginBottom: "22px",
                  marginTop: "8px",
                }}
              />
              <small
                style={{
                  display: "block",
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {touched.password && errors.password}
              </small>
            </div>
            <button
              style={{
                backgroundColor: "#0644cc",
                width: "104%",
                height: "60px",
                color: "white",
                padding: "8px 24px",
                lineHeight: "150%",
                border: "none",
                borderRadius: "8px",
                marginBottom: "17px",
                cursor: "pointer",
                fontSize: "18px",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.075)",
              }}
              type="submit"
            >
              Sign Up
            </button>
            <h5
              style={{
                fontWeight: "500",
                color: "grey",
              }}
            >
              Got an account?
              <Link
                to="/Login"
                style={{
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontWeight: "500",
                    color: "#0644cc",
                  }}
                >
                  Sign in
                </span>
              </Link>
            </h5>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
