import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChatbotForm = ({ tenantId }) => {
    const [chatbotName, setChatbotName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!chatbotName) {
            setError('El nombre del chatbot es obligatorio.');
            return;
        }
        setError('');
        // Aquí se enviaría la información del chatbot, incluyendo tenantId
        console.log(`Chatbot creado: ${chatbotName}, Tenant ID: ${tenantId}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="chatbot-name">Nombre del Chatbot:</label>
                <input
                    type="text"
                    id="chatbot-name"
                    value={chatbotName}
                    onChange={(e) => setChatbotName(e.target.value)}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <button type="submit">Crear Chatbot</button>
        </form>
    );
};

ChatbotForm.propTypes = {
    tenantId: PropTypes.string.isRequired,
};

export default ChatbotForm;
