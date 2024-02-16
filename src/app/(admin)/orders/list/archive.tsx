import orders from '@assets/data/orders'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import OrderListItem from '@/components/OrderListItem'


export default function OrderScreen() {
  return (
    <View>
     <FlatList 
      data={orders}
      renderItem={({item})=><OrderListItem order ={item}/>}
     />
    </View> 
  )
}

