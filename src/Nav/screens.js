import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeConnect } from '../home';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeConnect} />
    </Stack.Navigator>
  );
}


const Nav = () =>  {
    return (
      <NavigationContainer>
          <HomeStack />
      </NavigationContainer>
    );
}


export default connect()(Nav);