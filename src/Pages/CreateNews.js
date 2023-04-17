import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import Navbar from "../Components/Navbar";
import { base_url } from "../Utils/Constant";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateNews = () => {
  const navigate = useNavigate();
  const initialValues = {
    author: "",
    title: "",
    url: "",
    avatar: "",
  };
  const validationSchema = yup.object().shape({
    author: yup.string().required("name is required"),
    title: yup.string().required("title is required"),
    url: yup.string().required("url is required"),
    avatar: yup.string().required("avatar is required"),
  });

  const buttonTag = (
    <Link
      to="/"
      style={{
        textDecoration: "none",
      }}
    >
      <button className="nav-btn">Home</button>
    </Link>
  );
  return (
    <div>
      <Navbar button={buttonTag} />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            let body = {
              method: "post",
              url: `${base_url}/news`,
              headers: {
                "Content-Type": "application/json",
              },
              data: values,
            };

            try {
              const response = await axios(body);
              console.log(JSON.stringify(response.data));
              navigate("/");
            } catch (error) {
              alert(error);
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
            <form onSubmit={handleSubmit}>
              <h3 class="fill">Fill Details</h3>
              <br />
              <div>
                <label for="">Author</label>
                <input
                  id="author1"
                  type="text"
                  value={values.author}
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small
                  style={{
                    display: "block",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {touched.author && errors.author}
                </small>
              </div>
              <div>
                <label for="">News Title</label>
                <input
                  id="newsTitle"
                  type="text"
                  value={values.title}
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small
                  style={{
                    display: "block",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {touched.last_name && errors.last_name}
                </small>
              </div>
              <div>
                <label for="">News URL</label>
                <input
                  id="newsUrl"
                  type="text"
                  value={values.url}
                  name="url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small
                  style={{
                    display: "block",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {touched.email && errors.email}
                </small>
              </div>
              <div>
                <label for="">Avatar Link</label>
                <input
                  id="avatarLink"
                  type="text"
                  value={values.avatar}
                  name="avatar"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small
                  style={{
                    display: "block",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {touched.password && errors.password}
                </small>
              </div>
              <button type="submit" id="createBtn">
                Create
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default CreateNews;
