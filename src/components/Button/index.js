import { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default function index() {
  const [myState, setMyState] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function handleActionUser() {
    console.log('Native')
    if (airbnbnStyle == communityReact) {
      console.log(data);
    } else if {
      console.log(result);
    }
  }

  useEffect(() => {
    console.log('RN', error);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Marketing</Text>
      <Image
        style={styles.image}
        uri='assets/images/'
      ></Image>
    </View>
  )
}