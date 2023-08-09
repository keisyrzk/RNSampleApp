import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { services } from '../Services/StarWars/StarWarsServices';
import { CharactersContainer, Character } from '../Services/StarWars/Entities/Character';

function StarWarsView() {
    const charactersQuery = useQuery<CharactersContainer>('characters', services.starWars.characters.getAll, {
        onSuccess: (data) => {
          console.log('Fetched characters:', data.count);
        },
      });

    const renderItem = ({ item }: { item: Character }) => (
        <Text>{item.name}</Text>
    );

    const onRefresh = () => {
        charactersQuery.refetch();
      };

    return (
        <View style={starWarsStyles.container}>
            <Text>Star Wars Characters</Text>
            {charactersQuery.isLoading ? (
                <ActivityIndicator size="large" color="#C154C1" />
            ) : (
                <FlatList
                    data={charactersQuery.data?.results}
                    renderItem={renderItem}
                    refreshControl={
                        <RefreshControl
                          refreshing={charactersQuery.isFetching}
                          onRefresh={onRefresh}
                          tintColor="#C154C1"   // iOS
                          colors={["#C154C1"]} // Android
                        />
                      }
                />
            )}
        </View>
    );
}

const starWarsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }
});

export default StarWarsView;



