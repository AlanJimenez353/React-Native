import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import {bootstrap } from "react-bootstrap";
import { StyleSheet,Text,View,TextInput,Button,FlatList,Modal } from "react-native";
import Home from "./screens/Home";

export const List = ({navigation})=> {

    const [list,setList]=useState([])
    const [textImput,setTextInput]= useState("")
    const [modalVisible,setModalVisible]=useState(false)
    const [itemSelected,setItemSelected] =useState({})
    //Funciones
    const onAdd= () =>{
        setList([...list,{ id: Math.floor(Math.random() *100) +1, value: textImput}])
    }
    
    const onHandlerModal= (item) => {
        setItemSelected(item)
        setModalVisible(true)
    }
    const onDelete= (id) => {
        setList(list.filter(item=>item.id!=id))
        setModalVisible(false)
    }


    return(
        <View style={styles.containerr}>
            <Modal visible={modalVisible} transparent animationType='slide'
                   onRequestClose ={ () => setModalVisible(false)}>
                <View style={styles.containerModal}>
                    <View style={styles.infoContainer}>
                        <Text style={{color:'white'}}>Estas seguro que deseas borrar {itemSelected.value}?</Text>
                        <View style={styles.containerButton}>
                            <Button style={styles.button} title='no' onPress={ () => setModalVisible(false)}></Button>
                            <Button style={styles.button} title='si' onPress={ () => onDelete(itemSelected.id)}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <Button title="Home" onPress={()=>navigation.navigate("home")} style={{}}></Button>
                <Text style={{fontSize:40, paddingLeft:70,color:'white'}}>Lista Toppics </Text>
             </View>   
                <View style={styles.containerInput}>
                    <TextInput placeholder="Escriba aqui" onChangeText={(text)=> setTextInput(text)} style={styles.input}/>
                    <Button title="Guardar" onPress={()=> onAdd()}/>
                </View>
                { list.length > 0 
                    ? <FlatList 
                        data={list}
                        ///Render funciona como map, por acada elemento del array data que le estoy pasando renderiza el elemento en la vista
                        renderItem = { data => (
                            <View style={ styles.containerItem}>
                                <Text style={{fontWeight: "bold", fontSize:20,color:'black'}}>{data.item.value}</Text>
                                <Button onPress={() => onHandlerModal(data.item)} title="Eliminar"/>
                            </View>
                        )}
                    keyExtractor = { (item) => item.id }
                    />
                    :
                    <Text /*style={{ paddingTop:"20px"}}*/ >No hay Tareas</Text>
                }
        </View>
    )

}
const styles= StyleSheet.create({
    containerr: {
         height:'100%',
         width:'100%',
         marginTop:20,
         borderRadius:20,
         alignItems:'center',
         shadowColor:'#000',
         shadowOffset:{
             width:0,
             height:2
         },
         shadowOpacity:0.4,
         elevation:5,
         backgroundColor:'grey'
    },
    textConteiner:{
    padding:'2%',
    alignItems:'center',

},
    containerInput:{
        flexDirection:"row",
        width:"100%",
        height:"5%",
        marginTop:"3%",
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:10
    },
    header:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#000b30',
        maxHeight:100,
        width:"100%",
        alignItems:'center',
        borderBottomColor: '3px solid rgb(0, 221, 221)',
        borderBottomWidth: 2,
        marginBottom:10
        
     },
    input:{
        borderColor:"black",
        borderWidth:4,
        width:"70%",
        backgroundColor:'white',
        borderRadius:10,
        height:'98%',
       // placeholderTextColor:'black',
        shadowColor:'black',
        borderColor:'black',
    },
    containerItem:{
        flexDirection:'row',
        width:"77%",
        padding:10,
        marginLeft:5,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginVertical:"3%",
        borderColor:'black',
        borderWidth:4,        
        
    },
    containerModal:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height:'100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    infoContainer:{
        backgroundColor: "black",
        borderColor:'3px solid rgb(0, 221, 221)',
        borderWidth:4,
        width:'60%',
        height:'25%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    containerButton: {
        flexDirection:'row',
        width:"70%",
        justifyContent:'space-between',
        padding:20,
        borderWidth:5,
    },
    button:{
            width:'0%',
            height:'20%',
            backgroundColor:'black'
    },
    card:{
        width:300,
        height:200
    },
});

