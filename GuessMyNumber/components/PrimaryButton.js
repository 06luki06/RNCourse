import { 
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

const PressHandler = () => {
    console.log('Pressable pressed');
};

const PrimaryButton = ({children}) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={PressHandler}
                android_ripple={{color: '#640233'}}
                style={({pressed}) =>
                    pressed 
                    ? [styles.buttonInnerContainer, styles.buttonPressed] 
                    : styles.buttonInnerContainer}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonPressed: {
        opacity: 0.75
    }
});