import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import { MeetupList } from '../components/meetups/MeetupList';

const FavoritesPage: React.FC = (): JSX.Element => {
  const favoritesCtx = useContext(FavoritesContext);
  console.log(favoritesCtx.favorites);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList data={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <Container>
        <h1>My Favorites</h1>
        {content}
      </Container>
    </section>
  );
};

export default FavoritesPage;
