import {View, Text, StyleSheet} from 'react-native'

type Props={
  turno:string,
  objeto:string[]
}
export const Lista = (props:Props)=>{
  return (
    <View>
      <Text style={styles.turno}>{props.turno}</Text>
      <Text style={styles.obj}>{props.objeto}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  turno:{
    fontSize:15,
    color:'black',
    textAlign: 'left',
    fontWeight: 'bold',
    padding:5
  },
  obj:{
    color:'black',
    
  }
})

export default Lista