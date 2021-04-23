import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MeetupItemProps } from '../components/meetups/MeetupItem';
import { MeetupList } from '../components/meetups/MeetupList';
import LoadingSpinner from '../components/layout/LoadingSpinner';

const AllMeetups: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<MeetupItemProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      'https://react-refresher-cb12e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups: MeetupItemProps[] = [];

        for (const key in data) {
          const meetup = { ...data[key] };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => console.log(error.message));

    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <section>
      <Container className='meetup-list-container'>
        <MeetupList data={loadedMeetups} />
        {isLoading && <LoadingSpinner />}
      </Container>
    </section>
  );
};

export default AllMeetups;
