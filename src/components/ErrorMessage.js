import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.css'; // Asumiendo que existen estilos en este archivo

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div className="error-message">
            {message}
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;