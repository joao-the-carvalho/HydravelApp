import { Text, Platform, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../../styles/styles";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
    const handleLogout = async () => {
    await AsyncStorage.removeItem('@user_token');
    
    router.replace('/telas/(auth)/login');
    console.log(AsyncStorage.getItem('@user_token'));
    console.log(AsyncStorage.getItem('username'));
  };
export default function HomeScreen() {
  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      <Text style={[styles.textMain]}>Essa é a página principal</Text>  
     <Pressable onPress={handleLogout} style={styles.button}>
      <Text>Sair da Conta</Text>
    </Pressable>   
    </SafeAreaView>
  );
}
