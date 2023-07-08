import { memo, useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function Tab1(){
  useEffect(() => {    
    console.log("MOUNTED: tab1")
  }, []);

  return <Text>Tab1</Text>
};