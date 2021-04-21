import { DUMMY_DATA } from '../../pages/dummy-data';
import { MeetupItem } from './MeetupItem';

export const MeetupList: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>All Meetups</h1>
      {DUMMY_DATA.map((data) => {
        return <MeetupItem key={data.id} {...data} />;
      })}
    </>
  );
};
