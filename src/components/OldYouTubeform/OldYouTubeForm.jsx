import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  name: ``,
  email: ``,
  channel: ``,
};

const onSubmit = (values) => console.log(values);

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = `Required`;
//   }

//   if (!values.email) {
//     errors.email = `Required`;
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format'
//   }

//   if (!values.channel) {
//     errors.channel = `Required`;
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required(`Required field!`),
  email: Yup.string().email(`Invalid email format!`).required(`Required field!`),
  channel: Yup.string().required(`Required field!`),
});

const OldYouTubeForm = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(`visited fields` , formik.touched);

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name} />

          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />

          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            placeholder="Channel Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel} />

          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default OldYouTubeForm
