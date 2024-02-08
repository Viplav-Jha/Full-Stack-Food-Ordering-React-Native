import { StyleSheet,Text,View,Image } from 'react-native';
import Colors from '../../../src/constants/Colors';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';


export default function MenuScreen() {
  return (
   <View>
    <ProductListItem product={products[0]}/>
    <ProductListItem product={products[1]}/>
   </View>
  );
}

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
