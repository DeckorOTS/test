import React, { useState } from 'react';

const ChatbotForm = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Aquí puedes agregar lógica para enviar el mensaje a tu servicio de chatbot
      setInput('');
    }
  };

  return (
    <div className="chatbot-form">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>{msg.text}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escribe un mensaje..." 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatbotForm;