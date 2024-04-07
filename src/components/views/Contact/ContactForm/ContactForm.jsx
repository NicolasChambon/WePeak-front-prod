// Import necessary librairies
import { useSelector, useDispatch } from 'react-redux';

// Import actions
import {
  changeContactInput,
  postContactForm,
} from '../../../../actions/contactActions';

// Import stylesheet
import './ContactForm.scss';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameInput = useSelector((state) => state.contact.nameInput);
  const emailInput = useSelector((state) => state.contact.emailInput);
  const phoneInput = useSelector((state) => state.contact.phoneInput);
  const companyInput = useSelector((state) => state.contact.companyInput);
  const messageInput = useSelector((state) => state.contact.messageInput);

  return (
    <form
      className="ContactForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(postContactForm());
      }}
    >
      <div className="Contact-form-name">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom"
          value={nameInput}
          onChange={(e) => {
            dispatch(changeContactInput(e.target.value, 'nameInput'));
          }}
          required
        />
      </div>

      <div className="ContactForm-email">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          value={emailInput}
          onChange={(e) => {
            dispatch(changeContactInput(e.target.value, 'emailInput'));
          }}
          required
        />
      </div>

      <div className="ContactForm-phone">
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+33 1 23 45 67 89"
          value={phoneInput}
          onChange={(e) => {
            dispatch(changeContactInput(e.target.value, 'phoneInput'));
          }}
        />
      </div>

      <div className="ContactForm-company">
        <label htmlFor="company">Entreprise</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Entreprise"
          value={companyInput}
          onChange={(e) => {
            dispatch(changeContactInput(e.target.value, 'companyInput'));
          }}
        />
      </div>

      <div className="ContactForm-message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message ..."
          value={messageInput}
          onChange={(e) => {
            dispatch(changeContactInput(e.target.value, 'messageInput'));
          }}
          required
        />
      </div>

      <button className="ContactForm-send" type="submit">
        Envoyer &#10141;
      </button>
    </form>
  );
};

export default ContactForm;
