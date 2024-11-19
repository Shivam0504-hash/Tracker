import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT,SCREEN_WIDTH } from '../utils/diemention'
import { Icons } from '../assest/icons'


const Heading = ({text,image}) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text} 
      </Text>
      <TouchableOpacity>
      <Image source={image} style={styles.img}/>
      </TouchableOpacity>
      
    </View>
  )
}

const styles=StyleSheet.create({
  container:
  {
    backgroundColor:'#3275a8',
    height:SCREEN_HEIGHT*0.15,
    width:SCREEN_WIDTH,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    flexDirection:'row',

  },
  text:
  {
    paddingTop:10,
    color:'#fff',
    fontSize:25
  },
  img:{
    height:SCREEN_WIDTH*.08089058524,
    width:SCREEN_WIDTH*0.08089058524,
    resizeMode:'contain',

  }
})


export default Heading