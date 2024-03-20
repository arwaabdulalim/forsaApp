import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import colors from '../../themes/colors';
import Retail from '../../screens/retail/Retail';
import Home from '../../screens/home/Home';
import Offers from '../../screens/offers/Offers';
import Profile from '../../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const ICONS: {[key: string]: any} = {
  Home: require('../../assets/images/home.png'),
  Retail: require('../../assets/images/tag.png'),
  Offer: require('../../assets/images/discount.png'),
  Profile: require('../../assets/images/user.png'),
};
const HomeTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = ICONS[route.name];
          const iconColor = focused ? colors.primary : colors.steel;
          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20, tintColor: iconColor}}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.steel,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Retail"
        component={Retail}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Offer"
        component={Offers}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNav;
