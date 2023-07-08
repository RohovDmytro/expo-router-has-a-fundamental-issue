import { Link } from 'expo-router'
import { View } from 'react-native'

export const Nav = () => {
  return (
    <View style={{ padding: 24, bottom: 0, position: 'absolute' }}>
      <Link href={'tab1'}>Go to: tab1</Link>
      <View style={{ height: 24 }} />
      <Link href={'slot1'}>Go to: slot1</Link>
      <View style={{ height: 24 }} />
      <Link href={'slot2'}>Go to: slot2</Link>
    </View>
  )
}