import React from 'react';
import './design.css';

function FaqSection() {
  const faqs = [
    {
      question: 'Can I book or pickup a vehicle on behalf of someone else?',
      answer: 'No. For insurance and safety reasons, the person who makes the booking must be the primary rider and must be present at the time of pick-up.',
      defaultOpen: true
    },
    {
      question: 'What checks should I perform on the vehicle before starting my ride?',
      answer: 'You should inspect the vehicle for any existing scratches or damages, check tire pressure, fuel level, and test both front and rear brakes before taking off.',
      defaultOpen: false
    },
    {
      question: 'Do you provide a complimentary helmet or any other accessories with the rental?',
      answer: 'Yes, one complimentary helmet is provided with every two-wheeler rental. An additional helmet can be requested for a nominal daily charge.',
      defaultOpen: false
    },
    {
      question: 'What documents are required at the time of vehicle pickup?',
      answer: 'You need to present a valid original Driving License and an ID proof (Aadhaar Card or Passport) for verification.',
      defaultOpen: false
    },
    {
      question: 'Is there a security deposit required for booking a ride?',
      answer: 'Most of our vehicles come with Zero Security Deposit. However, for premium bikes, a minimal refundable deposit may apply depending on the location.',
      defaultOpen: false
    }
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="faq-item" 
            open={faq.defaultOpen}
          >
            <summary className="faq-summary">
              <span className="faq-question">{faq.question}</span>
              <span className="faq-icon"></span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export {FaqSection}