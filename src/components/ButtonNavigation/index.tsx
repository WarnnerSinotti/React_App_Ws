import * as React from "react";
import { BottomNavigation, Text, Switch } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { theme } from "../../core/theme";
import MyCard from "../Card";
import { Row } from "../Global";

export function MenuHome(props: any) {
  return (
    <View>
      <Text>Menu Home</Text>
      <Switch value={theme.dark} />
    </View>
  );
}
//Imagens do Pet
export function MenuInfo(props: any) {
  return (
    <View style={styles.background}>
      <Row>
        <MyCard />
      </Row>
    </View>
  );
}

//Localização do PET
export function MenuLocalization(props: any) {
  return (
    <View>
      <Text>Localização</Text>
    </View>
  );
}

export const MyButtonNavigation = (...props: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "menuHome", title: "Home", icon: "paw" },
    { key: "menuInfo", title: "Info", icon: "cog" },
    { key: "menuLocalization", title: "Localizacao", icon: "map-marker-radius",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    menuHome: MenuHome,
    menuInfo: MenuInfo,
    menuLocalization: MenuLocalization,
  });

  return (
    <BottomNavigation
      style={styles.bottomNavigation}
      {...props}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={theme.colors.tabNavigationButtonActive}
      inactiveColor={"gray"}
      barStyle={{ backgroundColor: theme.colors.tabNavigationBackground }}
    ></BottomNavigation>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    width: "100%",
    justifyContent: "center",
  },
  background: {
    backgroundColor: theme.colors.tabNavigationBackground,
  },
});
