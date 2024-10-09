import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const GoalItem = (props) => {


    return (
        <View style={styles.goalItem}  >
        <Pressable android_ripple={{color:"#dddddd"}} onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={{ color: "white",padding: 8, }}>{props.text}</Text></Pressable>
            </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white"
    }
})