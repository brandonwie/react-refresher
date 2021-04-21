import { Container } from 'react-bootstrap';
import { MeetupList } from '../components/meetups/MeetupList';

const AllMeetups: React.FC = (): JSX.Element => {
  return (
    <section>
      <Container>
        <h1>All Meetups</h1>
        <MeetupList />
      </Container>
    </section>
  );
};

export default AllMeetups;
