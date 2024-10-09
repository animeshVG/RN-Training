import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [change, setChange] = useState("");
  const [goals, setGoals] = useState([]);
  const goalInput = (event) => {
    setChange(event);
  }

  const adGoal = () => {
    setGoals(currentGoals => [...currentGoals, change]);
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInput} style={styles.textInput} placeholder='Your Course Goal' />
        <Button onPress={adGoal} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return (
            <View style={styles.goalItem}><Text style={{ color: "white" }}>{itemData.item}</Text></View>
          )
        }} />
        {/* <ScrollView alwaysBounceVertical={false}>
        {
          goals.map((goal) =>
          ((<View style={styles.goalItem} key={goal}><Text style={{ color: "white" }}>{goal}</Text></View>)
          ))
        }
      </ScrollView> */}
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
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
  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white"
  }
})