import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../constants/colors';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>User profile information</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },

  text: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});

export default ProfileScreen;
