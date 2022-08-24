import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      sexo: 0,
      sexos: [
        {id:1, sex:"Masculino"},
        {id:2, sex: "Feminino"}
      ],
      valor: 100,
      status: false,
      nome:'',
      idade: ''
    }

    this.cadastrar = this.cadastrar.bind(this)
  }

  cadastrar(){
    if(this.state.nome == '' || this.state.idade == ''){
      return Alert.alert('ERRO','Dados incompletos')
    }

    let nome = this.state.nome
    let idade = this.state.idade
    let sexo = (this.state.sexo == 0 ? 'Masculino':'Feminino')
    let limite = this.state.valor.toFixed(2)
    let estudante = (this.state.status ? 'É estudante' : 'Não é estudante')
    Alert.alert('Seus dados',`Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nO limite desejado foi: R$${limite}\n${estudante}`)
  }

  render(){

    let itemSexo = this.state.sexos.map( (v, k)=>{
      return <Picker.Item key={k} value={k} label={v.sex} />
    } )

    return (
      <View style={styles.container}>
        <View style={styles.areaMeuCadastro}>
          <Text style={styles.textoTop}>Meu Cadastro</Text>
        </View>

        <Image 
        source={require('./src/Dinheiro.png')}
        style={styles.img}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewCadastro}>
            <Text style={styles.textoInfos}>Nome:</Text>

            <TextInput 
            style={styles.input}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={ (nome)=> this.setState({nome: nome})}
            />

            <Text style={styles.textoInfos}>Idade:</Text>

            <TextInput 
            style={styles.input}
            placeholder="Digite sua idade"
            underlineColorAndroid="transparent"
            onChangeText={ (idade)=> this.setState({idade: idade})}
            keyboardType="numeric"
            />

            <View style={styles.infoView}>
              <Text style={styles.textoInfosDois}>Sexo:</Text>

              <Picker
              style={styles.pickerInfos}
              selectedValue={this.state.sexo}
              onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
              >
                {itemSexo}
              </Picker>
            </View>

            <Text style={styles.textoInfos}>Seu limite:</Text>
            <View style={styles.infoView}>
              
              <Slider 
              style={styles.sliderInfos}
              minimumValue={100}
              maximumValue={2000}
              onValueChange={ (valor)=> this.setState({valor: valor}) }
              value={this.state.valor}
              />
              <Text style={{fontSize:10}}>R$: {this.state.valor.toFixed(2)}</Text>
            </View>

            <View style={styles.infoView}>
              <Text style={styles.textoInfosDois}>Estudante:</Text>
              <Switch 
              value={this.state.status}
              onValueChange={ (valorSwitch)=>this.setState({status: valorSwitch}) } 
              />
            </View>

            <View style={{alignItems:'center'}}>
              <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={this.cadastrar}>
                  <Text style={styles.btnTexto}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
              </View>
          </View>
          <View style={styles.boxFim}></View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    marginTop: 50,
    alignItems: 'center'
  },
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 10,
    padding: 10,
    marginTop: 5,
    borderRadius: 15,
    width: 320
  },
  textoTop:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  viewCadastro:{
    marginTop: 20,
    backgroundColor: '#fff',
    height: 530,
    width: 380,
    borderRadius: 9
  },
  textoInfos:{
    padding: 10,
    fontSize: 10
  },
  pickerInfos:{
    padding: 10,
    fontSize: 10,
    width: 150,
    marginTop: -3
  },
  sliderInfos:{
    width: 250
  },
  infoView:{
    flexDirection: 'row',
    padding: 10
  },
  textoInfosDois:{
    marginTop: 15,
    padding: 1,
    fontSize: 10
  },
  btnArea:{
    marginTop:21,
    height: 40,
    width: 250
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#007fff',
    height: 40,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  areaMeuCadastro:{
    backgroundColor:'#007fff',
    height: 50,
    width: 500,
    justifyContent: 'center'
  },
  img:{
    width: 130,
    height: 130
  },
  boxFim:{
    height: 200,
    backgroundColor: '#ccc'
  }
});
