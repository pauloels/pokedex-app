import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
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

export const PokeImage = styled.Image`
  width: 150px;
  height: 150px;
  padding: 0;
`;

export const DetailsContainer = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const PokeName = styled.Text`
  font-size: 24px;
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
`;

export const PokeTypes = styled.Text`
  font-size: 24px;
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
`;
