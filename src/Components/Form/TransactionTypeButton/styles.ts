import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface IconsProps  {
  type: 'up' | 'down',
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down',
}

export const Container = styled.View<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({theme}) => theme.colors.text};
  border-radius: 5px;

  ${({isActive, type, theme}) => isActive && type === 'up' && css `
    background-color: ${theme.colors.success_light};
    border: 0;
  `}

  ${({isActive, type, theme}) => isActive && type === 'down' && css `
    background-color: ${theme.colors.attention_light};
    border: 0;
  `}

`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
`;

export const Icon = styled(Feather)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({theme, type}) => 
    type === 'up' ? theme.colors.success : theme.colors.attention
  }
`;

