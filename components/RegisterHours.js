import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  DatePickerAndroid,
  TimePickerAndroid,
  Pressable,
  Image, 
} from 'react-native';
import Novedades from './Novedades';

const RegisterHours = ({ visible, onBack }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [novedadesVisible, setNovedadesVisible] = useState(false);
  const [novedades, setNovedades] = useState([]);

  const handleAgregarNovedad = (novedad) => {
    setNovedades([...novedades, novedad]);
  };

  const calculateTotalHours = () => {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} horas y ${minutes} minutos`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverImageContain}>
        <Image source={require('../assets/neon-clock.png')}style={styles.coverImage}/>
      </View>
      <Text style={styles.btnText}>Fecha y hora de ingreso:</Text>
      <Text>{startDate.toDateString()} {startTime.toLocaleTimeString()}</Text>
      
      <Text style={styles.btnText}>Fecha y hora de salida:</Text>
      <Text>{endDate.toDateString()} {endTime.toLocaleTimeString()}</Text>

      
      <Pressable style={styles.btnReg} onPress={() =>calculateTotalHours()}>
        <Text style={styles.btnText}>Calcular tiempo trabajado</Text>
      </Pressable>
      <Text>Total horas trabajadas: {calculateTotalHours()}</Text>

      {visible && ( // Verifica si RegisterHours es visible
        <>
          <Pressable style={styles.button} onPress={onBack}>
            <Text style={styles.btnTextBack}>BACK</Text>
          </Pressable>

          {novedadesVisible && (
            <Novedades
              onClose={() => setNovedadesVisible(false)}
              onAgregarNovedad={handleAgregarNovedad}
            />
          )}
        </>  
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSelect: {
    padding: 10,
    backgroundColor: '#54E5D2',
    borderRadius: 5,
    margin: 5,
  },
  btnReg: {
    backgroundColor: '#54E5D2',
    borderRadius: 20,
    width: 200,
    padding: 10,
    textAlign: 'center',
    marginTop: 80,
  },
  btnText: {
    color: '#000000',
    textAlign: 'center',
    marginTop: 15
  },
  btnNovedades: {
    backgroundColor: '#54E5D2',
    borderRadius: 20,
    width: 200,
    padding: 10,
    textAlign: 'center',
    marginTop: 80,
  },
  button:{
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
  
});

export default RegisterHours;