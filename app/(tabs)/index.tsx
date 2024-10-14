import React from 'react';
import {View} from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      />
      Powderblue
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
        }}
        jjjjjjjjjjjjjj
      />
      Skyblue
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'steelblue',
        }}
      />
      Steelblue
    </View>
  );
};

export default FixedDimensionsBasics;