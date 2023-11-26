import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  Modal,
  Pressable,
} from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import RegisterHours from './components/RegisterHours';
import Novedades from './components/Novedades';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [registerHourModalVisible, setRegisterHourModalVisible] = useState(false);
  const [novedadesModalVisible, setNovedadesModalVisible] = useState(false);

  const handleLogin = (username: string) =>{
    setLoggedInUser(username);
    setLoginModalVisible(false);
    setRegisterHourModalVisible(false);
  };

  const handleRegister = (username: string, password: string) => {
    setLoggedInUser(username);
    setRegisterModalVisible(false);
  };

  const handleAgregarNovedad = (novedad: string) => {
    console.log('Nueva novedad:', novedad);
  };

  const toggleLoginModal = () => {
    setLoginModalVisible (!loginModalVisible);
  };

  const toogleRegisterModal = () => {
    setRegisterModalVisible(!registerModalVisible);
    setNovedadesModalVisible(false);
  };

  const toggleRegisterHoursModal = () => {
    setRegisterHourModalVisible(!registerHourModalVisible);
  };

  const toggleNovedadesModal = () => {
    setNovedadesModalVisible(!novedadesModalVisible);
  };

  const closeModal = () => {
    setLoginModalVisible(false);
    setRegisterModalVisible(false);
    setRegisterHourModalVisible(false);
  };

  const handleLogout =() =>{
    setLoggedInUser(null);
  };


  return(
    <SafeAreaView style={style.contains}>
      <Text style={style.title}>MILLA DE ORO</Text>
      <View style={style.coverImageContain}>
        <Image source={require('./assets/miner.jpg')} style={style.coverImage} />
      </View>         
      {loggedInUser ? (
        <View>
          <Text style={style.texto}> Dignos son todos de total admiración.</Text>
          <Text style={style.texto}> BIENVENIDOS!</Text>
          <Pressable style={style.btnRegisterHours} onPress={toggleRegisterHoursModal}>
            <Text style={style.btnTextregister}>REGISTRAR HORAS</Text>
          </Pressable>
          <Pressable style={style.btnNovedades} onPress={toggleNovedadesModal}>
            <Text style={style.btnTextNovedades}>NOVEDADES</Text>
          </Pressable>
          <Pressable style={style.btnlogout} onPress={handleLogout}>
            <Text style={style.btnTextlogout}>LOGOUT</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Pressable style={style.btnlogin} onPress={toggleLoginModal}>
            <Text style={style.btnTextlogin}>LOGIN</Text>
          </Pressable>
          <Pressable style={style.btnregister} onPress={toogleRegisterModal}>
            <Text style={style.btnTextregister}>REGISTER</Text>
          </Pressable>
        </View> 
      )}
      <Modal visible={loginModalVisible} animationType='slide'>
        <LoginScreen onLogin={handleLogin} onBack={closeModal}/>
      </Modal>
      <Modal visible={registerModalVisible} animationType='slide'>
        <RegisterScreen onRegister={handleRegister} onBack={closeModal}/>
      </Modal>
      <Modal visible={registerHourModalVisible} animationType='slide'>
        <RegisterHours visible={registerHourModalVisible} onBack={toggleRegisterHoursModal} />
      </Modal>
      <Modal visible={novedadesModalVisible} animationType='slide'>
        <Novedades onClose={toggleNovedadesModal} onAgregarNovedad={handleAgregarNovedad} username={loggedInUser} />
      </Modal>
    </SafeAreaView>
)};

const style = StyleSheet.create({
  contains:{
    flex:1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  title:{
    fontSize: 50,
    color: '#000000',
    textAlign: 'center',
  },
  texto:{
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
  coverImageContain:{
    marginTop: 20,
    alignItems: 'center',
  },
  coverImage:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  btnlogout:{
    backgroundColor: '#97F542',
    fontSize: 25,
    borderRadius: 20,
    width: 150,
    padding: 10,
    textAlign: 'center',
    marginTop: 160,
    marginHorizontal: 80
  },
  btnTextlogout:{
    color: '#000000',
    textAlign: 'center',
  },
  btnlogin:{
    backgroundColor: '#54E5D2',
    fontSize: 25,
    borderRadius: 20,
    width: 150,
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  btnTextlogin:{
    color: '#000000',
    textAlign: 'center',
  },
  btnregister:{
    backgroundColor: '#54E5D2',
    fontSize: 25,
    borderRadius: 20,
    width: 150,
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  btnTextregister:{
    color: '#000000',
    textAlign: 'center',
  },
  btnRegisterHours: {
    backgroundColor: '#54E5D2',
    borderRadius: 20,
    width: 200,
    padding: 10,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 50
  },
  btnNovedades: {
    backgroundColor: '#54E5D2',
    borderRadius: 20,
    width: 200,
    padding: 10,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 50
  },
  btnTextNovedades:{
    color: '#000000',
    textAlign: 'center',
  },
});

export default App;