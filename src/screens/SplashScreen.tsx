import React, { useState, useEffect } from "react";
import { StyleSheet,View,Text} from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH} from "../utils/diemention";
// import { Icons } from "../assets";
// import { ScreenNames } from "../navigator/screenNames";

interface SplashScreenProps {
    navigation: any;
  }

  const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
 
   
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        navigation.navigate("Home");
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);

  
    return(
        
        <View style={styles.container}>
          <Text style={styles.headingtext}>
            Hello
          </Text>
          <Text style={styles.splashText}>
            Track Your Expenses
          </Text>
          
        </View>
       
  
    )
}
export default SplashScreen;
const styles=StyleSheet.create({
   
    container:
    {
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'#347deb',
    },
    headingtext:
    {
      fontSize:SCREEN_HEIGHT*0.05,
      fontWeight:'bold',
      color:'#fff'
    },
    splashText:
    {
      fontSize:SCREEN_HEIGHT*0.05,
      fontWeight:'400',
      color:'#fff'
    }
})