import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import navigationData from './navigationData'

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
  export default function RootNavigation() {
    const data = navigationData
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Account">
          { navigationData.map((item, index) => {
             return ( <Drawer.Screen 
                        key={`key-${index}`}
                        name={item.name} 
                        component={item.component} /> )
          }) }
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }