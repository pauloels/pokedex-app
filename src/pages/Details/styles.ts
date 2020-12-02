import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { Pokemon } from '../Home/index';

export const BackContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const BackIcon = styled(FeatherIcon)`
  color: #ff9000;
`;

export const Back = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  color: #ff9000;
  margin-left: 5px;
`;

export const PokemonContainerDetails = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: #3e3b47;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
`;

export const PokemonDetails = styled.View`
  width: 70%;
  align-items: center;
`;

export const PokeId = styled.Text`
  align-self: flex-start;
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  margin-top: -4px;
  color: #666360;
`;

export const PokeImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: -2px;
`;

export const PokeStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`;

export const WeightHeightContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const PokeWeight = styled.Text`
  font-size: 15px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const PokeHeight = styled.Text`
  font-size: 15px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const Weight = styled.Text`
  font-size: 12px;
  color: #666360;
  font-family: 'RobotoSlab-Regular';
  margin-top: 2px;
`;

export const Height = styled.Text`
  font-size: 12px;
  color: #666360;
  font-family: 'RobotoSlab-Regular';
  margin-top: 2px;
`;

export const PokeStats = styled.Text`
  font-size: 15px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin-top: 10px;
`;

export const Hp = styled.Text`
  font-size: 10px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin-top: 2px;
`;

export const Atk = styled.Text`
  font-size: 10px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin-top: 2px;
`;

export const Def = styled.Text`
  font-size: 10px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin-top: 2px;
`;

export const Spd = styled.Text`
  font-size: 10px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin-top: 2px;
`;

export const AllStatsContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const StatsContainer = styled.View`
  width: 95%;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  margin-top: 5px;
`;

export const HorizontalBar = styled.View`
  flex-direction: row;
`;

export const Power = styled.View`
  background-color: #ff9000;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const TotalPower = styled.View`
  background-color: #c4c4c4;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-left: -5px;
`;

export const FamilyTree = styled.Text`
  font-size: 15px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin-top: 20px;
`;

export const PokemonList = styled(FlatList as new () => FlatList<Pokemon>)`
  width: 90%;
`;

export const PokemonContainer = styled(RectButton)`
  width: 180px;
  height: 180px;
  align-items: center;
  justify-content: center;
  background-color: #3e3b47;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  margin-right: 5px;
`;

export const DetailsContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PokeIdTree = styled.Text`
  align-self: flex-start;
  font-family: 'RobotoSlab-Regular';
  font-size: 15px;
  margin-top: -4px;
  color: #666360;
`;

export const Name = styled.Text`
  font-size: 15px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const PokeName = styled.Text`
  font-size: 15px;
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
`;

export const PokeTypes = styled.Text`
  font-size: 15px;
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
`;
