import { createStore } from 'redux';
import rootReducer from './reducers';

// Configura el store de Redux
const store = createStore(rootReducer);

// Exporta el store para ser utilizado en la aplicación
export default store;
