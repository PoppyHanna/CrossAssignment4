import { Platform } from 'react-native';
import { COLORS } from './colors';

export const SHADOWS = {
    // Uses platform-specific shadow properties for iOS and Android.
    default: Platform.select({
        ios: {
            shadowColor: COLORS.textTertiary,
            shadowOffset: {
                width: 4,
                height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
        },

        android: {
            elevation: 4,
        },
    }),
};