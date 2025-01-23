import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Importar estilos del botón

const Button = ({ type, children, disabled, onClick }) => {
    return (
        <button
            type={type}
            className="custom-button"
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
    onClick: null,
};

export default Button;  
