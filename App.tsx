import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,SafeAreaView,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Card from './src/pages/Card';


const Tab = createBottomTabNavigator();



function ProfileScreen() {
  return (
    // Isi dengan konten layar profil
    <Text>test</Text>

  );
}

const test = () => {
  return (
    <View>
        <Text> halaman</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    // Isi dengan konten layar pengaturan
    <Text>test</Text>

  );
}

const App = () => (
 
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
        

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? size + 8 : size + 5;
          } else if (route.name === 'Card') {
            iconName = focused ? 'card' : 'card-outline';
            size = focused ? size + 8 : size + 5;
          } else if (route.name === 'QR') {
            iconName = focused ? 'barcode' : 'barcode-outline';
            size = focused ? size + 8 : size + 5;
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
            size = focused ? size + 8 : size + 5;
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            size = focused ? size + 8 : size + 5;

          }
         

          

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          height: 0,
        },
        tabBarActiveTintColor: '#5390ff',
        tabBarinactiveTintColor: 'black',
        // tabBarLabelStyle: { display: 'none' }, 
        tabBarStyle: {
          backgroundColor: '#eff2f5',
          height: 60,
        }
      })}
      
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Card" component={Card} />
      <Tab.Screen name="QR" component={ProfileScreen} />
      <Tab.Screen name="Notification" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>





)

export default App;
