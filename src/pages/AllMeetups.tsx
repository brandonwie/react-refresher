import { Container } from 'react-bootstrap';
import { MeetupList } from '../components/meetups/MeetupList';

const AllMeetups: React.FC = (): JSX.Element => {
  return (
    <section>
      <MeetupList />
    </section>
  );
};

export default AllMeetups;
