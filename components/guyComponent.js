import React from 'react';
import {Image,Text} from "react-native";

function guyComponent(props) {
    return (
        <View style={{flex: 1}}>
            <Image style={styles.image} source={require("../assets/title.png")}></Image>
            <Text>Welcome!</Text>
        </View>
       
    );
}

const styles = StyleSheet.create({
    image:{
        width:600, 
        height:100, 
        marginBottom: 25
    }
})

export default guyComponent;