import ReactDOM from 'react-dom';
import { App } from './App';
import { FavoritesContextProvider } from './store/favorites-context';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

ReactDOM.render(
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>,

  document.getElementById('root')
);
