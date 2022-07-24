import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { theme } from "../../core/theme";
import { Grid } from "../Global";

const petList = [
  { ID: "1", name: "Nina", tipo: "Dog", peso: 10, idade: 14, foto: require('../../../assets/foto1.jpeg') },
  { ID: "2", name: "Mel", tipo: "Dog", peso: 9, idade: 14, foto: require('../../../assets/foto2.jpeg')},
  { ID: "3", name: "Kika", tipo: "Cat", peso: 12, idade: 14, foto: require('../../../assets/foto3.jpeg') },
];

const cardList = ({ item }) => (
  <Card style={styles.card}>
    <Card.Title title={item.name} />
    <Card.Cover  style={styles.image} source={item.foto} />
    <Card.Content>
      <Grid>
        <Paragraph>Pet: {item.tipo}</Paragraph>
        <Paragraph>Peso: {item.peso}</Paragraph>
        <Paragraph>Idade: {item.idade}</Paragraph>
      </Grid>
    </Card.Content>
  </Card>
);

const MyCard = () => (
  <FlatList
  style={styles.flatlist}
    data={petList}
    renderItem={cardList}
    keyExtractor={(item) => item.ID}
  />
);

export default MyCard;

const styles = StyleSheet.create({
  flatlist: {
      paddingTop: 5,
      paddingVertical: 5,   
  },
  card:{
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    paddingTop: 5,
    backgroundColor: theme.colors.surface,
    color: 'black'
  },
  image:{
    borderRadius: 15,
  }
})
