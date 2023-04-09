import {View, Text} from 'react-native';
import React from 'react';
import { scale as SC } from '../utils/PixelRatio'
const WalletText = () => {
  return (
    <>
      <Text
        style={{
          fontSize: SC(21),
          color: 'white',
          fontFamily: 'Roboto',
          letterSpacing: 1,
          fontWeight: 'bold',
        }}>
        EURO 9,22
      </Text>
      <Text
        style={{
          fontSize: SC(12),
          color: 'white',
          fontFamily: 'Roboto',
          letterSpacing: 1,
        }}>
        Combine Wallet Value
      </Text>
    </>
  );
};

export default WalletText;
