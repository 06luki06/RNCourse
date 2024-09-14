import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image
} from 'react-native';
import { useState } from 'react';

import PropTypes from 'prop-types';

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={props.visible}
            animationType='slide'>
            <View style={styles.inputContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/flag_circle.png')}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder='Your course goal' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            color="#5e0acc"
                            title='Add Goal' 
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            color="#f31282"
                            title='Cancel'
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

GoalInput.propTypes = {
    onAddGoal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: '.column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:8,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer:{
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'center',
      },
      button: {
        width: '40%',
        marginHorizontal: 4
      },
      image: {
        width: 100,
        height: 100,
        marginBottom: 8
    }
});