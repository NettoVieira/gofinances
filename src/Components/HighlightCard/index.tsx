import React from 'react';


import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amout,
  LastTransaction
} from './styles';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amout>R$ 17.400,00</Amout>
        <LastTransaction></LastTransaction>
      </Footer>
    </Container>
  )
}