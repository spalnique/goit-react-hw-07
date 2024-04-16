import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import css from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const filterValue = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(
    ({ username, phone }) =>
      username.toLowerCase().includes(filterValue.toLowerCase()) ||
      phone.includes(filterValue)
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
