import { Container } from 'react-bootstrap';
import { DUMMY_DATA } from '../../pages/dummy-data';
import { MeetupItem } from './MeetupItem';

export const MeetupList: React.FC = (): JSX.Element => {
  return (
    <Container>
      {DUMMY_DATA.map((data) => {
        return <MeetupItem key={data.id} {...data} />;
      })}
    </Container>
  );
};
