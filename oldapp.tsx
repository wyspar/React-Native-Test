// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { SafeAreaView, ScrollView, StyleSheet, Image, Text, View } from 'react-native';
// import { grassClass} from "./models/grassClass";

// var theMapClassHolder = [];

// var mapOfTerrain = [];
// var things = [];
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: 'gray',
//   },
//   scrollView: {
//     backgroundColor: 'gray',
//     flex: 1, 
//     flexDirection: "row",
//     marginHorizontal: 0,
//   },
//   grassStyle: {
//     width: 100,
//     height: 100,
//     zIndex: 1,
//   },
//   guy1Style:{
//     width: 100,
//     height: 100,
//     zIndex: 3,
//   }
// });

// export default function App() {
//   //var globalGrass = new grassClass('grass.png',false);
//   //var guy1 = ['guy1.png',100];
//   renderMap();
//   return (
    
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         {mapOfTerrain}
//         {things}
//       </ScrollView>
//     </View>
//     // <View style={styles.container}>
//     //   <Text>Open up App.tsx to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//   );
// }

// function renderMap() {
//   for (let index = 0; index < 7; index++) {
    
    
//     if(index == 1){
//       var newGrass = new grassClass('grass.png',true)
//       mapOfTerrain.push(
//         <Image
//           style={styles.grassStyle}
//           source={require('./assets/'+newGrass.source)}
//         />
//       )
//       things.push(
//         <Image
//           style={styles.guy1Style}
//           source={require('./assets/'+'guy1.png')}
//         />

//       )
//     }else{
//       var newGrass = new grassClass('grass.png',false)
//       mapOfTerrain.push(
//         <Image
//           style={styles.grassStyle}
//           source={require('./assets/'+newGrass.source)}
//         />
//       )
//     }
//     theMapClassHolder.push(newGrass);
    
//   }
// }

