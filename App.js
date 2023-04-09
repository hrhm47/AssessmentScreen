import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Header from './src/screens/Header';
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Rewards from './src/screens/Rewards';
import Profile from './src/screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#16267f'} />
      {/* <Header/> */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Wallets"
          screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  name="home"
                  size={30}
                  color={focused ? '#16267f' : null}
                />
              ),
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: '#16267f',
            }}
          />
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  name="telescope"
                  size={30}
                  color={focused ? '#16267f' : null}
                />
              ),
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: '#16267f',
            }}
          />
          <Tab.Screen
            name="Wallets"
            component={Header}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  name="wallet"
                  size={30}
                  color={focused ? '#16267f' : null}
                />
              ),
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: '#16267f',
            }}
          />
          <Tab.Screen
            name="Rewards"
            component={Rewards}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon1
                  name="redeem"
                  size={30}
                  color={focused ? '#16267f' : null}
                />
              ),
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: '#16267f',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  name="account-circle"
                  size={30}
                  color={focused ? '#16267f' : null}
                />
              ),
              tabBarInactiveTintColor: 'black',
              tabBarActiveTintColor: '#16267f',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
