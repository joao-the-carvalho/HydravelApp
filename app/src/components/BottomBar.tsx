import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      {}
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home" 
        }} 
      />
      
      <Tabs.Screen 
        name="outra" 
        options={{ 
          title: "Outra" 
        }} 
      />
      
      <Tabs.Screen 
        name="config" 
        options={{ 
          title: "Config" 
        }} 
      />
    </Tabs>
  );
}