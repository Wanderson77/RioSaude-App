import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';

export default function Index() {
  const [user, setUser] = useState("");
  return (
    <View style={styles.container}>
      <Text>Mobile Marketing</Text>
      <TextInput></TextInput>
    </View>
  )
}