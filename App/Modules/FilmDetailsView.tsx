import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from '../Resources/Styles';
import {FilmDetailsProps} from './AppNavigation';
import {TicketType} from '../Services/Order';

function FilmDetailsView({route}: FilmDetailsProps) {
  const {film, cartData} = route.params;
  const availableHours = film.filmShows.map(show => show.hour);

  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [normalTickets, setNormalTickets] = useState(0);
  const [discountedTickets, setDiscountedTickets] = useState(0);

  const handleHourSelected = (hour: string | null) => {
    setSelectedHour(hour);
  };

  const handleTicketsSelected = (
    amount: number | null,
    ticketType: TicketType,
  ) => {
    if (ticketType === 'normal') {
      setNormalTickets(amount || 0);
    } else {
      setDiscountedTickets(amount || 0);
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        Hour: {selectedHour} :: NT: {normalTickets} :: DT: {discountedTickets}
      </Text>

      <Image
        source={{uri: film.poster}}
        style={styles.filmBigPoster}
        defaultSource={require('../Resources/imagePlaceholder.png')}
        resizeMode="contain"
      />

      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <Text style={styles.filmDescription}>{film.filmDescription}</Text>
        <AmountView
          ticketType="normal"
          onTicketsSelected={handleTicketsSelected}
        />
        <AmountView
          ticketType="discounted"
          onTicketsSelected={handleTicketsSelected}
        />
        <HourPickerView
          availableHours={availableHours}
          onHourSelected={handleHourSelected}
        />
      </ScrollView>

      <View style={styles.addToCartContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            //onAddToCart(selectedHour, normalTickets, discountedTickets);
            cartData(selectedHour, normalTickets, discountedTickets);
          }}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

type HourPickerViewProps = {
  availableHours: string[];
  onHourSelected: (selectedHour: string | null) => void;
};

function HourPickerViewItemsSeparator() {
  return <View style={{height: 20}} />;
}

function HourPickerView({availableHours, onHourSelected}: HourPickerViewProps) {
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  useEffect(() => {
    onHourSelected(selectedHour);
  }, [selectedHour, onHourSelected]);

  return (
    <View style={styles.hoursContainer}>
      <Text style={styles.hoursTitle}>Available hours:</Text>
      <FlatList
        data={availableHours}
        scrollEnabled={false}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            style={selectedHour === item ? styles.selectedHour : styles.hour}
            onPress={() => setSelectedHour(item)}>
            <Text
              style={
                selectedHour === item
                  ? styles.selectedHourText
                  : styles.hourText
              }>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => HourPickerViewItemsSeparator()}
      />
    </View>
  );
}

type AmountViewProps = {
  ticketType: TicketType;
  onTicketsSelected: (amount: number | null, ticketType: TicketType) => void;
};

function AmountView({ticketType, onTicketsSelected}: AmountViewProps) {
  const [normalTickets, setNormalTickets] = useState(0);
  const [discountedTickets, setDiscountedTickets] = useState(0);

  const incrementTicket = () => {
    if (ticketType === 'normal') {
      setNormalTickets(normalTickets + 1);
      onTicketsSelected(normalTickets + 1, ticketType);
    } else {
      setDiscountedTickets(discountedTickets + 1);
      onTicketsSelected(discountedTickets + 1, ticketType);
    }
  };

  const decrementTicket = () => {
    if (ticketType === 'normal' && normalTickets > 0) {
      setNormalTickets(normalTickets - 1);
      onTicketsSelected(normalTickets - 1, ticketType);
    } else if (ticketType === 'discounted' && discountedTickets > 0) {
      setDiscountedTickets(discountedTickets - 1);
      onTicketsSelected(discountedTickets - 1, ticketType);
    }
  };

  const title =
    ticketType === 'normal' ? 'Normal Tickets:' : 'Discounted Tickets:';
  const ticketValue =
    ticketType === 'normal' ? normalTickets : discountedTickets;

  return (
    <View style={styles.ticketContainer}>
      <Text style={styles.filmTickets}>{title}</Text>
      <View style={styles.ticketIncrementator}>
        <TouchableOpacity onPress={decrementTicket} style={styles.ticketButton}>
          <Text style={styles.ticketButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.filmTicketsAmountValue}>{ticketValue}</Text>
        <TouchableOpacity onPress={incrementTicket} style={styles.ticketButton}>
          <Text style={styles.ticketButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FilmDetailsView;
