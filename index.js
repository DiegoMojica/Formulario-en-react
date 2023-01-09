import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Mask} from "react-native";
import {  TextInputMask  } from ' reaccionar-texto-enmascarado-nativo ';

export default class  formsApp extends Component {
  constructor(){
    super()

    this.state = {
      fecha: '',
      nombre: '',
      correo: '',
      telefono: '',
      cedula: '',
      expedicion: ''
    }
  }
  changeFecha(fecha){
    this.setState({fecha})
  }
  changeNombre(nombre){
    this.setState({nombre})
  } 
  changeCorreo(correo){
    this.setState({correo})
  }
  changeTelefono(telefono){
    this.setState({telefono})
  }
  changeCedula(cedula){
    this.setState({cedula})
  }
  changeExpedicion(expedicion){
    this.setState({expedicion})
  }
  //Texto que muestra despues darle al boton
  buttonPressed(){
    if(this.state.fecha && this.state.nombre && this.state.correo && this.state.telefono && this.state.expedicion){
      Alert.alert('Completado :)')
    }else {
      Alert.alert('Completa los campos :)')
    }
    
  }
  render() {
    return(
      <View style = {styles.container}>
        <View>
          <Text style={styles.title}>FORMULARIO</Text>


          <TextInputMask
            type={'datetime'}
            options={{
            format: 'DD/MM/YYYY'
          }} 
            style= {styles.input}
            placeholder="Fecha que se hace el formulario"
            value={this.state.fecha}
            onChangeText={(fecha) => this.changeFecha(fecha)}
          />


          <TextInput
            style= {styles.input}
            placeholder="Nombre"
            value={this.state.nombre}
            onChangeText={(nombre) => this.changeNombre(nombre)}
          />


          <TextInput 
            multiline={true}
            style= {styles.input}
            placeholder="Correo"
            value={this.state.correo}
            onChangeText={(correo) => this.changeCorreo(correo)}
          />


          <TextInputMask
           type={'cel-phone'}
            options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
            style= {styles.input}
            placeholder="Telefono"
            value={this.state.telefono}
            onChangeText={(telefono) => this.changeTelefono(telefono)}
          />


          <TextInput
            style= {styles.input}
            placeholder="Cedula"
            value={this.state.cedula}
            onChangeText={(cedula) => this.changeCedula(cedula)}
          />


          <TextInputMask
           type={'datetime'}
           options={{
           format: 'DD/MM/YYYY'
          }}
            style= {[styles.input, styles.textArel]}
            placeholder="Fecha de Expedicion"
            value={this.state.expedicion}
            onChangeText={(expedicion) => this.changeExpedicion(expedicion)}
          />


          <TouchableHighlight
          style={styles.button}
          onPress={() => this.buttonPressed()}
          >
            <Text style={styles.textButton}>Send</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  //color de fondo y tamaño
  container:{
    flex: 1,
    backgroundColor: '#478EF5',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  //color del boton y tamaño
  button: {
    backgroundColor:'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
  },
  //boton color y ubicacion
  textButton:{
    textAlign: 'center',
    color: 'white'
  },
  //titulo (formulario)
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5
  },
  //texto dentro del marco
  input:{
    height: 40,
    borderColor: 'skyblue',
    borderWidth: 3,
    marginBottom: 30,
    padding: 5
  },
  textArel: {
    height: 40,
  }
});

AppRegistry.registerComponent('formsApp', () => formsApp);