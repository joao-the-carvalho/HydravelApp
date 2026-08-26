import { Text, Pressable, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../../../styles/styles";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@user_token');
    router.replace('/telas/(auth)/login');
    console.log(AsyncStorage.getItem('@user_token'));
    console.log(AsyncStorage.getItem('username'));
  };

  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      {/* Card Principal Topo */}
      <View style={styles.statusCard}>
        <Ionicons name="shield-checkmark" size={100} color="#68D330" />
        <Text style={styles.statusText}>Sua residência está segura</Text>
      </View>

      {/* Grid de Cards Inferiores */}
      <View style={styles.row}>
        {/* Card Vazamento */}
        <View style={styles.smallCard}>
          <MaterialCommunityIcons name="pipe-leak" size={80} color="#000" />
          <Text style={styles.smallCardText}>
            Nenhum vazamento{"\n"}detectado
          </Text>
        </View>

        {/* Card Qualidade da Água */}
        <View style={styles.smallCard}>
          <MaterialCommunityIcons name="water-outline" size={80} color="#000" />
          <Text style={styles.smallCardText}>
            Qualidade de água{"\n"}excelente
          </Text>
        </View>
      </View>

      <Pressable onPress={handleLogout} style={styles.button}>
        <Text>Sair da Conta</Text>
      </Pressable>   
    </SafeAreaView>
  );
};