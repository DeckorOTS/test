import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatbotForm.css'; // Importar estilos del formulario

const ChatbotForm = ({ tenantId, onSubmit }) => {
    const [chatbotName, setChatbotName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Limpiar error anterior
        if (!chatbotName) {
            setError('El nombre del chatbot es requerido.');
            return;
        }
        onSubmit({ name: chatbotName, tenantId });
        setChatbotName(''); // Limpiar el campo después de enviar
    };

    return (
        <form onSubmit={handleSubmit} className="chatbot-form">
            <label htmlFor="chatbotName">Nombre del Chatbot:</label>
            <input
                type="text"
                id="chatbotName"
                value={chatbotName}
                onChange={(e) => setChatbotName(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Crear Chatbot</button>
        </form>
    );
};

ChatbotForm.propTypes = {
    tenantId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ChatbotForm;  
