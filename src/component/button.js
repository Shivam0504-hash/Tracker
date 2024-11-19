import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../utils/diemention'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ButtonInput = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>{text}</Text>

      </View>
    </View>
  )
}
export default ButtonInput;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
    },
    buttoncontainer:
    {
        width:windowWidth*0.85981308411,
        height:windowHeight*0.06322444678,
        borderRadius:16,
        borderWidth:1,
        backgroundColor:"#3275a8",
        justifyContent:'center',
        alignItems:'center',
        marginLeft:SCREEN_WIDTH*0.07633587786,
        marginTop:SCREEN_WIDTH*0.10178117048,
    },
    buttontext:
    {
        fontSize:16,
        fontWeight:'700',
        lineHeight:26,
        color:'#fff'
    }
})