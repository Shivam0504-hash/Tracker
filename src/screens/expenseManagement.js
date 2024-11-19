import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icons } from '../assest/icons'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/diemention'
import { screenNames } from '../navigator/screenNames'
import DateInput from '../component/dateInput'
import { TextInput } from 'react-native-paper'
import CategoryInput from '../component/category'
import ButtonInput from '../component/button'


const ExpenseManagement = ({ navigation }) => {

  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note,setNote]=useState('');



  return (
    <View >
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
        <Image source={Icons.left} style={styles.img}/>
    </TouchableOpacity>
        <Text style={styles.text}>Add Transaction</Text> 
  </View>

  

    <View style={styles.inputcontainer}>
  <DateInput
              label='Date'
              value={date}
              onChangeDate={setDate}
            />
   <TextInput
               label='Amount'
               value={amount}
               onChangeText={setAmount}
               mode="outlined"
               style={styles.input}
              keyboardType="numeric"
              outlineColor='#E7EBF3'
              theme={{roundness:30}}
            />
            <CategoryInput
              label='Category'
              value={category}
              onChangeValue={setCategory}
            />
             <TextInput
            label={'Note'}
            value={note}
            onChangeText={setNote}
            keyboardType={'default'}
            mode={'outlined'}
            style={styles.input}
            outlineColor='#E7EBF3'
            theme={{roundness:30}}
          />
          <ButtonInput text={"Add Expenses"}/>

          </View>
          
  </View>
  )
}

export default ExpenseManagement

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
    inputcontainer:
    {
        
    },
    input:
    {
        marginBottom:15,
    }

})