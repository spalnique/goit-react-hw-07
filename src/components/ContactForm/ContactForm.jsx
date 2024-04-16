import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import clsx from 'clsx';
import * as Yup from 'yup';
import { formikInitValues } from '../../redux/constants';
import { addContact } from '../../redux/operations';

import css from '../ContactForm/ContactForm.module.css';

const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username is too short!')
      .max(50, 'Username is too long!')
      .required('Required'),
    phone: Yup.string()
      .min(3, 'Phone number is too short!')
      .max(50, 'Phone number is too long!')
      .required('Required'),
  });
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, form) => {
    console.log('values:', values);
    console.log('form:', form);
    dispatch(addContact(values));
    form.resetForm();
  };

  return (
    <Formik
      initialValues={formikInitValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}>
      {(formikData) => {
        return (
          <Form className={css.formContainer}>
            <div className={css.fieldContainer}>
              <label className={css.labelText} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                className={clsx(
                  css.formInput,
                  formikData.touched.username &&
                    formikData.errors.username &&
                    css.formInputError
                )}
              />
              <ErrorMessage
                name="name"
                component="p"
                className={css.errorMessage}
              />
            </div>
            <div className={css.fieldContainer}>
              <label className={css.labelText} htmlFor={phoneFieldId}>
                Phone
              </label>
              <Field
                type="tel"
                name="phone"
                id={phoneFieldId}
                className={clsx(
                  css.formInput,
                  formikData.touched.phone &&
                    formikData.errors.phone &&
                    css.formInputError
                )}
              />
              <ErrorMessage
                name="phone"
                component="p"
                className={css.errorMessage}
              />
            </div>
            <button type="submit">Add contact</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
