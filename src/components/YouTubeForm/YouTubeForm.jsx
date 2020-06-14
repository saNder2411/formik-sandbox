import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {ErrorText} from '../ErrorText';


const initialValues = {
  name: ``,
  email: ``,
  channel: ``,
  comments: ``,
  address: ``,
};

const onSubmit = (values) => console.log(`form submit`, values);

const validationSchema = Yup.object({
  name: Yup.string().required(`Required field!`),
  email: Yup.string().email(`Invalid email format!`).required(`Required field!`),
  channel: Yup.string().required(`Required field!`),
  comments: Yup.string().min(20, `Length mast be > 20 symbol`),
  address: Yup.string().required(`Required field!`),
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

            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"/>

            <ErrorMessage name="email" component={ErrorText} />
          </div>

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field
              name="address">
              {({field, meta}) => (
                  <>
                    <input
                      type="text"
                      id="address"
                      placeholder="Your address"
                      {...field}/>
                      {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                      ) : null}
                  </>
                )}
            </Field>
          </div>

          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              id="channel"
              name="channel"
              placeholder="Channel Name"/>

            <ErrorMessage name="channel">
              {(errorMsg) => (
                <div className="error">{errorMsg}</div>
              )}
            </ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field
              as="textarea"
              id="comments"
              name="comments"
              placeholder="Your comments"/>

            <ErrorMessage name="comments" component={ErrorText} />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default YouTubeForm
