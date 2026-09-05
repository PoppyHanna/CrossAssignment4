import { Pressable, Text, Image, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const CategoryCard = ({ title, image, onPress }) => {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.image} resizeMode="cover" />
            <View style={styles.overlay} />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 107,
        height: 85,
        borderRadius: 6,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(33, 26, 22, 0.3)',
    },
    title: {
        position: 'absolute',
        bottom: 8,
        left: 20,
        fontSize: 14,
        color: COLORS.background,
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default CategoryCard;