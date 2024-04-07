import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactSuccess from './ContactSuccess/ContactSuccess';
import ContactTitle from './ContactTitle/ContactTitle';
import ContactForm from './ContactForm/ContactForm';
import ContactErrors from './ContactErrors/ContactErrors';
import ContactDirect from './ContactDirect/ContactDirect';

import './Contact.scss';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const errorMessage = useSelector((state) => state.contact.errorMessage);
  const successMessage = useSelector((state) => state.contact.successMessage);

  return (
    <main className="Contact">
      {successMessage.length > 0 && <ContactSuccess message={successMessage} />}
      <ContactTitle />
      <ContactForm />
      {errorMessage.length > 0 && <ContactErrors message={errorMessage} />}
      <ContactDirect />
    </main>
  );
};

export default Contact;
