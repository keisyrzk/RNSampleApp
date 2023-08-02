import * as React from 'react';
import {Text} from 'react-native';
import {OrderSummaryProps} from './AppNavigation';

function OrderSummaryView({route}: OrderSummaryProps) {
  return <Text>Order Screen - items count {route.params.order.items.length}</Text>;
}

export default OrderSummaryView;
