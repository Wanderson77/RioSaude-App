import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

const index = () => {
  const [error, setError] = useState('');
  useEffect(() => {},[]);
  return (
    <SafeAreaView>
      <View>
        <Text>index</Text>
      </View>
    </SafeAreaView>
  )
}

export default index
