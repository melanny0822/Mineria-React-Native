import React, {useState} from "react";
import { 
    Alert,
    StyleSheet, 
    View,
    TextInput,
    Pressable,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import {registerUser} from './AuthManager'

const RegisterScreen = ({onRegister, onBack}) => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = () =>{
        if(password !== confirmPassword){
            Alert.alert ('UPS', 'Las contraseñas no coinciden')
            return;
        }

        //Validacion
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
        if (!password.match(passwordRegex)){
            Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres')
            return;
        }  

        registerUser(username, password)
        Alert.alert ('¡Usuario registrado con éxito!')
        onRegister(username, password)
    };
         
    return(
        <View style={style.contains}>
            <View style={style.imageContains}>
                <Image source={require('../assets/Reg.png')} style={style.UserIcon} />
            </View>
            <ScrollView>
                <TextInput
                    style={style.input}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={style.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <TextInput
                    style={style.input}
                    placeholder="Confirm Password"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry
                />
                <Pressable style={style.button} onPress={handleRegister}>
                    <Text style={style.btnTex}>SING UP</Text>
                </Pressable>
                <Pressable style={style.button} onPress={onBack}>
                    <Text style={style.btnTex}>BACK</Text>
                </Pressable>
            </ScrollView>
        </View>
)};

const style=StyleSheet.create({
    contains:{
        flex:1,
        backgroundColor: '#54E5D2'
    },
    imageContains:{
        alignItems: 'center',
        marginTop:20,
    },
    UserIcon:{
        marginTop: 100,
        marginBottom: 45,
        width: 200,
        height: 200,
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
    btnTex:{
        color: '#ffffff',
        textAlign: 'center',
    },
    campo:{
        marginTop: 30,
        marginHorizontal: 70,
    },
    input:{
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 30,
        marginTop: 10,
        width: 300,
        marginHorizontal: 60,
    },
});

export default RegisterScreen;