import React, { useState } from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default function index() {
  const [myState, setMyState] = useState(true)
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}