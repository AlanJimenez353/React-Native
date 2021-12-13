import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { Modal,bootstrap } from "react-bootstrap";
import { StyleSheet,Text,View,TextInput,Button,FlatList } from "react-native";

export const List = ()=> {

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
                        <Text>Estas seguro que deseas borrar {itemSelected.value}?</Text>
                        <View style={styles.containerButton}>
                            <Button style={styles.button} title='no' onPress={ () => setModalVisible(false)}></Button>
                            <Button style={styles.button} title='si' onPress={ () => onDelete(itemSelected.id)}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.containerInput}>
                <TextInput placeholder="Escriba aqui" onChangeText={(text)=> setTextInput(text)} style={styles.input}/>
                <Button title="Add" onPress={()=> onAdd()}/>
            </View>
            { list.length > 0 
                    ? <FlatList 
                        data={list}
                        ///Render funciona como map, por acada elemento del array data que le estoy pasando renderiza el elemento en la vista
                        renderItem = { data => (
                            <View style={ styles.containerItem}>
                                <Text style={{fontWeight: "bold", fontSize:20,color:'black'}}>{data.item.value}</Text>
                                <Button onPress={() => onHandlerModal(data.item)} title="X"/>
                            </View>
                        )}
                    keyExtractor = { (item) => item.id }
                     />
                    :
                    <Text>No hay Tareas</Text>
            }
        </View>
    )

}
const styles= StyleSheet.create({
    containerr: {
         height:'100%',
    },
    containerInput:{
        flexDirection:"row",
        width:"100%",
        height:"10%",
        marginTop:"3%",
        justifyContent:"space-around",
        alignItems:"center"
    },
    input:{
        borderBottomColor:"grey",
        borderBottomWidth:5,
        width:"70%"
    },
    containerItem:{
        width:"90%",
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        marginVertical:"3%"
    },
    containerModal:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height:'100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    infoContainer:{
        backgroundColor: "white",
        width:'60%',
        height:'25%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    containerButton: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        height:'20%'
    },
    button:{
        width:'0%',
        height:'20%'
    }
});

