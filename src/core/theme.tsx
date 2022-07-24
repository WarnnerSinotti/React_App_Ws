import { DefaultTheme } from "react-native-paper";

const brownColor = "#845639"
const whiteColor = "#ffffff"
const orangeColor = "#f9843d"
const creamColor = "#dcdcc4"

export const theme = {
  ...DefaultTheme,
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
};

export const tamanho = {
  login: 30,
  titulo: 22,
  subTitulo: 15,
};
