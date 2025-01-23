import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return (
        <div style={{
            color: 'red',
            padding: '10px',
            border: '1px solid red',
            borderRadius: '5px',
            backgroundColor: '#ffe6e6',
            margin: '10px 0'
        }}>
            {message}
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;