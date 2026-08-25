import React, {useState} from "react";
import { Image, Pressable, Text, TextInput, Platform, Alert, ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import layout from "../../../styles/styles";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  const getBaseUrl = () => {
    if (Platform.OS === 'ios' || Platform.OS === 'web') {
      return 'http://localhost:3000'; 
    } else {
      return 'http://192.168.0.10:3000'; 
    }
  };
    const handleLogin = async () => {
      if (!email || !password) {
        Alert.alert("Erro", "Por favor, preencha todos os campos.");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(`${getBaseUrl()}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            senha: password,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          if (data.token) {
            await AsyncStorage.setItem('@user_token', data.token);
          }
          if (data.user && data.user.nome) {
            await AsyncStorage.setItem('@user_name', data.user.nome);
          } else if (data.nome) {
            await AsyncStorage.setItem('@user_name', data.nome);
          }
          Alert.alert("Sucesso", "Login realizado com sucesso!");
          router.replace('/telas');
          console.log(data);

        } else {
          Alert.alert("Erro", data.message || "E-mail ou senha inválidos.");
          console.log("Erro no login (Status", response.status, "):", data);
        }
      } catch (error) {
        Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor.");
        console.error("Erro de rede/execução:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
    <SafeAreaProvider>
          <SafeAreaView style={layout.container}>
            <SafeAreaView style={layout.center}>
              <Image
                source={require("../../assets/image.png")}
                style={layout.imageLocal}
                resizeMode="contain"
              />
              <Text style={layout.textMain}>Login</Text>
              <TextInput
                style={layout.input}
                onChangeText={onChangeEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="email"
              />
              <TextInput
                style={layout.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="senha"
              />
              <Pressable style={layout.button}
              onPress={handleLogin}
              disabled={loading}
              >
              {loading ? (
                <ActivityIndicator color="#000" /> 
              ) : (
                <Text>Fazer Login</Text>
              )}
              </Pressable>
              <Text>Não tem uma conta?</Text>
              <Pressable style={layout.button}
                        onPress={() => router.replace('/telas/(auth)/signup')}>
                  <Text>Faça registro!</Text>
              </Pressable>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaProvider>
  );
}
