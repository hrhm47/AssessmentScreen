import { View, Text } from 'react-native'
import React from 'react'

import { widthPercentageToDP as WP   } from '../utils/PixelRatio'
import { heightPercentageToDP as HP   } from '../utils/PixelRatio'


const Home = () => {
  return (
    <View style={{justifyContent:'center', alignItems:"center",flex:1,backgroundColor:"#16267f"}}>
    <Text style={{color:'white'}}>Home</Text>
  </View>
  )
}

export default Home