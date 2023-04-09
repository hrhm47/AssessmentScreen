import { View, Text,StyleSheet,Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import WalletText from '../components/WalletText'
import EuroComponents from '../components/EuroComponents'
import CrytpComp from '../components/CrytpComp'
import { Data1,Data2 } from '../utils/Data'
import { widthPercentageToDP as WP, heightPercentageToDP as HP } from '../utils/PixelRatio'


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Header = () => {
  return (
    <>
    
    <View style={styles.background}>
      <View style={styles.ovalSection}>
       <WalletText/>
      </View>
      <View style={styles.primaryView}>
      <FlatList
      style={{marginTop:HP(8)}}
            data={Data2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return(<CrytpComp item={item}/>)}} />

      </View>
      <View style={styles.buysell}>
        <FlatList
            data={Data1}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return(<EuroComponents item={item}/>)}}horizontal={true}/>
      </View>
    </View>
    </>
            
    
  )
}



const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ECF3F9",
    flex: 1,
    // flexDirection: "column"
  },
  primaryView: {
    // backgroundColor: "#F5F5F5",
    // position:"relative",
    backgroundColor: "#ECF3F9",
    flex: 2,
    // marginTop:HP(10)
  },
  ovalSection: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent:"center",
    backgroundColor: "#16267f",
    borderBottomLeftRadius: (width*0.45),
    borderBottomRightRadius:(width *0.45),
    width: WP(150)
  },
  buysell:{
      position:"absolute",
      // width:WP(85),
      height:HP(11),
    //   justifyContent:"center",
      alignSelf:"center",
      backgroundColor:"white",
      marginTop:HP(25), 
      borderRadius:WP(3)
}
});


export default Header