import { StyleSheet, Text, View,Button } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import store from './redux';
import {plus,minus} from './slice'
export function Item(){

    const count = useSelector(state=>state.reducerNumber.total);
    const dispatch = useDispatch();

return (<View><Button title="+" onPress={()=>{
    // add one
    dispatch(plus({TYPE:'GO'}));
}}></Button><Button title="-" onPress={()=>{
    // minus one 
    dispatch(minus());
}}></Button>
<Text>{count}</Text>
</View>)
}