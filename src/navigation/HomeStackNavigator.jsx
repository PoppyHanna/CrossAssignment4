import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CoffeeDetailsScreen from '../screens/CoffeeDetailsScreen';

import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    // CoffeeDetails is placed inside HomeStack
    // so the TabBar remains visible on the details screen.
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={SCREENS.COFFEE_DETAILS}
        component={CoffeeDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
