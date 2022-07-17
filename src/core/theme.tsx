import { DefaultTheme } from "react-native-paper";

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        
        //Text
        colorText: '#ffffff',
        
        //button
        button: "#f9843d",
        buttonSocial: "#845639",
        
        //Text Input
        text: '#ffffff',
        placeholder: '#e0e0e0',
        
        //Text Titulo
        titulo: "#845639",
        
        //Text SubTitulo
        subTitulo: "",
        primary: "#845639",
        background: "#ffffff",
        
        //Modal
        modal: '#dcdcc4',
        
        //IconButton
        iconButtonColor: '#ffffff',

        //Header
        header: "#dcdcc4",

        //Tab Navigator
        tabNavigationBackground: "#dcdcc4",
        tabNavigationButtonActive: '#f9843d'
    },
}

export const tamanho = {
    login: 30,
    titulo: 22,
    subTitulo: 15,
}