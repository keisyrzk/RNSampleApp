import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import TabBarView, {TabType} from './TabBarView';
import styles from '../Resources/Styles';
import {getCinemas, Cinema, Film} from '../Services/Cinema';
import {Order} from '../Services/Order';
import {useNavigation} from '@react-navigation/native';
import {MainProps} from './AppNavigation';
import {CartDataProps} from './FilmDetailsView';

const MainView = () => {
  const [tabType, setTabType] = useState<keyof typeof TabType>('products');
  const [cinemas, setCinemas] = useState<Cinema[]>([]); // products
  const [order, setOrder] = useState<Order>(); // basket
  const navigation = useNavigation<MainProps['navigation']>();

  const handleTabBarPress = async (tabType: keyof typeof TabType) => {
    switch (tabType) {
      case 'products':
        fetchCinemas();
        break;

      default:
        break;
    }

    setTabType(tabType);
  };

  /*
      case (1) - if value is named the same as value
      
      const handleFilmClick = (film: Film)

      type RootStackParamList = {
          FilmDetails: {
            film: Film;
          };
      };

      the definition may be short like just 'film'

      const handleFilmClick = (film: Film) => {
        navigation.navigate(`FilmDetails`, {
          film,
        });
      };


    §case (2) - if value is named differently than value
      
      const handleFilmClick = (film: Film)

      type RootStackParamList = {
          FilmDetails: {
            filmParam: Film;
          };
      };

      the definition has to explicitly point the key like so

      const handleFilmClick = (film: Film) => {
        navigation.navigate(`FilmDetails`, {
          filmParam: film,
        });
      };
  */

  const handleFilmClick = (film: Film) => {
    navigation.navigate('FilmDetails', {
      film,
      cartData: handleCartData,
    });
  };

  const handleCartData: CartDataProps = (
    selectedHour: string | null,
    normalTickets: number,
    discountedTickets: number,
  ) => {
    // Do something with the data received from FilmDetailsView
    console.log('Selected hour:', selectedHour);
    console.log('Selected normal tickets:', normalTickets);
    console.log('Selected discounted tickets:', discountedTickets);
  };

  const fetchCinemas = async () => {
    try {
      const cinemasData = await getCinemas();
      setCinemas(cinemasData);
    } catch (error) {
      console.error('Error fetching cinemas:', error);
    }
  };

  useEffect(() => {
    // fetch cinemas when the component is loaded
    fetchCinemas();
  }, []);

  let tabContent;
  switch (tabType) {
    case 'products':
      tabContent = (
        <CinemasView cinemas={cinemas} onFilmClick={handleFilmClick} />
      );
      break;
    default:
      tabContent = (
        <Text style={styles.titleSecondary}> Tab_settings_content </Text>
      );
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{tabContent}</View>
      <TabBarView onTabPress={handleTabBarPress} />
    </View>
  );
};

const TitleContainer = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titlePrimary}>
        Rebel
        <Text style={styles.titleSecondary}>Shop</Text>
      </Text>
      <View style={styles.titleLine} />
    </View>
  );
};

const CinemasView = ({
  cinemas,
  onFilmClick,
}: {
  cinemas: Cinema[];
  onFilmClick: (film: Film) => void;
}) => {
  return (
    <View style={styles.container}>
      <TitleContainer />
      <FlatList
        data={cinemas}
        renderItem={({item}) => (
          <CinemaSection cinema={item} onFilmClick={onFilmClick} />
        )}
        keyExtractor={cinema => cinema.name}
      />
    </View>
  );
};

// example:
// interface MyProps {
//   film: Film
//   name: string
//   age?: number
// }

// const FilmRowSample = ( {film, ...rest }: MyProps ) => {

//   rest.age
//   rest.name
//   ...
// }

// create each film row
const FilmRow = ({
  film,
  onFilmClick,
}: {
  film: Film;
  onFilmClick: (film: Film) => void;
}) => {
  return (
    <TouchableOpacity onPress={() => onFilmClick(film)}>
      <View>
        <View style={styles.filmRow}>
          <Image
            source={{uri: film.poster}}
            style={styles.filmPoster}
            defaultSource={require('../Resources/imagePlaceholder.png')}
            resizeMode="contain"
          />
          <Text style={styles.filmName}>{film.name}</Text>
        </View>
        <SeparatorLine />
      </View>
    </TouchableOpacity>
  );
};

// create each cinema section
const CinemaSection = ({
  cinema,
  onFilmClick,
}: {
  cinema: Cinema;
  onFilmClick: (film: Film) => void;
}) => {
  return (
    <View>
      <Text style={styles.cinemaHeader}>{cinema.name}</Text>
      <FlatList
        data={cinema.films}
        renderItem={({item}) => (
          <FilmRow film={item} onFilmClick={onFilmClick} />
        )}
        keyExtractor={film => film.name}
      />
    </View>
  );
};

const SeparatorLine = () => {
  return <View style={styles.separatorLine} />;
};

export default MainView;
