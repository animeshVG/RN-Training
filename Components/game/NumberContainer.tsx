import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.number} >{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:"#ddb52f",
        padding:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:'center',
        marginTop:30

    },number:{
        color:"#ddb52f",
        fontSize:36,
        fontWeight:"bold"
    }
})