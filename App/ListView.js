import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { 
    NativeModules, 
    NativeEventEmitter 
} from 'react-native'

// instantiate the event emitter
const CarServicesEvents = new NativeEventEmitter(NativeModules.CarServices)


const ListItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Text style={styles.itemText}>{item}</Text>
  </TouchableOpacity>
);

     // handle events
    // subscribe to event
    CarServicesEvents.addListener(
        "carDetailsFetchingState",
        res => console.log("sample car fetch event", res)
    )

const ListView = ({ navigation }) => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleItemClick = (item) => {
    console.log('Clicked:', item);


    // completion block
    NativeModules.CarServices.getFullName('_some-completion-input-param_', value => {
        console.log("Received value: " + value)
     })


     // using promise
     // create a function that wraps the Promise
    function getNextCar() {
        NativeModules.CarServices.getNextCar('_some-promise-input-param_')
            .then(res => console.log(res))
            .catch(e => console.log(e.message, e.code))
    }
    getNextCar()
    getNextCar()
    getNextCar()
    getNextCar()

    // handling event
    NativeModules.CarServices.startFetchingNextCar('_some-event-input-param_')

    // handle properties
      // Accessing sampleCarName
      console.log('property :: Car Name:', NativeModules.CarServices.sampleCarName);

      // Accessing sampleCarDictionary
      console.log('property :: Car Dictionary:', NativeModules.CarServices.sampleCarDictionary);

  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onPress={() => handleItemClick(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ListView;
