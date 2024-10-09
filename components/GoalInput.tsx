import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'
import { useState } from 'react';
import React from 'react'

const GoalInput = (props) => {
    const [change, setChange] = useState("");
    const goalInput = (event) => {
        setChange(event);
    }

    const addGoalHandler = () => {
        props.OnAddGoal(change);
        setChange("");
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInput} style={styles.textInput} placeholder='Your Course Goal' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title='Add Goal' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancle} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        padding:16,
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "blue",
        width: "70%",
        // marginRight: 8,
        padding: 8
    },
    buttonContainer: {
        marginTop:16,
        flexDirection: "row",

    },
    button:{
        width:"30%",
        marginHorizontal:8
    }
})