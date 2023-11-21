import { View, Text, SafeAreaView, Button } from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'
import styles from './styles'

const ProductScreen = () => {
  const product = useSelector((state) => state.vehicle.product)
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    {
      Object.entries(product).map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.label}>{item[0]}</Text>
          <Text style={styles.value}>{item[1]}</Text>
        </View>
      ))
    }
    <Button title="Go to Home" onPress={() => navigation.navigate('Year')} />
  </SafeAreaView>
  )
}

export default ProductScreen;