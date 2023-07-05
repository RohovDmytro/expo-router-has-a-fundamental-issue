import { Link } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';



export default function Index() {
  useEffect(() => {
    console.log("MOUNTED: index")
  }, []);


  return (
    <View style={{ padding: 24 }}>
      <Link href={'tab1'}>Go to: tab1</Link>
      <View style={{ height: 24 }} />
      <Link href={'sub1'}>Go to: sub1</Link>
    </View>
  )
}