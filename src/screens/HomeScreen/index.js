import {
  useState,
  useEffect
} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  Platform
} from 'react-native';

const Home = ({ route }) => {
  const [data, setData] = useState([]);
  const { item } = route.params;
  const greeting = 'Hello';

  async function fetchAPI() {
    try {

    } catch (error) {
      console.log('Failed to fetch API', error);
    }
  }

  if(!loading) {
    return <View>Working</View>;
  }

  useEffect(() => {
    console.log('Component rendered');
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Home Delivery address: </Text>
          <Text style={styles.text}>{item}</Text>
          <Image
            style={styles.image}
          ></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
