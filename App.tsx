import { View, Text, StyleSheet } from 'react-native'
import {Lista} from './components/Lista'

function Lista_de_afazeres(){
  return(
    <View>
      <Text style={styles.titulo}>Lista de Afazeres Domésticos</Text>
      
      <Lista turno='Manhã' objeto={[
        ' 1.Lavar as roupas sujas.', 
        '\n 2. Lavar e guardar a louça', 
        '\n 3. Limpar a pia da cozinha', 
        '\n 4. Preparar o almoço.', 
        '\n 5. Colocar as roupas no varal.']}/>
      <Lista turno='Tarde' objeto={[' 1.Limpar a mesa da cozinha', 
      '\n 2.Varrer e passar o pano nos cômodos da casa',
       '\n 3.Lavar e guardar a louça',
        '\n 4.Limpar a pia da cozinha', 
        '\n 5.Tirar as roupas do varal']}/>
      <Lista turno='Noite' objeto={[
        ' 1.Levar o cachorr para passear',
        '\n 2.Limpar os calçados ultilizados durante o dia', 
        '\n 3.Prepararo jantar' 
      ]}/>
    </View>
  )
}
const styles = StyleSheet.create({
  titulo:{
    fontSize:20,
    color:'black',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
export default Lista_de_afazeres