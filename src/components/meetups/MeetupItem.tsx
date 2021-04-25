import { Button, Card, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
export interface MeetupItemProps {
  id: string;
  title: string;
  imageUrl: string;
  address: string;
  time: string;
  date: string;
  description: string;
}

const MeetupItem: React.FC<MeetupItemProps> = (
  props: MeetupItemProps
): JSX.Element => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
      console.log('removed favorites');
    } else {
      favoritesCtx.addFavorite({ ...props });
    }
  };

  const dateAndTime = `${props.date} ${props.time}`;
  const parsedDateAndTime = moment(dateAndTime).format('h:mm a, MMMM Do YYYY');

  return (
    <Row className='meetup-item-row'>
      <Col className='d-flex justify-content-center'>
        <Card className='meetup-item-card'>
          <Card.Img variant='top' src={props.imageUrl} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {parsedDateAndTime}
            </Card.Subtitle>
            <Card.Subtitle className='mb-2 text-muted'>
              {props.address}
            </Card.Subtitle>
            <Card.Text>{props.description}</Card.Text>
            <Button
              variant={itemIsFavorite ? 'primary' : 'success'}
              onClick={toggleFavoritesStatusHandler}
            >
              {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MeetupItem;
