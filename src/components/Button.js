import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // A custom CSS file for button styles

const Button = ({ type, text, onClick, disabled }) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled} 
            className={`btn ${disabled ? 'btn-disabled' : ''}`}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    onClick: () => {},
    disabled: false,
};

export default Button;