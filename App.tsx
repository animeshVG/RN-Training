import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
container:{
  height:"100%",
  width:"100%",
  display:"flex",
  backgroundColor:"yellow",
  justifyContent:"center",
  alignItems:"center"
}
})