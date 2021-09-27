import React from 'react';

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
  Status
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
    </Container>
  )
}
