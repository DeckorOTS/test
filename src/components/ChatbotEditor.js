import React, { useState } from 'react';

const ChatbotEditor = ({ chatbot, onSave }) => {
    const [name, setName] = useState(chatbot.name);
    const [settings, setSettings] = useState(chatbot.settings);

    const handleSave = () => {
        const updatedChatbot = { ...chatbot, name, settings };
        onSave(updatedChatbot);
    };

    return (
        <div>
            <h1>Editar Chatbot</h1>
            <div>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <h2>Configuración</h2>
                <textarea value={JSON.stringify(settings, null, 2)} onChange={(e) => setSettings(JSON.parse(e.target.value))} />
            </div>
            <button onClick={handleSave}>Guardar Cambios</button>
        </div>
    );
};

export default ChatbotEditor;