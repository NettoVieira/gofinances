import React, { useState, useEffect } from 'react'
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().typeError('Informe um valor numérico').positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
})

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const dataKey = '@gofinances:transactions';

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const { 
    control,
    handleSubmit,
    formState: { errors }
   } = useForm({
     resolver: yupResolver(schema)
   });

  const handleTransactionTypesSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false)
  }

  function handleOpenSelectCategory(){
    setCategoryModalOpen(true)
  }
  
  async function handleRegister(form: FormData) {
    const newTransaction = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    
    try {
      const data = await AsyncStorage.getItem(dataKey);

      const currentData = data ? JSON.parse(data): []

      const dataformatted = [
        ...currentData,
        newTransaction
      ]
      
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataformatted));
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível salvar')
    }
  }

  useEffect(() => {
    async function getTransactions() {
      const data = await AsyncStorage.getItem(dataKey);

      console.log(JSON.parse(data!))

      // await AsyncStorage.removeItem(dataKey);
    }

    getTransactions();
  }, [])
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
      
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm 
              placeholder="Nome" 
              name="name" 
              control={control} 
              autoCapitalize="sentences" 
              autoCorrect={false}
              error={errors.name && errors.name.message}
              />

            <InputForm 
              placeholder="Preço" 
              name="amount" 
              control={control} 
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
              />

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
    </TouchableWithoutFeedback>
  )
}