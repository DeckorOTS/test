import React, { useEffect, useState } from 'react';
import { ChatbotList } from '../components/ChatbotList';
import { ChatbotForm } from '../components/ChatbotForm';
import './DashboardPage.css';

const DashboardPage = () => {
    const [chatbots, setChatbots] = useState([]);

    useEffect(() => {
        // Simulate fetching chatbots from an API
        const fetchChatbots = async () => {
            const response = await fetch('/api/chatbots');
            const data = await response.json();
            setChatbots(data);
        };
        fetchChatbots();
    }, []);

    const handleAddChatbot = async (newChatbot) => {
        // Simulate adding a new chatbot
        setChatbots([...chatbots, newChatbot]);
        await fetch('/api/chatbots', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newChatbot),
        });
    };

    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <ChatbotForm onAddChatbot={handleAddChatbot} />
            <ChatbotList chatbots={chatbots} />
        </div>
    );
};

export default DashboardPage;  
