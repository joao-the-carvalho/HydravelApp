import React, {useState} from "react";
import { Image, Pressable, Text, ActivityIndicator, Alert, TextInput, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import layout from "../../../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function SignupScreen() {
  const [nome, onChangeNome] = useState("");
  const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [loading, setLoading] = useState(false);
  const getBaseUrl = () => {
  if (Platform.OS === 'ios') {
    return 'http://localhost:3000'; 
  } else {
    return 'http://192.168.0.10:3000'; 
  }
};
  const handleSignup = async () => {
    if (!nome || !email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${getBaseUrl()}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Token ou dados recebidos:", data);
        const tokenGerado = data.token;
        if (tokenGerado) {
          await AsyncStorage.setItem('@user_token', tokenGerado);
          console.log(tokenGerado);
          Alert.alert("Sucesso", "Conta criada e login efetuado!");
          router.replace('/telas');
        }
      } else {
        Alert.alert("Erro", data.message || "E-mail ou senha inválidos.");
      }
    } catch (error) {
      Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor.");
      console.log(error);
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
          <Text style={layout.textMain}>Registro</Text>
          <TextInput
            style={layout.input}
            onChangeText={onChangeNome}
            value={nome}
            autoCapitalize="none"
            placeholder="nome"
          />
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
          onPress={handleSignup}
          disabled={loading}
          >
          {loading ? (
            <ActivityIndicator color="#000" /> 
          ) : (
            <Text>Registrar</Text>
          )}
          </Pressable>
          <Text>Já tem uma conta?</Text>
          <Pressable style={layout.button}
          onPress={() => router.replace('/telas/(auth)/login')}>
            <Text>Faça login!</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
