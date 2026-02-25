import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    //burada id bilgisini eylemle birlikte gönderiyoruz
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.item}>
      <div className={css.info}>
        <p>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
