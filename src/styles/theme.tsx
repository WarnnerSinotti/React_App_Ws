import { DefaultTheme } from 'react-native-paper';

const brownColor = "#845639";
const whiteColor = "#ffffff";
const orangeColor = "#f9843d";
const creamColor = "#dcdcc4";

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,

    //Text
    colorText: whiteColor,

    //button
    button: orangeColor,
    buttonSocial: brownColor,

    //Text Input
    text: whiteColor,
    placeholder: creamColor,

    //Text Titulo
    titulo: brownColor,

    //Text SubTitulo
    subTitulo: "",
    primary: brownColor,
    background: whiteColor,

    //Modal
    modal: creamColor,

    //IconButton
    iconButtonColor: whiteColor,

    //Header
    header: creamColor,

    //Tab Navigator
    tabNavigationBackground: creamColor,
    tabNavigationButtonActive: orangeColor,
  },
  ThemeFonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
};
