import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Heading from '../component/Heading'
import { Icons } from '../assest/icons'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/diemention'
import Footer from '../component/footer'
import { screenNames } from '../navigator/screenNames'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Heading text={"Hey, Changemaker"} image={Icons.profile}/>
        <ScrollView>
        <View>
         
          <View style={styles.row}>
            <TouchableOpacity style={styles.space} onPress={()=>{navigation.navigate(screenNames.ExpenseManagement)}}>
            <View style={styles.inner}>
           <Image source={Icons.expenses} style={styles.img}/>
           <Text style={styles.font}>Expense Managment</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.space} onPress={()=>{navigation.navigate(screenNames.IncomeManagement)}}>
            <View style={styles.inner}>
            <Image source={Icons.salary} style={styles.img}/>
           <Text style={styles.font}>Income Managment</Text>
           </View>
           </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.space} onPress={()=>{navigation.navigate(screenNames.DetailsInsight)}}>
            <View style={styles.inner}>
           <Image source={Icons.list} style={styles.img}/>
           <Text style={styles.font}>Details Insight</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.space} onPress={()=>{navigation.navigate(screenNames.Expandin)}}>
            <View style={styles.inner}>
            <Image source={Icons.budget} style={styles.img}/>
           <Text style={styles.font}>Expense and Income </Text>
           </View>
           </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.space} onPress={()=>{navigation.navigate(screenNames.Datavisulization)}}>
            <View style={styles.inner}>
           <Image source={Icons.datavisualization} style={styles.img}/>
           <Text style={styles.font}>Data Visualization</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={[styles.space,{paddingHorizontal:30}]}onPress={()=>{navigation.navigate(screenNames.Search)}}>
            <View style={styles.inner}>
            <Image source={Icons.search} style={styles.img}/>
           <Text style={styles.font}>Search </Text>
           </View>
           </TouchableOpacity>
          </View> 
        </View>
        </ScrollView>
        <Footer/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:
  {
    flex:1,
  },
  row:
  {
    flexDirection:'row',
    
  },
  img:
  {
    height:300,
    width:175,
    resizeMode:'contain'
  },
  inner:
  {
    justifyContent:'center',
    alignItems:'center',
  },
  font:
  {
    fontSize:20,
  },
  space:
  {
    padding:10,
  }
})