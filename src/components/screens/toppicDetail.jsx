import React from "react";
import{Text,View,StyleSheet} from 'react-native'


const toppicDetail= () =>{

    return(
        <View style={styles.screen}>
            <Text>Toppic Detail Screen</Text>
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
export default toppicDetail