import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

const SizeButton = ({ title, isActive = false, onPress  }) => {
    return (
        <TouchableOpacity
            style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
            onPress={onPress}
            activeOpacity={0.8}
        >   
            <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 40,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    activeButton: {
        backgroundColor: COLORS.brown,
        ...SHADOWS.default,
    },

    inactiveButton: {
        backgroundColor: COLORS.primaryBrown,
    },

    text: {
        fontSize: 14,
        fontWeight: '600',
    },

    activeText: {  
        color: COLORS.white,
    },

    inactiveText: {
        color: COLORS.background,
    },
});

export default SizeButton;