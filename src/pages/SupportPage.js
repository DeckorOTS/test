import React from 'react';
import FAQs from '../components/FAQs';
import ContactForm from '../components/ContactForm';

const SupportPage = () => {
    return (
        <div>
            <h1>Soporte</h1>
            <section>
                <h2>Preguntas Frecuentes</h2>
                <FAQs />
            </section>
            <section>
                <h2>Contáctanos</h2>
                <ContactForm />
            </section>
        </div>
    );
};

export default SupportPage;