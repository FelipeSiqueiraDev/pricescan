import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { AuthContextProvider } from "@contexts/AuthContext";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import Toast from "react-native-toast-message";
import { CompaniesContextProvider } from "@contexts/CompaniesContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <AuthContextProvider>
        <CompaniesContextProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </CompaniesContextProvider>
      </AuthContextProvider>
      <Toast />
    </NativeBaseProvider>
  );
}
