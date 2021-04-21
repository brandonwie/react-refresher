import { Container } from 'react-bootstrap';
import { MeetupList } from '../components/meetups/MeetupList';

const AllMeetups: React.FC = (): JSX.Element => {
  return (
    <section>
      <Container className='meetup-list-container'>
        <MeetupList />
      </Container>
    </section>
  );
};

export default AllMeetups;
