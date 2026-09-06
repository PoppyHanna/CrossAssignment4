import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CoffeeDetailsScreen from '../screens/CoffeeDetailsScreen';
import PopularProductsScreen from '../screens/PopularProductsScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';

import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

// Home stack handles categories, popular products, and coffee details
// while keeping the bottom TabBar visible.

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={SCREENS.POPULAR_PRODUCTS}
        component={PopularProductsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={SCREENS.CATEGORY_PRODUCTS}
        component={CategoryProductsScreen}
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
