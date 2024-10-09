import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native'
import React from 'react'
import { useState } from 'react'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

const App = () => {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);


  const startAddGoalHandler = () => {
    setmodalIsVisible(true);
  }

  function endAddGoalHandler() {
    setmodalIsVisible(false)
  }

  const adGoal = (change) => {
    setGoals(currentGoals => [...currentGoals, { text: change, id: Math.random().toString() }]);
    endAddGoalHandler();
  }


  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goals) => goals.id !== id);
    });

  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisible} OnAddGoal={adGoal} onCancle={endAddGoalHandler} />
      {/* <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInput} style={styles.textInput} placeholder='Your Course Goal' />
        <Button onPress={adGoal} title='Add Goal' />
      </View> */}
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />
          )
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
    paddingHorizontal: 16,
    backgroundColor:"#1e085a"
  },
  goalsContainer: {
    flex: 4
  }
})