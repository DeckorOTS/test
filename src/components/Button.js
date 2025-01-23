import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Asumiendo que existen estilos en este archivo

const Button = ({ type, text, disabled, onClick }) => {
    return (
        <button
            type={type}
            className={`custom-button ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
    onClick: () => {},
};

export default Button;