import React from 'react';

import { 
  Container,

} from './styles'

interface Category {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect( { 
  category,
  setCategory,
  closeSelectCategory 
}: CategorySelectProps) {
  return (
    <Container>
      
    </Container>
  )
}