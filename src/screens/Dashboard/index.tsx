import React from 'react';
import { HighlightCard } from '../../Components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  Status,
  HighlightCards
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Status backgroundColor="#5636D3"></Status>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri:'https://avatars.githubusercontent.com/u/46529740?v=4' }}/>
            <User>
              <UserGreeting>Ola, </UserGreeting>
              <UserName>João</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril" 
        />
        <HighlightCard 
          type="down"
          title="Saidas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril" 
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 17.400,00" 
          lastTransaction="01 à 16 de abril" 
        />
      </HighlightCards>
    </Container>
  )
}
