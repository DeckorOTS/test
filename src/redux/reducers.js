import { combineReducers } from 'redux';

const initialChatbotState = {
    chatbots: [],
};

const chatbotReducer = (state = initialChatbotState, action) => {
    switch (action.type) {
        case 'ADD_CHATBOT':
            return {
                ...state,
                chatbots: [...state.chatbots, action.payload],
            };
        case 'REMOVE_CHATBOT':
            return {
                ...state,
                chatbots: state.chatbots.filter(chatbot => chatbot.id !== action.payload.id),
            };
        case 'UPDATE_CHATBOT':
            return {
                ...state,
                chatbots: state.chatbots.map(chatbot => 
                    chatbot.id === action.payload.id ? {...chatbot, ...action.payload.data} : chatbot
                ),
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    chatbot: chatbotReducer,
    // otros reducers pueden ir aquí
});

export default rootReducer;  
