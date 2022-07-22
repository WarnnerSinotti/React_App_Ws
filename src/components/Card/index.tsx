import * as React from "react";
import { FlatList, Image } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { Grid } from "../Global";

const petList = [
  { ID: "1", name: "Nina", tipo: "Dog", peso: 10, idade: 14, foto: 'assets/foto1.jpeg' },
  { ID: "2", name: "Mel", tipo: "Dog", peso: 9, idade: 14, foto: 'assets/foto2.jpeg'},
  { ID: "3", name: "Kika", tipo: "Cat", peso: 12, idade: 14, foto:'assets/foto3.jpeg' },
];

const cardList = ({ item }) => (
  <Card>
    <Card.Title title={item.name} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }}/>
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
    data={petList}
    renderItem={cardList}
    keyExtractor={(item) => item.ID}
  />
);

export default MyCard;
