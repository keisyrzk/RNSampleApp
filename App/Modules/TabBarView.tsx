import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TabBarViewProps {
  onTabPress: (tabType: keyof typeof TabType) => void;
}

export const TabType = {
  products: 'Products',
  basket: 'Basket',
  settings: 'Settings',
};

//const allTabTypes = Object.values(TabType);

const TabBarView = ({onTabPress}: {onTabPress: TabBarViewProps['onTabPress']}) => {
  const [selectedTab, setSelectedTab] = useState<keyof typeof TabType>('products');
  const handleTabBarPress = (tabType: keyof typeof TabType) => {
    setSelectedTab(tabType);
    onTabPress(tabType);
  };

    return (

      <View style={styles.container}>
        <View style={styles.tabBarLine} />
        <View style={styles.tabsContainer}>
        {
          Object.keys(TabType)
            .map((tabKey) => {
              const tabType = tabKey as keyof typeof TabType;
              return (
                <TabBarButton key={tabType} tabType={tabType} selectedTab={selectedTab} onTabPress={handleTabBarPress} />
              );
            })
        }
        </View>
      </View>
    );
  };

  const TabBarButton = ({ tabType, selectedTab, onTabPress }: {
    tabType: keyof typeof TabType, 
    selectedTab: keyof typeof TabType, 
    onTabPress: TabBarViewProps['onTabPress']
  }) => {

    const isSelected = tabType === selectedTab

    return (
      <TouchableOpacity
        onPress={() => onTabPress(tabType)}
        style={styles.button}
      >
        <Text style={isSelected ? styles.buttonText_selected : styles.buttonText_notSelected}>{TabType[tabType]}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      height: 56,
    },
    tabsContainer: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
    },
    button: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    buttonText_notSelected: {
      color: 'gray',
      fontSize: 12,
      marginTop: 5,
      fontWeight: 'normal'
    },
    buttonText_selected: {
      color: '#C154C1',
      fontSize: 12,
      marginTop: 5,
      fontWeight: 'bold'
    },
    tabBarLine: {
      width: "100%",
      height: 1,
      backgroundColor: "#D3D3D3",
      marginBottom: 5,
      }
  });
  
  export default TabBarView;
  