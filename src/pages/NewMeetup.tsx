import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import React from 'react';

export interface MeetupDataType {
  id: string;
  title: string;
  imageUrl: string;
  address: string;
  date: string;
  time: string;
  description: string;
}

const NewMeetupPage: React.FC = (): JSX.Element => {
  const history = useHistory();

  const addMeetupHandler = (meetupData: MeetupDataType): void => {
    fetch(
      'https://react-refresher-cb12e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        // prevent to go back
        history.replace('/');
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section>
      <Container className='form-container'>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Container>
    </section>
  );
};

export default NewMeetupPage;
