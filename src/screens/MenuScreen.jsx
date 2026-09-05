import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons/static';

import SearchInput from '../components/SearchInput/SearchInput';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import HorizontalProductCard from '../components/HorizontalProductCard/HorizontalProductCard';

import { products } from '../data/products';
import { SCREENS } from '../constants/screens';
import { COLORS } from '../constants/colors';

const MenuScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <MaterialCommunityIcons
              name="menu"
              size={22}
              color={COLORS.textPrimary}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Menu</Text>

          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.CART)}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={22}
              color={COLORS.textPrimary}
            />
          </TouchableOpacity>
        </View>
        <SearchInput
          placeholder="Search for coffee..."
          onChangeText={text => console.log('Search text:', text)}
        />
        <View style={styles.categories}>
          <CategoryCard
            title="Hot coffee"
            image={require('../assets/images/categories/hot_coffee.png')}
          />
          <CategoryCard
            title="Cold coffee"
            image={require('../assets/images/categories/cold_coffee.png')}
          />
          <CategoryCard
            title="Iced drinks"
            image={require('../assets/images/categories/iced_drinks.png')}
          />
        </View>
        <Text style={styles.sectionTitle}>Coffee menu</Text>
        <View style={styles.products}>
          {products.map(product => (
            <HorizontalProductCard
              key={product.id}
              image={product.image}
              title={product.shortName}
              price={(product.prices?.Medium ?? product.price ?? 0).toFixed(2)}
              onPress={() =>
                navigation.navigate(SCREENS.COFFEE_DETAILS, {
                  productId: product.id,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginBottom: 15,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  categories: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 12,
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginTop: 18,
    marginBottom: 12,
  },
  products: {
    gap: 16,
  },
});

export default MenuScreen;
