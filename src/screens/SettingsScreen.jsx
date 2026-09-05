import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants/colors';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Notifications</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Language</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Privacy</Text>
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

  text: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});

export default SettingsScreen;
