/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

function HomeScreen() {
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigate('Details', {
            id: 30,
            name: 'Isa',
            role: 'Estag',
          })
        }
      />
    </View>
  );
}
function DetailsScreen({route}) {
  const {id, name, role} = route.params;

  const {navigate, push, goBack, popToTop} = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => push('Details')} />
      <Button title="Go to Home" onPress={() => navigate('Home')} />
      <Button title="Go back" onPress={() => goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => popToTop()}
      />
      {id && name && role && (
        <Text>
          Olá {name}
          {''}, você á a nova {role}. Seu número da sorte é : {id}
        </Text>
      )}
    </View>
  );
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{id: 20, name: 'Bug', role: 'Admin'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
