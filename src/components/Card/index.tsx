import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const petName = 'Cachorro'
const myPetName = 'Nina'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCard = () => (
  <Card>
    <Card.Title title={petName} subtitle={myPetName} left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
    <Card.Content>
      <Title>{petName}</Title>
      <Paragraph>{myPetName}</Paragraph>
    </Card.Content>
  </Card>
);

export default MyCard;