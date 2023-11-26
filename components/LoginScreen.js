import React, {useState} from "react";
import { 
    Alert, 
    StyleSheet,
    TextInput,
    ScrollView, 
    View,
    Image,
    Pressable,
    Text,
} from 'react-native';
import { validateUser } from "./AuthManager";

const LoginScreen = ({onLogin, onBack}) => {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const handleLogin =() =>{
        if (username && password) {
            if (validateUser(username, password)){
                onLogin(username);
                Alert.alert ('¡Inicio de sesión exitoso!')
            } else {
                Alert.alert ('Inicio de sesión fallido, verifique su usuario o contraseña')
            }

        }
         
    };

    return(
        <View style = {style.contains}>
            <ScrollView>
                <View style={style.imageContains}>
                    <Image source={require('../assets/user-icon.png')} style={style.UserIcon} />
                </View>
                <Text style={style.title}>BIENVENIDO</Text>
                <TextInput
                    style={style.input}
                    placeholder='Username'
                    onChangeText={setUsername}
                    value={username}
                    placeholderTextColor={'#000000'}
                />
                <TextInput
                    style={style.input}
                    placeholder='Password'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                    placeholderTextColor={'#000000'}
                />
                <Pressable style={style.button} onPress={handleLogin}>
                    <Text style={style.btnTex}>LOG IN</Text>
                </Pressable>
                <Pressable style={style.button} onPress={onBack}>
                    <Text style={style.btnTex}>BACK</Text>
                </Pressable>
            </ScrollView>
        </View> 
)};

const style = StyleSheet.create({
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
    title:{
        fontSize: 50,
        color: '#000000',
        textAlign: 'center',
    },
});

export default LoginScreen;