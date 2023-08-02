import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../Resources/Styles';
import {BasketItem} from '../Services/Order';
import {BasketProps} from './AppNavigation';

function BasketView({route}: BasketProps) {
  return (
    <BasketListView items={route.params.order.items} />
  );
}

const BasketListView = ({items}: {items: BasketItem[]}) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            //<CinemaSection cinema={item} onFilmClick={onFilmClick} />
            <Text>{item.cinemaName} :: {item.filmName}</Text>
          )}
          keyExtractor={item => item.cinemaName + item.filmName}
        />
      </View>
    );
  };

export default BasketView;
