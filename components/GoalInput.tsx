import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'
import { useState } from 'react';
import React from 'react'

const GoalInput = (props) => {
    const [change, setChange] = useState("");
    const goalInput = (event) => {
        setChange(event);
    }

    const addGoalHandler=()=>{
        props.OnAddGoal(change);
        setChange("");
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput onChangeText={goalInput} style={styles.textInput} placeholder='Your Course Goal' />
            <Button onPress={addGoalHandler} title='Add Goal' />
        </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "blue",
        width: "70%",
        marginRight: 8,
        padding: 8
    }
})