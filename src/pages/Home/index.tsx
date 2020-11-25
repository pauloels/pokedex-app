import React, { useState } from 'react';

import pokebolalogo from '../../assets/img/pokebolalogo.png';
import Group from '../../assets/img/Group.png';
import SearchInput from '../../components/SearchInput';
import {
  Header,
  ImgLogo,
  Title,
  TitleContainer,
} from '../../global-styles/header/header.styles';
import {
  Container,
  PokeList,
  PokemonContainer,
  PokeId,
  PokeImage,
  PokeName,
  PokeTypes,
} from './styles';

export interface pokemonDetails {
  weight: string;
  height: string;
  hp: string;
  atk: string;
  def: string;
  spd: string;
}

export interface Pokemon {
  id: string;
  name: string;
  url: string;
  types: string;
  details: pokemonDetails;
}

const Home: React.FC = () => {
  const [searchPokemon, setSearchPokemon] = useState('');
  return (
    <>
      <Container>
        <Header>
          <ImgLogo source={pokebolalogo} />
          <TitleContainer>
            <Title>Pokédex</Title>
          </TitleContainer>
        </Header>

        <SearchInput
          autoCapitalize="none"
          name="pokemon"
          value={searchPokemon}
          onChangeText={setSearchPokemon}
          placeholder="Type the Pokémon name"
        />

        <PokemonContainer>
          <PokeImage source={Group} />
          <PokeName>Name: Bulbasaur</PokeName>
          <PokeTypes>Name: Grass, Poison</PokeTypes>
        </PokemonContainer>
        <PokemonContainer>
          <PokeImage source={Group} />
          <PokeName>Name: Bulbasaur</PokeName>
          <PokeTypes>Name: Grass, Poison</PokeTypes>
        </PokemonContainer>
      </Container>
    </>
  );
};

export default Home;
