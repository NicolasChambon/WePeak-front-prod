import { useState } from 'react';
import PropTypes from 'prop-types';

import { FiPlus } from 'react-icons/fi';
import './Accordion.scss';

const Accordion = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Accordion">
      <div
        className="Accordion-question"
        onClick={() => {
          toggle();
        }}
        role="textbox"
        tabIndex={index}
      >
        <h3 className="Accordion-question-title">{question}</h3>
        <FiPlus
          className={
            isOpen ? `Accordion-question-icon show` : `Accordion-question-icon`
          }
        />
      </div>

      <div className={isOpen ? `Accordion-answer show` : `Accordion-answer`}>
        <p className="Accordion-answer-text">{answer}</p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Accordion;
