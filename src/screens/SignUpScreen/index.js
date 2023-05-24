import {
  useState,
  useEffect
} from 'react'
import { SafeAreaView, View, Text, SafeAreaView } from 'react-native'
import styles from './styles'

const SignUpScreen = () => {
  const [data, setData] = useState(false);

  async function fetchAPI() {
    try {

    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <View>Loading</View>
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.welcome}>RN</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen