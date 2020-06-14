import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  name: ``,
  email: ``,
  channel: ``,
};

const onSubmit = (values) => console.log(`form submit`, values);

const validationSchema = Yup.object({
  name: Yup.string().required(`Required field!`),
  email: Yup.string().email(`Invalid email format!`).required(`Required field!`),
  channel: Yup.string().required(`Required field!`),
});

const YouTubeForm = () => {

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name"/>

            <div className="error">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"/>

            <div className="error">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              id="channel"
              name="channel"
              placeholder="Channel Name"/>

            <div className="error">
              <ErrorMessage name="channel" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default YouTubeForm
