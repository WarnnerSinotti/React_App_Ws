import * as React from 'react';
import { BottomNavigation, Text, IconButton } from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import { theme } from "../../core/theme";
import MyCard from '../Card';
import { ScrollView } from 'react-native-gesture-handler';
import { Row } from '../Global';

export function MusicRoute(props: any) {
  return (
    <View>
    <Text>Texto03</Text>
    </View>
  );
}

export function AlbumsRoute(props: any) {
  return (
    <ScrollView style={styles.background}>
    <View>
      <Row>
      <MyCard/>
      </Row>
    </View>
    </ScrollView>
  );
}

export function RecentsRoute(props: any) {
  return (
    <View>
    <Text>Texto03</Text>
    </View>
  );
}


export const MyButtonNavigation = (...props: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'paw', },
    { key: 'info', title: 'Info', icon: 'cog' },
    { key: 'localizacao', title: 'Localizacao', icon: 'map-marker-radius' },
  ]);


  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    info: AlbumsRoute,
    localizacao: RecentsRoute,
  });

  return (
    <BottomNavigation
    style={styles.bottomNavigation} {...props}
      navigationState={{ index, routes, }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={theme.colors.tabNavigationButtonActive}
      inactiveColor={'gray'}
      barStyle={{backgroundColor: theme.colors.tabNavigationBackground}}
      
    >
      </BottomNavigation>
  );
  
};

const styles = StyleSheet.create({
  bottomNavigation: {
    width: "100%",
    justifyContent: "center",
  },
  background: {
    backgroundColor: theme.colors.tabNavigationBackground
  }
});