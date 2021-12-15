import{Text,View,StyleSheet} from 'react-native'
import React from 'react';
import { Image } from 'react-native-elements';
const Home= () =>{
    

    return(
        <View style={styles.screen}>
            
            <View style={styles.header}><Text style={{fontSize:40, paddingLeft:70,color:'white'}}>Home Screen</Text></View>
            <View style={styles.container}>
                <View style={[styles.box, { backgroundColor: "#3c3938" }]}> 
                    <Image  source={require('./imgs/music.png')}  style={{ width: "80%", height: "80%",borderRadius:20 ,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3
}}/>
                    <Text style={{fontSize:18, paddingLeft:32,fontWeight: 'bold',color:'white'}}>Musica</Text>
                </View>
                <View style={[styles.box, { backgroundColor: "#3c3938" }]}>
                    <Image  source={require('./imgs/cine.jpg')}  style={{ width: "80%", height: "80%",borderRadius:20,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3}}/>
                    <Text style={{fontSize:18, paddingLeft:45,  fontWeight: 'bold',color:'white'}}>Cine</Text>    
                </View>
            </View>


            <View style={styles.container}>
                <View style={[styles.box, { backgroundColor: "#3c3938" }]}>
                    <Image  source={require('./imgs/politic.jpg')}  style={{ width: "80%", height: "80%",borderRadius:20,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3 }}/>
                    <Text style={{fontSize:18, paddingLeft:32,fontWeight: 'bold',color:'white'}}>Politica</Text>
                </View>
                <View style={[styles.box, { backgroundColor: "#3c3938" }]}> 
                    <Image  source={require('./imgs/games.jpg')}  style={{ width: "80%", height: "80%",borderRadius:20,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3 }}/>
                    <Text style={{fontSize:18, paddingLeft:32,fontWeight: 'bold',color:'white'}}>Gaming</Text>
                </View>
            </View>


            <View style={styles.container}>
                <View style={[styles.box, { backgroundColor: "#3c3938" }]}>
                    <Image  source={require('./imgs/random.png')}  style={{ width: "80%", height: "80%",borderRadius:20,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3 }}/>
                    <Text style={{fontSize:18, paddingLeft:32,fontWeight: 'bold',color:'white'}}>Random</Text>
                </View>
                <View style={[styles.box, { backgroundColor: "#3c3938" }]}>
                    <Image  source={require('./imgs/coding.jpg')}  style={{ width: "80%", height: "80%",borderRadius:20,borderColor: '3px solid rgb(0, 221, 221)',borderWidth:3 }}/>
                    <Text style={{fontSize:18,fontWeight: 'bold',paddingLeft:5,color:'white'}}>Programacion</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    
    imgstyle:{
        width:50,
        height:50
    },
    screen:{
        height:110,
        flex:1,
        backgroundColor:'black'
    },
    container: {
    flex: 1,
    flexDirection:'row',
    marginTop: 8,
    backgroundColor: "aliceblue",
    justifyContent:"space-around",
    backgroundColor:'black',
    marginBottom:10
  },
  header:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#000b30',
    maxHeight:100,
    alignItems:'center',
    borderBottomColor: '3px solid rgb(0, 221, 221)',
    borderBottomWidth: 2,
    marginBottom:10
    
  },
  box: {
    width: "45%",
    height: "100%",
    borderColor:'3px solid rgb(0, 221, 221)',
    borderWidth:2,
    alignContent:'center',
    paddingTop:30,
    paddingLeft:23
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"space-around"

  }

})
export default Home