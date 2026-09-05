import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/MenuScreen';
import CoffeeDetailsScreen from '../screens/CoffeeDetailsScreen';

import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  return (
    // Menu has its own stack to navigate to CoffeeDetails
    // while keeping the bottom TabBar visible.
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.MENU}
        component={MenuScreen}
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

export default MenuStackNavigator;
