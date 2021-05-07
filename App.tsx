import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Dimensions, Image } from 'react-native';
import Constants from "expo-constants";
import {useNavigation,NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function onSubmit(navigation, userName: string, mobile: string){
  console.log("submitted: "+userName);
  console.log("phone: "+mobile);
  navigation.navigate('WysparGaming: The Game', { userName: userName, mobile: mobile})
}

const Stack = createStackNavigator();
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile:"",
      userName: "",
    }
    this.GameScreen = this.GameScreen.bind(this)
    this.HomeScreen = this.HomeScreen.bind(this)
    this.onChangeUserName = this.onChangeUserName.bind(this)
    this.onChangedNumber = this.onChangedNumber.bind(this)

    
  }

  GameScreen({navigation}) {
    console.log(navigation)
    // const { navigation } = props.navigation;
    // const { mobile } = props.navigation.state.params.data
    // const { userName } = props.navigation.state.params.data
    // console.log("submitted: "+userName);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Game Screen</Text>
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('HomeScreen')}
        /> */}
      </View>
    );
  }

  
  onChangeUserName(user: string){
    this.setState({
      userName: user,
    });
  }

  //this updates whenever the user types in a number
  onChangedNumber (text: string) {
    this.setState({
      mobile: text.replace(/[^0-9]/g, ''),
    });
    console.log(this.state.mobile);
  }

  HomeScreen({ navigation }){ 
    const [missingUserNameError, setUserNameError] = React.useState(false)
    const [missingPhoneError, setPhoneError] = React.useState(false)

    function onChangeUserNameError(myBool: boolean){
      setUserNameError(myBool)
    }
    function onChangePhoneError(myBool: boolean){
      setPhoneError(myBool)
    }

    return(
      <View style={styles.outer}>
        <Image style={{ width:600, height:100, marginBottom: 25}} source={require("./assets/title.png")}/>
        <View style={styles.container}>
          <Text style={{ alignSelf: 'center'}}>
            User Name:
          </Text>
          <TextInput style={styles.box} placeholder="Input your username" maxLength={60} onChangeText={(value)=>{
            this.onChangeUserName(value)
          }}/>
          {missingUserNameError ? <Text style={styles.error}>Please type in a username</Text> : null}

          <Text style={{ alignSelf: 'center'}}>
            Phone Number:
          </Text>
          <TextInput style={styles.box} keyboardType="number-pad" value={this.state.mobile} maxLength={10}  placeholder="Input your number"  onChangeText={(value)=>{
            this.onChangedNumber(value);
          }}/>
          {missingPhoneError ? <Text style={styles.error}>Please type in a phone number</Text> : null}

          <Button
            title="Submit"
            onPress={() => {
              if(this.state.userName == ""){
                return onChangeUserNameError(true)
              }
              if(this.state.mobile == ""){
                return onChangePhoneError(true)
              }
              onSubmit(navigation,this.state.userName,this.state.mobile)
            }}
          ></Button>
        </View>
      </View>
    );
    
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="WysparGaming" component={this.HomeScreen} />
          <Stack.Screen name="WysparGaming: The Game" component={this.GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  outer: {
    width: 300,
    height: 325,
    alignItems: 'center',
    alignContent: "center",
    alignSelf: "center",
    marginTop: Dimensions.get('window').height/4,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#a3a096",
  },
  box: {
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    width:200,
    backgroundColor: "white",
  },
  error:{
    color: "red"
  }
});
