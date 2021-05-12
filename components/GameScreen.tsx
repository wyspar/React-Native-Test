import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, View, BackHandler, TouchableHighlight } from 'react-native';
import Constants from "expo-constants";

const styles = StyleSheet.create({
  containerScroll: {
    flex:1
  },
  containerView:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'skyblue'
  },
  boxArmFeet: {
    width: 150,
    height: 100,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'skyblue'
  },
  boxLeg:{
    width: 100,
    height: 200,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'skyblue'
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'steelblue'
  },
  fancyTextLabel: {
    color: "yellow",
    fontStyle: "italic",
  },
  touchable: {

  }
});

function onClick(){
 alert("Pressed me!")
}


export default class GameScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // userName: "",
      // phone: ""
    }
    this.runGameScreen = this.runGameScreen.bind(this)
  }

  MyImage = (props: { thing: string; }) => (
    <View style={{ marginTop: 50 }}>
      <Image style={{ width:100, height:100 }} source={require(props.thing)}/>
    </View>
  );

  runGameScreen(){
    const [ isPress, setIsPress ] = React.useState(false);
    const touchProps = {
      activeOpacity: 2,
      underlayColor: 'red',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      styles, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log(isPress),                 // <-- "onPress" is apparently required
    };
    return(  
      <View style={styles.containerView}>
        <TouchableHighlight style={styles.touchable} {...touchProps}>
        <this.MyImage thing='./assets/guy1.png'></this.MyImage>
        </TouchableHighlight>
        
        
        <ScrollView horizontal>
            <TouchableHighlight style={styles.touchable} onPress = { onClick }>
            <View style={styles.boxArmFeet}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchable} onPress = { onClick }>
            <View style={styles.boxSmall}></View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchable} onPress = { onClick }>
            <View style={styles.boxArmFeet}></View>
            </TouchableHighlight>
            
            
        </ScrollView>
        <ScrollView horizontal>
            <View style={styles.boxLeg}></View>
            <View style={styles.boxLeg}></View>
        </ScrollView>
        <ScrollView horizontal>
            <View style={styles.boxArmFeet}></View>
            <View style={styles.boxArmFeet}></View>
        </ScrollView>
        
        <Text style={styles.fancyTextLabel}>Bruh feet</Text>
      </View>
    );
  }

  render(){

    return (
      <ScrollView style={styles.containerScroll}>
        {this.runGameScreen()}
      </ScrollView>
    );
  }
}


