import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Menu } from 'react-native-paper';
import { theme } from "../../styles/theme";

const MyComponent = () => (
  <View style={{ flex: 1 }}>
    <Menu.Item icon={'redo'} onPress={() => {}} title="Redo" />
    <Menu.Item icon={'redo'} onPress={() => {}} title="Undo" />
    <Menu.Item icon={'redo'} onPress={() => {}} title="Cut" disabled />
    <Menu.Item icon={'redo'} onPress={() => {}} title="Copy" disabled />
    <Menu.Item icon={'redo'} onPress={() => {}} title="Paste" />
  </View>
);


export const MyHeader = (...props: any) => {
  
  const _handleMore = () => {MyComponent()};

  return (
    <Appbar.Header style={styles.header} {...props}>
      <Appbar.Content title="MyPetWorld" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    backgroundColor: theme.colors.header,
    justifyContent: "center",
  },
});
