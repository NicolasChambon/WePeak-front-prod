import { useEffect } from 'react';
import { useSelector } from 'react-redux';

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

  return (
    <main className="Contact">
      <ContactTitle />
      <ContactForm />
      {errorMessage.length > 0 && <ContactErrors message={errorMessage} />}
      <ContactDirect />
    </main>
  );
};

export default Contact;
