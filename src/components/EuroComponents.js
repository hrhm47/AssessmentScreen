import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

import { widthPercentageToDP as WP, heightPercentageToDP as HP } from '../utils/PixelRatio'
import { scale as SC } from '../utils/PixelRatio'


const width = Dimensions.get('window').width;
// console.log(width);

const EuroComponents = ({item}) => {
  return (
    <View
      style={{
        // flexDirection: 'column',
        // width: WP("21%"),
        justifyContent:"center",
        // alignItems: 'center',
        marginHorizontal: WP(2.5),
        padding: WP(1.5),
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={item.uri}
          style={{width: WP(8), height: HP(4), tintColor: item.color}}
        />
        <Text
          style={{
            marginTop: HP(.5),
            fontWeight: '800',
            color: item.color,
            letterSpacing: 1,
            fontSize: SC(13),
            // flexWrap: 'wrap',
          }}
           
          >
          {item.name}
        </Text>
      </View>
    </View>
  );
};

export default EuroComponents;
