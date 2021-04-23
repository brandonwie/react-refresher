import { Button, Card, Col, Row } from 'react-bootstrap';
import moment from 'moment';

export interface MeetupItemProps {
  id: string;
  title: string;
  imageUrl: string;
  address: string;
  time: string;
  date: string;
  description: string;
}

const MeetupItem: React.FC<MeetupItemProps> = ({
  imageUrl,
  title,
  time,
  date,
  address,
  description,
}: MeetupItemProps): JSX.Element => {
  const dateAndTime = `${date} ${time}`;
  const parsedDateAndTime = moment(dateAndTime).format('h:mm a, MMMM Do YYYY');

  return (
    <Row className='meetup-item-row'>
      <Col className='d-flex justify-content-center'>
        <Card className='meetup-item-card'>
          <Card.Img variant='top' src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {parsedDateAndTime}
            </Card.Subtitle>
            <Card.Subtitle className='mb-2 text-muted'>{address}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Button variant='primary'>To Favorites</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MeetupItem;
