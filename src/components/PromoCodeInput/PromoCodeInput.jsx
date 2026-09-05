import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';

import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons/static';

import { COLORS } from '../../constants/colors';
import { SHADOWS } from '../../constants/shadows';

function PromoCodeInput({ value, onChangeText, onSubmit, placeholder = 'Enter promo code...' }) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.background}
                autoCapitalize="characters"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onSubmit}
                activeOpacity={0.8}
            >
            <MaterialCommunityIcons
                name="chevron-right"
                size={28}
                color={COLORS.white}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBrown,
        borderRadius: 6,
        paddingLeft: 16,
        paddingRight: 8,
        marginTop: 10,
        marginBottom: 24,
        ...SHADOWS.default,
    },

    input: {
        flex: 1,
        height: '100%',
        paddingVertical: 0,
        paddingRight: 12,
        color: COLORS.background,
        fontSize: 12,
        fontWeight: '400',
    },

});

export default PromoCodeInput;