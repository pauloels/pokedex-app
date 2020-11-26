import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import pokebolalogo from '../../assets/img/pokebolalogo.png';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';

import {
  Header,
  ImgLogo,
  Title,
  TitleContainer,
} from '../../global-styles/header/header.styles';
import {
  PokemonContainer,
  PokeImage,
  DetailsContainer,
  Name,
  PokeName,
  PokeTypes,
} from '../../global-styles/container-styles/styles';
import { Container } from './styles';

interface Pokemon {
  id: string;
  weight: string;
  height: string;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  type: string[];
}

const Home: React.FC = () => {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  const { navigate } = useNavigation();

  useEffect(() => {
    async function searchedPokemon(): Promise<void> {
      try {
        const formatName = searchPokemon.toLowerCase();
        const response = await api.get<Pokemon>(`pokemon/${formatName}`);

        const thisPokemon = response.data;

        setPokemon(thisPokemon);
      } catch (err) {
        console.log(err);
      }
    }

    searchedPokemon();
  }, [searchPokemon]);

  const navigateToDetails = useCallback(
    (selectedPokemon: Pokemon) => {
      navigate('Details', { selectedPokemon });
    },
    [navigate],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Header>
        <ImgLogo source={pokebolalogo} />

        <TitleContainer>
          <Title>Pokédex</Title>
        </TitleContainer>
      </Header>
      <Container>
        <SearchInput
          autoCapitalize="none"
          name="pokemon"
          value={searchPokemon}
          onChangeText={setSearchPokemon}
          placeholder="Type the Pokémon name"
        />
        {pokemon.id ? (
          <PokemonContainer onPress={() => navigateToDetails(pokemon)}>
            <PokeImage
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png`,
              }}
            />
            <DetailsContainer key={pokemon.id}>
              <Name>Name: </Name>
              <PokeName>
                {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
              </PokeName>
            </DetailsContainer>
            <DetailsContainer>
              <Name>Types: </Name>
              {pokemon.types.map(t => {
                return (
                  <PokeTypes>
                    {`${
                      t.type.name[0].toUpperCase() + t.type.name.substr(1)
                    }, `}
                  </PokeTypes>
                );
              })}
            </DetailsContainer>
          </PokemonContainer>
        ) : (
          <View />
        )}
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
