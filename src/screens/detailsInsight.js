import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/diemention'
import { Icons } from '../assest/icons'
import DatePicker from 'react-native-date-picker'

const DetailsInsight = ({navigation}) => {
    const [date, setDate] = useState(new Date())
  return (
    <View>
     <View style={styles.container}>
    <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
        <Image source={Icons.left} style={styles.img}/>
    </TouchableOpacity>
        <Text style={styles.text}>Details Insight</Text> 
  </View>

    </View>
  )
}

export default DetailsInsight

const styles = StyleSheet.create({
    container:
    {
        height:SCREEN_HEIGHT*0.12042253521,
        width:SCREEN_WIDTH,
        backgroundColor:"#3275a8",
        flexDirection:'row',
        paddingHorizontal:10,
        alignItems:'center',
        paddingTop:40,


        
    },
    img:
    {
        height:30,
        width:30,
        marginLeft:20,
    },
    text:
    {
        marginLeft:30,
        fontSize:30,
        fontWeight:'400',
        color:'white',
    },
})