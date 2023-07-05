import { useEffect } from 'react';
import { Text } from 'react-native';

export default function Sub1() {
  useEffect(() => {
    console.log("MOUNTED: sub1")
  }, []);

  return (
    <>
      <Text>Sub</Text>
    </>
  )
}