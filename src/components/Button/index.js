import { useState, useEffects } from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default function index() {
  const [myState, setMyState] = useState(true);
  const [password, setPassword] = useState('');

  useEffects(() => {
    console.log('RN', error);
  },[])

  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}