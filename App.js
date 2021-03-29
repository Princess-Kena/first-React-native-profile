import React from 'react';
import { Text,  View, StyleSheet, Image} from 'react-native';
 import profile from './assets/profile.jpg'

function App(){
return <View style={styles.container}>
        <Image source={profile} style={styles.image}/>
  
  <View style={styles.profileDetails}>
    <Text style={styles.label}>Name</Text>
    <Text style={styles.info}>Shakana Page</Text>
  </View>

  <View style={styles.profileDetails}>
    <Text style={styles.label}>Email</Text>
    <Text style={styles.info}>Shakana@gmail.com</Text>
  </View>

  <View style={styles.profileDetails}>
    <Text style={styles.label}>Gender</Text>
    <Text style={styles.info}>Female</Text>
  </View>

</View>
}
const styles = StyleSheet.create({
container:{
  flex :1,
  marginHorizontal:10
},
image:{
  width:180,
  height:180,
  marginBottom:30,
  alignSelf:'center',
  borderRadius:90,
marginTop:150,
  
},
profileDetails:{
  flexDirection:"row",
  marginVertical: 3,
},
label:{
  borderColor:"black",
  borderWidth:1,
  flex :2,
  fontSize:20,
  paddingHorizontal:5,
},
info:{
flex:8,
borderColor:"black",
borderWidth:1,
  fontSize:20,
  paddingHorizontal:5,
}
   
});


export default App;