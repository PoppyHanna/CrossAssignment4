import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons/static';

import SearchInput from '../components/SearchInput/SearchInput';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import VerticalProductCard from '../components/VerticalProductCard/VerticalProductCard';

import { products } from '../data/products';
import { SCREENS } from '../constants/screens';
import { COLORS } from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const popularProducts = products.filter(product => product.popular);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color={COLORS.textPrimary}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.CART)}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={22}
            color={COLORS.textPrimary}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Good morning!</Text>
      <Text style={styles.subtitle}>What do you like?</Text>

      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for coffee..."
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

      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular products</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.productsRow}>
        {popularProducts.map(product => (
          <VerticalProductCard
            key={product.id}
            title={product.name}
            image={product.image}
            price={`$${(product.prices?.Medium ?? product.price ?? 0).toFixed(
              2,
            )}`}
            onPress={() =>
              navigation.navigate(SCREENS.COFFEE_DETAILS, {
                productId: product.id,
              })
            }
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingTop: 8,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 36,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    // marginTop: 36,
    marginBottom: 21,
  },

  categories: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 12,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },

  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },

  seeAll: {
    fontSize: 14,
    color: COLORS.textPrimary,
  },

  productsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 16,
    width: '100%',
  },
});

export default HomeScreen;
