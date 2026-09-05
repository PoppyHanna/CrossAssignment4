import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {CartProvider} from './src/context/CartContext';

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;