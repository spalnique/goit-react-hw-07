import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from '../Contact/Contact.module.css';

const Contact = ({ contact: { id, username, phone } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li>{username}</li>
        <li>{phone}</li>
      </ul>
      <button
        className={css.contactRemoveButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}>
        delete
      </button>
    </div>
  );
};

export default Contact;
