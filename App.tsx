import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import Routes from "./src/routes/Routes";
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Routes />
    </PaperProvider>
  );
}


