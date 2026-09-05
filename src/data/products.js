export const products = [
  {
    id: 1,
    name: 'Cappuccino',
    shortName: 'Cappuccino rich and foamy',
      prices: {
    Small: 3.50,
    Medium: 4.00,
    Large: 4.70,
  },
    rating: 4.8,
    category: 'hot',
    popular: true,
    image: require('../assets/images/cappuccino.jpg'),
    description:
      'Cappuccino is a classic coffee drink with espresso, hot milk and thick milk foam.',
    sizes: ['Small', 'Medium', 'Large'],
  },

  {
    id: 2,
    name: 'Ice coffee',
    shortName: 'Ice coffee with milk',
      prices: {
    Small: 3.30,
    Medium: 4.10,
    Large: 4.90,
  },
    rating: 3.9,
    category: 'iced',
    popular: true,
    image: require('../assets/images/ice_coffees.jpg'),
    description:
      'Iced coffee is a refreshing coffee drink served over ice, with a smooth and rich flavor.',
    sizes: ['Small', 'Medium', 'Large'],
  },

  {
    id: 3,
    name: 'Espresso',
    shortName: 'Espresso',
      prices: {
    Small: 3.00,
    Medium: 3.50,
    Large: 4.00,
  },
    rating: 4.3,
    category: 'hot',
    popular: false,
    image: require('../assets/images/espresso.jpg'),
    description:
      'Espresso is a rich and strong coffee with an intense aroma and bold flavor.',
    sizes: ['Small', 'Medium', 'Large'],
  },

  {
    id: 4,
    name: 'Latte',
    shortName: 'Latte smooth and mild',
      prices: {
    Small: 4.50,
    Medium: 5.10,
    Large: 5.70,
  },
    rating: 4.0,
    category: 'hot',
    popular: false,
    image: require('../assets/images/latte.jpg'),
    description:
      'Latte is a smooth and creamy coffee made with espresso and steamed milk.',
    sizes: ['Small', 'Medium', 'Large'],
  },

  {
    id: 5,
    name: 'Cold latte',
    shortName: 'Cold caramel latte',
      prices: {
    Small: 4.70,
    Medium: 5.30,
    Large: 6.00,
  },
    rating: 3.8,
    category: 'cold',
    popular: false,
    image: require('../assets/images/cold_latte.jpg'),
    description:
      'Cold caramel latte is a refreshing blend of espresso, cold milk and caramel.',
    sizes: ['Small', 'Medium', 'Large'],
  },
];