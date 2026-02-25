import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    dispatch(addContact(newContact));
    e.target.reset(); //formu temizliyoruz
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name: </label>
      <input className={css.input} type="text" name="name" required />

      <label className={css.label}>Number: </label>
      <input className={css.input} type="text" name="number" required />

      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};
export default ContactsForm;
