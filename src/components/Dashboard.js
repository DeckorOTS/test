import React, { useState, useEffect } from 'react';
import ChatbotCard from './ChatbotCard';
import ChatbotForm from './ChatbotForm';

const Dashboard = () => {
    const [chatbots, setChatbots] = useState([]);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        // Simulando la obtención de datos de chatbots desde una API
        const mockChatbots = [
            { id: 1, name: 'Chatbot 1' },
            { id: 2, name: 'Chatbot 2' }
        ];
        setChatbots(mockChatbots);
    }, []);

    const addChatbot = (chatbot) => {
        setChatbots([...chatbots, chatbot]);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => setFormVisible(!formVisible)}>
                {formVisible ? 'Cancelar' : 'Agregar Chatbot'}
            </button>
            {formVisible && <ChatbotForm addChatbot={addChatbot} />}
            <div className="chatbot-list">
                {chatbots.map(chatbot => (
                    <ChatbotCard key={chatbot.id} chatbot={chatbot} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;