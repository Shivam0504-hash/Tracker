import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/diemention'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You must not distribute any software or device that incorporates a part of the Platform</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:
    {
        width:SCREEN_WIDTH,
        height:60,
        backgroundColor:"#3275a8",
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
    },
    text:
    {
        color:'white'
    }
})