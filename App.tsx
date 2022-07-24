import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/Routes/Routes";
import {Provider as PaperProvider } from 'react-native-paper';
import {theme} from './src/core/theme'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </PaperProvider>
  );
}


