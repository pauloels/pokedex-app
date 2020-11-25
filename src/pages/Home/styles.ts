import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Pokemon } from './index';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const PokeList = styled(FlatList as new () => FlatList<Pokemon>)`
  margin-top: 16px;
  width: 100%;
`;

export const PokemonContainer = styled(RectButton)`
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: #3e3b47;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
`;

export const PokeId = styled.Text``;

export const PokeImage = styled.Image``;

export const PokeName = styled.Text`
  margin-top: 10px;
`;

export const PokeTypes = styled.Text`
  margin-top: 20px;
`;
