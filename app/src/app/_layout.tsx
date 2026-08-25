import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Platform, View, ActivityIndicator } from "react-native";
import { Stack, router, useNavigationContainerRef } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyTabs from "../components/BottomBar";
import { useState, useEffect } from "react";



export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRouterReady, setIsRouterReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const rootNavigationRef = useNavigationContainerRef();
  useEffect(() => {
    if (rootNavigationRef?.current) {
      setIsRouterReady(true);
    }
  }, [rootNavigationRef]);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const savedToken = await AsyncStorage.getItem('@user_token');
        setToken(savedToken);
      } catch (e) {
        console.error('Erro ao ler o token', e);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
  
}
