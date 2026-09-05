import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants/colors';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.text}>
        Coffee Shop is a simple mobile application for browsing coffee, viewing
        product details and creating an order.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textSecondary,
  },
});

export default AboutScreen;
