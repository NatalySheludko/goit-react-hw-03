import css from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formFields}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formFields}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
