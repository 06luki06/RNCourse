import { 
    StyleSheet,
    View,
    Text,
    Pressable
} from "react-native";

import PropTypes from 'prop-types';

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{
                color: '#dddddd'
                }}
                onPress={props.onDeleteItem.bind(this, props.id)}>
                    <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

GoalItem.propTypes = {
    text: PropTypes.string.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#2131e6',
      },
      goalText: {
        padding: 8,
        color: '#ffffff'
      }
});