import { StyleSheet,Text,View,Image } from 'react-native';
import Colors from '../../src/constants/Colors';


const ProductListItem =({product}) =>{
  return (
    <View style={styles.container}>
    <Image source={{uri:product.image}} style={styles.image}/>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.prices}>${product.price}</Text>
  </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
  },
  image:{
   width:'100%',
   aspectRatio:1
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginVertical:10
  },
  prices:{
    color:Colors.light.tint,
    fontWeight:'bold'
  }
});
