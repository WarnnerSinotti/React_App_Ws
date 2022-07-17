import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import { theme } from "../../core/theme";

export function MusicRoute(props: any) {
  return (
    <View>
      <Text>Dentola1</Text>
    </View>
  );
}

export function AlbumsRoute(props: any) {
  return (
    <View>
      <Text>Dentola2</Text>
    </View>
  );
}

export function RecentsRoute(props: any) {
  return (
    <View>
      <Text>Dentola3</Text>
    </View>
  );
}


export const MyButtonNavigation = (...props: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,

  });

  return (
    <BottomNavigation
    style={styles.bottomNavigation} {...props}
      navigationState={{ index, routes, }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
  
};

const styles = StyleSheet.create({
  bottomNavigation: {
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: theme.colors.header,
    justifyContent: "center",
  },
});