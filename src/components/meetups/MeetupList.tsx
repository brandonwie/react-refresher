import { Fragment } from 'react';
import MeetupItem, { MeetupItemProps } from './MeetupItem';

export interface MeetupListProps {
  data: MeetupItemProps[];
}

export const MeetupList: React.FC<MeetupListProps> = (
  props: MeetupListProps
): JSX.Element => {
  const { data } = props;
  return (
    <Fragment>
      <h1>All Meetups</h1>
      {data.map((meetup: MeetupItemProps) => {
        return <MeetupItem key={meetup.id} {...meetup} />;
      })}
    </Fragment>
  );
};
