import css from "../Contact/Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ contacts: { id, name, number }, onDelete }) {
  return (
    <div className={css.contacts}>
      <div>
        <div className={css.icon}>
          <FaUser />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.icon}>
          <FaPhone />
          <p className={css.name}>{number}</p>
        </div>
      </div>
      <div>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
