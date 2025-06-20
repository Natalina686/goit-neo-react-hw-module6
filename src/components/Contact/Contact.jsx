import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({contact}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    }

    return (
       <div className={css.contact}>
      <p className={css.text}>
        {contact.name}: <span className={css.number}>{contact.number}</span>
      </p>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div> 
    )
}