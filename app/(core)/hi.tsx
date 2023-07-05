import { memo, useEffect } from 'react';
import {Text} from 'react-native';

export default memo(function Hi() {
  useEffect(() => {
    console.log("MOUNTED")
  }, []);


  return <Text>Hi</Text>
})