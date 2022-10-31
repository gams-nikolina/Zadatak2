import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
       <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nikolina Gams</Text>
        <Text style={styles.subtitle}>ngams@ffos.hr</Text>
        <Text style={styles.subtitle}>095/5662257</Text>
        <Image
          style={{
              borderColor: "black",
          borderWidth: 2,
          height: 100,
          width: 100
          }}
          
          source={require('./assets/Nikolina.jpg')}
        />
        </View>
        
        
         <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <FlatList
          data={[
            { key: 'O MENI:' },
            
            { key: '•Komunikativna, vesela, željna novih znanja i iskustva' },
            { key: 'VJEŠTINE:' },
            { key: '• Vrlo dobro znam komunicirati s ljudima te sam tu vještinu dodatno razvila na različitim praksama i radnim mjestima' },
            { key: '• Izvrsno poznavanje engleskog jezika ' },
            { key: '• Izrada mrežnih stranica putem HTML-a i CSS-a' },
            { key: 'RADNO ISKUSTVO:' },
            { key: '• Rad na anketama, Ipsos i Valicon ' },
            { key: 'Rad na telefonskim anketama gdje sam morala komunicirati s velikom količinom ljudi te ih poticati na rješavanje ankete.' },
            { key: '• Rad u kopiraoni, Turbo Copy Đakovo ' },
            { key: 'Posluživanje korisnika, rad na uvezivanju knjiga, ispisu materijala te kreativni rad kao što je izrada dizajna koji se tiska na šalice, majice i slično.' },
             { key: 'OBRAZOVANJE:' },
             { key: '• Jezična gimnazija, Antuna Gustava Matoša, Đakovo' },
              { key: '• Informatologija, Filozofski Fakultet Osijek - stečeno zvanje: univ.bacc.informatol. ' },
              { key: '• Studij Informacijskih tehnologija i Nakladništva ' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>{item.key}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
       
      
     
      <View style={styles.footer}>
 
  </View>
  <Text style={styles.footer}>Nikolina Gams</Text>
      <Text style={styles.footer}>♥</Text>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#ebe7e8",
  },
  header: {
    borderBottomWidth: 2,
    padding: 10,
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  subtitle:{
    textAlign:'center'
  },
  footer: {
    fontSize: 10,
    textAlign:'center'
  },
 
  
 
});
