import React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from 'screens/PreAuth';
import { Text } from 'react-native';

// import { PreAuthScreens } from 'types';
// import { Onboarding } from '../../screens/PreAuth';
// import { Welcome } from 'screens/PreAuth/Welcome';
// import LoginNavigator from './LoginNavigator';
// import SignUpNavigator from './SignUpNavigator';
// import { Text } from 'react-native';

// const PreAuthStack = createStackNavigator<PreAuthScreens>();
const PreAuthStack = createNativeStackNavigator();

const PreAuthNavigator = () => {
  return (
    <PreAuthStack.Navigator screenOptions={{ headerShown: false }}>
      <PreAuthStack.Screen name="Onboarding" component={Onboarding} />
      {/* <PreAuthStack.Screen name="Welcome" component={Welcome} />
      <PreAuthStack.Screen name="Login" component={LoginNavigator} />
      <PreAuthStack.Screen name="SignUp" component={SignUpNavigator} /> */}
    </PreAuthStack.Navigator>
  );
};

export default PreAuthNavigator;
