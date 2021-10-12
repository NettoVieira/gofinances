import React, { useState } from 'react'

import { Input } from '../../Components/Form/Input'
import { Button } from '../../Components/Form/Button'
import { TransactionTypeButton } from '../../Components/Form/TransactionTypeButton'
import { CategorySelect } from '../../Components/Form/CategorySelect'


import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  const handleTransactionTypesSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }
  
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome"/>

          <Input placeholder="Preço"/>
          <TransactionTypes>
            <TransactionTypeButton 
              type="up"
              title="Income"
              onPress={() => handleTransactionTypesSelect('up')}
              isActive={transactionType === 'up'}
            />

            <TransactionTypeButton 
              type="down"
              title="Outcome"
              onPress={() => handleTransactionTypesSelect('down')}
              isActive={transactionType === 'down'}

            />
          </TransactionTypes>

          <CategorySelect title="Categoria"></CategorySelect>
        </Fields>

        <Button title="Enviar"></Button>
      </Form>
    </Container>
  )
}