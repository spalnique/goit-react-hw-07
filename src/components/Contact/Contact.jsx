import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from '../Contact/Contact.module.css';

const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li>{name}</li>
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
