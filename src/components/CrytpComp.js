import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';

import { widthPercentageToDP as WP, heightPercentageToDP as HP } from '../utils/PixelRatio'
import { scale as SC } from '../utils/PixelRatio'


const {width, height} = Dimensions.get('window');




const CrytpComp = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        // flexDirection: 'row',
        width: WP(90),
        margin: HP(2),
        height: HP(12),
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: WP(3),
      }}>
      <View style={{
        flexDirection:"row",
        // justifyContent:"space-evenly", 
          alignItems: 'center',
          flexDirection: 'row',
          left: WP(4)
         }}>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Image source={item.uri} style={{width: WP(14), height: HP(7.5)}} resizeMode='contain'/>
        </View>
        <View style={{justifyContent:"center",left:WP(4)}}>
          <Text
            style={{
              fontSize: SC(20),
              fontWeight: '700',
              color: item.color,
              letterSpacing: 1,
            }}>
            {item.name}
          </Text>
          {/* <Text style={{marginTop: 5, fontWeight: '700', letterSpacing: 1}}>
            {item.value}
          </Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CrytpComp;
