import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants/colors';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>coffeetogo@google.com</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.text}>+1 917 371 0492</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.text}>New Jersey, USA</Text>
      </View>
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
    marginBottom: 24,
  },

  card: {
    backgroundColor: COLORS.lightBeige,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },

  text: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});

export default ContactScreen;
