import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Bienvenido a nuestra Plataforma</h1>
            <p>Esta es la página inicial donde puedes encontrar información sobre nuestra aplicación.</p>
            <h2>Secciones Principales</h2>
            <ul>
                <li><Link to="/seccion1">Sección 1</Link></li>
                <li><Link to="/seccion2">Sección 2</Link></li>
                <li><Link to="/seccion3">Sección 3</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;