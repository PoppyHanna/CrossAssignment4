import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    // CartStack handles navigation between Cart and Checkout.
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.CART}
        component={CartScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={SCREENS.CHECKOUT}
        component={CheckoutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
