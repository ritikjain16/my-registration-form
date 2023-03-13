import React from "react";
import { useFormik } from "formik";
import { userFormSchema } from "../schemas";
import axios from "axios";
import { BACKEND_URL } from "../App";
import { useNavigate } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  dob: "",
  mobile: "",
};

const Home = () => {
  const navigate = useNavigate();
  const saveInDB = async (values) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/user-form`, values);
      // console.log(res.data);
      navigate("/user-forms");
    } catch (e) {
      console.log(e);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userFormSchema,
      onSubmit: (values, action) => {
        saveInDB(values);
        action.resetForm();
      },
    });
  return (
    <div className="flex outcon" style={{ flexWrap: "wrap" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <section>
            <h2>User Form!</h2>
            <br />
          </section>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <span className="error-col">{errors.name}</span>
            ) : null}
          </div>
          {/* -------------------- */}
          <div>
            <label htmlFor="dob">DOB</label>
            <input
              type="date"
              autoComplete="off"
              name="dob"
              id="dob"
              placeholder="DOB"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dob && touched.dob ? (
              <span className="error-col">{errors.dob}</span>
            ) : null}
          </div>
          {/* -------------------- */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <span className="error-col">{errors.email}</span>
            ) : null}
          </div>

          {/* -------------------- */}
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              autoComplete="off"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobile && touched.mobile ? (
              <span className="error-col">{errors.mobile}</span>
            ) : null}
          </div>
          {/* -------------------- */}
          <button className="register" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
