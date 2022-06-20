import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/Routes/Routes";
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Routes />
    </PaperProvider>
  );
}


