import{Text,View,StyleSheet} from 'react-native'
import React from 'react';

const Home= () =>{

    return(
        <View style={styles.screen}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})
export default Home