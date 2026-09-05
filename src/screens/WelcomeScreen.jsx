import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {SCREENS} from '../constants/screens';
import {COLORS} from '../constants/colors';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/welcome_page.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Coffee to Go</Text>

          <Text style={styles.subtitle}>
            Your perfect coffee, just a tap away.
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(SCREENS.HOME)}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 155,
    paddingBottom: 86,
  },

  content: {
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.white,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 2,
  },

  button: {
    width: 320,
    height: 64,
    backgroundColor: COLORS.warmBrown,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '400',
  },
});

export default WelcomeScreen;