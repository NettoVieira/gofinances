import React, { useState } from 'react'
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form'


import { Input } from '../../Components/Form/Input'
import { InputForm } from '../../Components/Form/InputForm'

import { Button } from '../../Components/Form/Button'
import { TransactionTypeButton } from '../../Components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../Components/Form/CategorySelectButton'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles';
import { CategorySelect } from '../CategorySelect';

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const { 
    control,
    handleSubmit,
   } = useForm();

  const handleTransactionTypesSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false)
  }

  function handleOpenSelectCategory(){
    setCategoryModalOpen(true)
  }
  
  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
  }
  
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm placeholder="Nome" name="name" control={control} />

          <InputForm placeholder="Preço" name="amount" control={control}/>
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

          <CategorySelectButton title={category.name} onPress={handleOpenSelectCategory}/>
        </Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)}></Button>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  )
}