import { ReactChildren } from 'react';
import { createContext, useState } from 'react';
import { MeetupItemProps } from '../components/meetups/MeetupItem';

interface FavoritesContextType {
  favorites: MeetupItemProps[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: MeetupItemProps) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
}

// Capital F because createContext contains React component
const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => true || false,
});

interface FavoritesContextProviderProps {
  data: MeetupItemProps[];
  children: ReactChildren;
}

const FavoritesContextProvider = (props: FavoritesContextProviderProps) => {
  const [userFavorites, setUserFavorites] = useState<MeetupItemProps[]>([]);

  const addFavoriteHandler = (favoriteMeetup: MeetupItemProps) => {
    setUserFavorites((prevUserFavorites: MeetupItemProps[]) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId: string) => {
    setUserFavorites((prevUserFavorites: MeetupItemProps[]) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId: string): boolean => {
    // The some() method tests whether at least one element in the array passes the test implemented by the provided function
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
