import css from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
//import defaultContacts from "../../defaultContacts.json";

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
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = ( values, actions) => {
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
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nanoid()} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={nanoid()} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
