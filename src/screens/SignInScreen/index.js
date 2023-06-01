import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './styles/';

const SignInScreen = () => {
  const [user, setUser] = useState('');

  const handleSignIn = () => {
    const greeting = 'Hello FB SignIn!';
    try {

    } catch (error) {
      console.log(data);
    }
    finally {

    }
  };

  return (
    <View>
      <Text></Text>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={handleSignIn}
      >1</TouchableOpacity>
    </View>
  )
}

export default SignInScreen