import { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

export default function ProfileScreen() {
  const [error, setError] = useState({});

  useEffect(() => {
    alert("RN Profile mounted")
  }, []);
  
  return (
    <SafeAreaView>
      <View>
        <Text>ProfileScreen</Text>
        <TouchableOpacity>1.0</TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}