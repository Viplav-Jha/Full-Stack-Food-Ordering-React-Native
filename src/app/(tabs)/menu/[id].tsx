import { StyleSheet, Text, View ,Image} from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products';
import { defaultPizzaimage } from '@/components/ProductListItem';

const ProductDetailsScreen = () => {
   const {id} =useLocalSearchParams();

   const product = products.find((p) =>p.id.toString() ===id)
   if(!product){
    return <Text>Product not found</Text>
   }
    
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product?.name}} />
      <Image source={{uri:product.image || defaultPizzaimage}} style={styles.image}/>
    <Text style={styles.price} >${product.price}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    padding:10
  },
  image:{
    width:"100%",
    aspectRatio:1,
  },
  price:{
    fontSize:18,
    fontWeight:'bold'
  }
})


export default ProductDetailsScreen;

