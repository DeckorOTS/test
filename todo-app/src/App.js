import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
            </Switch>
        </Router>
    );
};

export default App;