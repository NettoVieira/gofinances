import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../Components/HighlightCard';
import { TransactionCard } from '../../Components/TransactionCard';

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
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

export function Dashboard() {
  const data = [{
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
  {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
  {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
]

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
   
      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: getBottomSpace()}}
        />

 
      </Transactions>
    </Container>
  )
}
