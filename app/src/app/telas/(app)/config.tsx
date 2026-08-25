import React, {useState} from "react";
import { Image, Pressable, Text, ActivityIndicator, Alert, TextInput, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "../../../styles/styles";

export default function ConfigScreen(){
    <SafeAreaView style={[styles.container, styles.center]}>
          <Text style={[styles.textTitle]}>Essa é a página de configurações</Text>
          <Text style={[styles.textMain]}>
            Configure suas coisas aqui bla bla bla mto chato
          </Text>
        </SafeAreaView>
}