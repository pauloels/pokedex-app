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
  Container,
  PokemonContainer,
  PokeImage,
  DetailsContainer,
  Name,
  PokeName,
  PokeTypes,
} from './styles';

export interface Pokemon {
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

        thisPokemon.name =
          thisPokemon.name[0].toUpperCase() + thisPokemon.name.substr(1);
        thisPokemon.types.forEach((s, index) => {
          s.type.name = s.type.name[0].toUpperCase() + s.type.name.substr(1);

          if (index < thisPokemon.types.length - 1) {
            s.type.name = `${s.type.name}, `;
          } else {
            s.type.name;
          }
        });
        setPokemon(thisPokemon);
      } catch (err) {
        console.log(err);
      }
    }

    searchedPokemon();
  }, [searchPokemon]);

  const navigateToDetails = useCallback(
    (pokemonId: string) => {
      navigate('Details', { pokemonId });
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
          <PokemonContainer onPress={() => navigateToDetails(pokemon.id)}>
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
                return <PokeTypes key={t.type.name}>{t.type.name}</PokeTypes>;
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
