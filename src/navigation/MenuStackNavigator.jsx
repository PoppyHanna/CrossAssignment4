import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from '../screens/MenuScreen';
import CoffeeDetailsScreen from '../screens/CoffeeDetailsScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';

import { SCREENS } from '../constants/screens';

// Menu stack handles categories and coffee details
// while keeping the bottom TabBar visible.

const Stack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  return (
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

      <Stack.Screen
        name={SCREENS.CATEGORY_PRODUCTS}
        component={CategoryProductsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;
