import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import Navbar from "../Components/Navbar";
import { base_url } from "../Utils/Constant";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  // extracting the param from the url
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");
  // const navigate = useNavigate();
  // navigate(`/NewsDetails?id=${id}`);

  const initialValues = {
    newsId: "",
    image: "",
  };
  // const validationSchema = yup.object().shape({
  //   image: yup.string().required("image is required"),
  // });
  return (
    <div>
      <Navbar />
      <div>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            let body = {
              method: "post",
              url: `${base_url}/news/${id}/images`,
              headers: {
                "Content-Type": "application/json",
              },
              newsId: id,
              data: values,
            };

            try {
              const response = await axios(body);
              console.log(JSON.stringify(response.data));
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
              <h3 class="fill">Upload Image</h3>
              <br />
              <div>
                <label for="">Image</label>
                <input
                  id="author1"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  value={values.image}
                  name="image"
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
                  {touched.image && errors.image}
                </small>
              </div>

              <button type="submit" id="createBtn">
                add
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AddImage;
