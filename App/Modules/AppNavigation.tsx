import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import MainView from './MainView';
import FilmDetailsView from './FilmDetailsView';
import {Film} from '../Services/Cinema';
import {Order} from '../Services/Order';
import BasketView from './BasketView';
import OrderSummaryView from './OrderSummaryView';

type RootStackParamList = {
  Main:
    | undefined
    | {
        selectedHour: string | null;
        normalTickets: number;
        discountedTickets: number;
      };
  FilmDetails: {
    film: Film;
  };
  Basket: {
    order: Order;
  };
  OrderSummary: {
    order: Order;
  };
};

export type MainProps = NativeStackScreenProps<
  RootStackParamList,
  'Main',
  'Main_id'
>;

export type FilmDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'FilmDetails',
  'FilmDetails_id'
>;

export type BasketProps = NativeStackScreenProps<
  RootStackParamList,
  'Basket',
  'Basket_id'
>;

export type OrderSummaryProps = NativeStackScreenProps<
  RootStackParamList,
  'OrderSummary',
  'OrderSummary_id'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainView}
          options={{
            title: 'Main',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FilmDetails"
          component={FilmDetailsView}
          options={{title: 'Film details'}}
        />
        <Stack.Screen
          name="Basket"
          component={BasketView}
          options={{
            title: 'Basket',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderSummary"
          component={OrderSummaryView}
          options={{
            title: 'OrderSummary',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
