import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

export const App: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={AllMeetups} />
        <Route path='/new-meetup' component={NewMeetupPage} />
        <Route path='/favorites' component={FavoritesPage} />
      </Switch>
    </Layout>
  );
};
