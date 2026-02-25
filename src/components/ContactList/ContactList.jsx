import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  //Get the processed data with one selector
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
