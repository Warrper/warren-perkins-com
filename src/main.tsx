import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './normalize.css';
import './index.css';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')!
);
