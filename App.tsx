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
      userName: "",
      phone: ""
    }
    this.GameScreen = this.GameScreen.bind(this)
    this.HomeScreen = this.HomeScreen.bind(this)
    this.onChangeUserName = this.onChangeUserName.bind(this)
    this.updatePhone = this.updatePhone.bind(this)
  }

  GameScreen({navigation}) {
    console.log(navigation)
    // const { navigation } = props.navigation;
    // const { mobile } = props.navigation.state.params.data
    // const { userName } = props.navigation.state.params.data
    // console.log("submitted: "+userName);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello {this.state.userName}</Text>
        <Text>Your number is: {this.state.phone}</Text>
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
  updatePhone(myNum: string){
    this.setState({
      phone: myNum,
    });
  }

  HomeScreen({ navigation }){ 
    const [missingUserNameError, setUserNameError] = React.useState(false)
    const [missingPhoneError, setPhoneError] = React.useState(false)
    const [phoneNum, setNumber] = React.useState("");

    function onChangeUserNameError(myBool: boolean){
      setUserNameError(myBool)
    }
    function onChangePhoneError(myBool: boolean){
      setPhoneError(myBool)
    }
    var myNum: string;
    function onChangePhone(newNum: string){
      myNum = newNum.replace(/[^0-9]/g, '');
      setNumber(myNum);
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
          <TextInput style={styles.box} keyboardType="numeric" maxLength={10} value={phoneNum} placeholder="Input your number" onChangeText={text=>{
            onChangePhone(text);
            this.updatePhone(myNum);
          }}/>
          {missingPhoneError ? <Text style={styles.error}>Please type in a phone number</Text> : null}

          <Button
            title="Submit"
            onPress={() => {
              if(this.state.userName == ""){
                return onChangeUserNameError(true)
              }
              if(phoneNum == ""){
                return onChangePhoneError(true)
              }
              onSubmit(navigation,this.state.userName,phoneNum)
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
    height: 350,
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
