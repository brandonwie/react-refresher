import { Button, Card, Col, Row } from 'react-bootstrap';

interface MeetupItemProps {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

export const MeetupItem = (props: MeetupItemProps) => {
  return (
    <Row className='meetup-item-row'>
      <Col className='d-flex justify-content-center'>
        <Card className='meetup-item-card'>
          <Card.Img variant='top' src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button variant='primary'>To Favorites</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
