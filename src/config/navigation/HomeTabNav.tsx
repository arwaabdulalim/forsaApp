import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import colors from '../../themes/colors';
import Retail from '../../screens/retail/Retail';
import Home from '../../screens/home/Home';
import Offers from '../../screens/offers/Offers';
import Profile from '../../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const ICONS: {[key: string]: any} = {
  Home: require('../../assets/images/home.png'),
  Retail: require('../../assets/images/tag.png'),
  Offers: require('../../assets/images/discount.png'),
  Profile: require('../../assets/images/user.png'),
};
const HomeTabNav = () => {
  const {t} = useTranslation();
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
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: focused => (
            <Text
              style={{fontSize: 14, color: focused ? colors.primary : 'gray'}}>
              {t('home.home')}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={'Retail'}
        component={Retail}
        options={{
          headerShown: false,
          tabBarLabel: focused => (
            <Text
              style={{fontSize: 14, color: focused ? colors.primary : 'gray'}}>
              {t('home.retail')}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={'Offers'}
        component={Offers}
        options={{
          headerShown: false,
          tabBarLabel: focused => (
            <Text
              style={{fontSize: 14, color: focused ? colors.primary : 'gray'}}>
              {t('home.offers')}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: focused => (
            <Text
              style={{fontSize: 14, color: focused ? colors.primary : 'gray'}}>
              {t('home.profile')}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNav;
