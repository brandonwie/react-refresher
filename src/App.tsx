import { Route } from 'react-router-dom';
import { AllMeetupsPage } from './pages/AllMeetups';
import { FavoritesPage } from './pages/Favorites';
import { NewMeetupPage } from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Route path='/' component={AllMeetupsPage} />
      <Route path='/new-meetup' component={NewMeetupPage} />
      <Route path='/favorites' component={FavoritesPage} />
    </div>
  );
}

export default App;
