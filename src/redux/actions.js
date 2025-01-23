// src/redux/actions.js

// Acción para añadir un nuevo chatbot
export const ADD_CHATBOT = 'ADD_CHATBOT';
export const addChatbot = (chatbot) => ({
    type: ADD_CHATBOT,
    payload: chatbot,
});

// Acción para eliminar un chatbot
export const REMOVE_CHATBOT = 'REMOVE_CHATBOT';
export const removeChatbot = (chatbotId) => ({
    type: REMOVE_CHATBOT,
    payload: chatbotId,
});

// Acción para actualizar un chatbot
export const UPDATE_CHATBOT = 'UPDATE_CHATBOT';
export const updateChatbot = (chatbot) => ({
    type: UPDATE_CHATBOT,
    payload: chatbot,
});

// Acción para establecer el estado de los chatbots
export const SET_CHATBOTS = 'SET_CHATBOTS';
export const setChatbots = (chatbots) => ({
    type: SET_CHATBOTS,
    payload: chatbots,
});
