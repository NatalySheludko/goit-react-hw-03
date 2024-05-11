import css from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", phone: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={fieldId}>Name</label>
          <Field type="text" name="username" id={nanoid()} />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div>
          <label htmlFor={phoneId}>Number</label>
          <Field type="tel" name="phone" id={nanoid()} />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
