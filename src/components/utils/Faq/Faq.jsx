import Accordion from './Accordion/Accordion';
import './Faq.scss';

const Faq = () => {
  const questions = [
    {
      question: 'Comment puis-je trouver des activités outdoor à proximité ?',
      answer:
        'Vous pouvez utiliser notre fonction de recherche avancée pour filtrer les activités par type, lieu, et date. Vous pouvez également personnaliser vos préférences et recevoir des notifications pour les activités qui correspondent à vos intérêts.',
    },
    {
      question:
        'Comment puis-je créer un profil attrayant pour attirer des participants ?',
      answer:
        'Enrichissez votre profil avec des photos, des descriptions détaillées de vos activités préférées, et des témoignages de vos expériences passées. La personnalisation de votre profil peut aider à attirer des participants qui partagent vos intérêts.',
    },
    {
      question:
        'Comment puis-je gérer les invitations et les demandes de participation ?',
      answer:
        "Vous pouvez gérer les invitations et les demandes de participation directement depuis votre tableau de bord. Vous avez la possibilité d'accepter, de refuser ou de bloquer des utilisateurs spécifiques.",
    },
    {
      question:
        'Comment puis-je signaler un comportement inapproprié ou des utilisateurs abusifs ?',
      answer:
        'Nous avons mis en place un système de signalement pour vous permettre de signaler tout comportement inapproprié ou des utilisateurs abusifs. Vos signalements sont pris en compte et nous travaillons pour résoudre ces problèmes rapidement.',
    },
  ];

  return (
    <div className="Faq">
      <h2 className="Faq-title">Questions fréquentes</h2>
      <p className="Faq-text">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam.
      </p>
      {questions.map((question, index) => (
        <Accordion
          key={question.question}
          question={question.question}
          answer={question.answer}
          index={index}
        />
      ))}
    </div>
  );
};

export default Faq;
