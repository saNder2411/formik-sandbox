import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';

import {ErrorText} from '../ErrorText';


const initialValues = {
  name: `Name`,
  email: ``,
  channel: ``,
  comments: ``,
  address: ``,
  social: {
    facebook: ``,
    twitter: ``,
  },
  phoneNumbers: [``, ``],
  phNumbers: [``],
};

const onSubmit = (values) => console.log(`form submit`, values);

const validationSchema = Yup.object({
  name: Yup.string().required(`Required field!`),
  email: Yup.string().email(`Invalid email format!`).required(`Required field!`),
  channel: Yup.string().required(`Required field!`),
  comments: Yup.string().min(20, `Length mast be > 20 symbol`),
});

// Another one validate methods
const validateAddress = (values) => {
  let error = null;

  if (!values) {
    error = `Required address field!`;
  }

  return error;
};

const YouTubeForm = () => {

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}>
        {
          ({validateForm, validateField, resetForm, setTouched, setFieldTouched}) => (
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
                <FastField
                  name="address"
                  validate={validateAddress}>
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
                </FastField>
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
                <label htmlFor="facebook">Facebook profile</label>
                <Field
                  type="text"
                  id="facebook"
                  name="social.facebook"
                  placeholder="Link on your profile in facebook"/>
              </div>

              <div className="form-control">
                <label htmlFor="twitter">Twitter profile</label>
                <Field
                  type="text"
                  id="twitter"
                  name="social.twitter"
                  placeholder="Link on your profile in twitter"/>
              </div>

              <div className="form-control">
                <label htmlFor="primaryPh">Home phone number</label>
                <Field
                  type="text"
                  id="primaryPh"
                  name="phoneNumbers[0]"
                  placeholder="Your phone number"/>
              </div>

              <div className="form-control">
                <label htmlFor="secondaryPh">Mobile phone number</label>
                <Field
                  type="text"
                  id="secondaryPh"
                  name="phoneNumbers[1]"
                  placeholder="Your phone number"/>
              </div>

              <div className="form-control">
                <label>List of phone numbers</label>
                <FieldArray name="phNumbers">
                  {
                    ({push, remove, form}) => (
                      <div>
                        {
                          form.values.phNumbers.map((item, indx) => (
                            <div key={Math.random() * 1e9}>
                              <Field type="text" name={`phNumbers[${indx}]`} />
                              <button type="button" onClick={() => push()}>+</button>
                              {indx > 0 && <button type="button" onClick={() => remove()}>-</button>}
                            </div>
                          ))
                        }
                      </div>
                    )
                  }
                </FieldArray>
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
              
              <button
                type="button"
                onClick={
                  () => {
                    setFieldTouched(`address`);
                    validateField(`address`);
                  }
                }>
                Validate Address
              </button>
              <button
                type="button"
                onClick={
                  () => {
                    setFieldTouched(`email`);
                    validateField(`email`);
                  }
                }>
                Validate Email
              </button>
              <button
                type="button"
                onClick={
                  () => {
                    setTouched({
                      name: true,
                      email: true,
                      address: true,
                      channel: true,
                      comments: true,
                    });
                    validateForm();
                  }
                }>
                Validate All
              </button>
              <button type="reset" onClick={() => resetForm()}>Reset All Field</button>
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default YouTubeForm;
