import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import TabBarView, { TabType } from './TabBarView';
import styles from "../Resources/Styles";
import { getCinemas, Cinema, Film, Order } from '../Services/Cinema';

const MainView = () => {

  const [tabType, setTabType] = useState<keyof typeof TabType>('products');
  const [cinemas, setCinemas] = useState<Cinema[]>([]); // products
  //const [order, setOrder] = useState<Order>(); // basket

  const handleTabBarPress = async (tabType: keyof typeof TabType) => {
    switch (tabType) {
      case 'products':
        fetchCinemas();
        break;

      case 'basket':
        //fetch basket - order
        break;

      default:
        break;
    }

    setTabType(tabType)
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
      tabContent = <CinemasView cinemas={cinemas}/>
      break;
    case 'basket':
      tabContent = <Text style={styles.titleSecondary}> Tab_basket_content </Text>;      
      break;
    default:
      tabContent = <Text style={styles.titleSecondary}> Tab_settings_content </Text>;      
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TitleContainer/>
        {tabContent}
      </View>
      <TabBarView onTabPress={handleTabBarPress} />
    </View>
  );
};

const TitleContainer = () => {
  return (
    <View style={styles.titleContainer}>
     <Text style={styles.titlePrimary}>
        Rebel
        <Text style={styles.titleSecondary}> 
          Shop 
        </Text>
      </Text>
      <View style={styles.titleLine} />
    </View>
  );
}

const CinemasView = ({ cinemas }: {cinemas: Cinema[]}) => { 
  return (
    <View style={styles.content}>
       {<FlatList
        data={cinemas}
        renderItem={CinemaSection}
        keyExtractor={(cinema) => cinema.name}
      />}
    </View>
  )
}

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
    const FilmRow = ({ item }: {item: Film}) => {
      return (
        <View>
           <View style={styles.filmRow}>
            <Image 
              source={{ uri: item.poster }} 
              style={styles.filmPoster} 
              defaultSource={require("../Resources/imagePlaceholder.png")}
              resizeMode="contain"
            />
            <Text style={styles.filmName}>{item.name}</Text>
          </View>
          <SeparatorLine/>
        </View>
      );
    };
  
    // create each cinema section
    const CinemaSection = ({ item }: {item: Cinema}) => {
      return (
        <View>
          <Text style={styles.cinemaHeader}>{item.name}</Text>
          <FlatList
              data={item.films}
              renderItem={FilmRow}
              keyExtractor={(film) => film.name}
            />
        </View>
      );
    }; 

    const SeparatorLine = () => {
      return <View style={styles.separatorLine} />;
    };
 
 export default MainView;