import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 400, width: 400 }}
        resizeMode= "cover"
        source={require('./assets/meri.jpg')}
        ></Image>
        <Text>Apua</Text>

        <Image
        style={{ height:400, width: 400}}
        resizeMode="cover"
          source={{uri:
          "https://images.unsplash.com/photo-1591730206597-78c9874aad5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"}}></Image>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f08be1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hi: {
    fontSize: 32,
    margin: 12
  },
});


{/**{    <View style={styles.container}>
    <Text style={styles.h1}>Otsikko 1</Text>
    <Text style={{fontSize: 26, marginTop: 12}}>Otsikko 2</Text>
    <Text style={{fontSize: 22, marginTop: 12}}>Otsikko 3</Text>
    <Text style={{fontSize: 18, marginTop: 12}}>Otsikko 4</Text>
    <Text style={styles.h1}>Otsikko 1</Text>
    <Text>{"\n"}</Text>
    <Text style={{color: "green"}}>Leipäteksti</Text>
    <Text style={{fontStyle: "italic"}}>Kursiivi</Text>
    <Text style={{fontWeight: "bold"}}>Lihavoitu</Text>
    <Text style={{textDecorationLine: "underline"}}>
     Alleviivattu
    </Text>
    <Text>Kaikilla mausteilla</Text>

   </View>}

         <View style={{backgroundColor: 'blue', height: 80, width: 60}}/>
      <View style={{backgroundColor: 'red', height: 90, width: 60}}/>
      <View style={{backgroundColor: 'green', height: 80, width: 80}}/>
      <View style={{backgroundColor: 'black', height: 120, width: 60}}/>
      <View style={{backgroundColor: 'orange', height: 80, width: 60}}/>
      <View style={{backgroundColor: 'pink', height: 80, width: 120}}/>
      <View style={{backgroundColor: 'yellow', height: 80, width: 60}}/>
  

          flexDirection: "row",
    flexWrap: "wrap",
  */}