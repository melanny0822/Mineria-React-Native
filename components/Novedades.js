import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Pressable, 
    Alert,
    Image,
} from 'react-native';

const Novedades = ({ onClose, onAgregarNovedad, username }) => {
  const [tipoNovedad, setTipoNovedad] = useState('');
  const [diasNovedad, setDiasNovedad] = useState('');

  const handleAgregarNovedad = () => {
    if(username && tipoNovedad && diasNovedad){
      onAgregarNovedad({ tipo: tipoNovedad, dias: parseInt(diasNovedad), username });
      setTipoNovedad('');
      setDiasNovedad('');
      onClose();
    } else {
      Alert.alert ('Campos Vacios', 'Por favor complete los campos.')
    } 
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverImageContain}>
        <Image source={require('../assets/news.png')}style={styles.coverImage}/>
      </View>
      <Text style={styles.Text}>Seleccionar tipo de novedad:</Text>
      <TextInput
        style={styles.input}
        value={tipoNovedad}
        onChangeText={setTipoNovedad}
      />
      <Text style={styles.Text}s>Ingresar días:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={diasNovedad}
        onChangeText={setDiasNovedad}
      />
      <Pressable style={styles.btnAgregar} onPress={handleAgregarNovedad}>
        <Text style={styles.btnAgregaText}>Agregar Novedad</Text>
      </Pressable>

      <Pressable style={styles.btnCerrar} onPress={onClose}>
        <Text style={styles.btnTextBack}>Cerrar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
    width: 300,
    marginHorizontal: 60,
    borderColor: '#000000'
  },
  btnAgregar: {
    backgroundColor: '#54E5D2',
    borderRadius: 20,
    padding: 12,
    marginVertical: 5,
    marginTop: 25
  },
  btnAgregaText:{
    fontWeight: 'bold',
    color: '#000000'
  },
  btnCerrar:{
    borderRadius: 20,
    backgroundColor: '#000000', 
    fontSize: 25,
    borderRadius: 20,
    width: 150,
    padding: 10,
    textAlign: 'center',  
    marginHorizontal: 110,
    marginBottom: 0,
    marginTop: 25,
  },
  btnTextBack: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  coverImageContain:{
    alignItems: 'center',
    marginBottom: 20,
  },
  coverImage:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  Text:{
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default Novedades;