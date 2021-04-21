import { Container } from 'react-bootstrap';
import { DUMMY_DATA } from '../../pages/dummy-data';
import { MeetupItem } from './MeetupItem';

export const MeetupList: React.FC = (): JSX.Element => {
  return (
    <Container className='meetup-list-container'>
      <h1>All Meetups</h1>
      {DUMMY_DATA.map((data) => {
        return <MeetupItem key={data.id} {...data} />;
      })}
    </Container>
  );
};
