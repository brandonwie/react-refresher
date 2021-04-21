import { Container } from 'react-bootstrap';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage: React.FC = (): JSX.Element => {
  return (
    <section>
      <Container className='form-container'>
        <NewMeetupForm />
      </Container>
    </section>
  );
};

export default NewMeetupPage;
