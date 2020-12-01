import React, { useCallback, useEffect, useState } from 'react';

import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import pokebolalogo from '../../assets/img/pokebolalogo.png';
import { Pokemon } from '../Home/index';
import {
  Header,
  ImgLogo,
  Title,
  TitleContainer,
} from '../../global-styles/header/header.styles';

import {
  BackContainer,
  BackIcon,
  Back,
  PokemonContainerDetails,
  PokemonDetails,
  PokeId,
  PokeImage,
  WeightHeightContainer,
  Weight,
  Height,
  PokeWeight,
  PokeHeight,
  PokeStats,
  AllStatsContainer,
  StatsContainer,
  HorizontalBar,
  Hp,
  Power,
  TotalPower,
  FamilyTree,
  PokemonList,
  PokeStatsContainer,
  DetailsContainer,
  PokemonContainer,
  PokeIdTree,
  PokeName,
  PokeTypes,
  Name,
} from './styles';
import api from '../../services/api';

interface RouteParams {
  pokemonId: string;
}

interface Species {
  evolution_chain: {
    url: string;
  };
}

interface PokemonsEvolutions {
  chain: {
    evolves_to: [
      {
        evolves_to: [
          {
            species: {
              name: string;
            };
          },
        ];

        species: {
          name: string;
        };
      },
    ];
    species: {
      name: string;
    };
  };
}

const Details: React.FC = () => {
  const route = useRoute();
  const { goBack } = useNavigation();
  const { pokemonId } = route.params as RouteParams;

  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [pokemonFamilyTree, setPokemonFamilyTree] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function searchedPokemon(): Promise<void> {
      try {
        const response = await api.get<Pokemon>(`pokemon/${pokemonId}`);

        const thisPokemon = response.data;

        thisPokemon.stats.forEach((p, index) => {
          if (p.stat?.name === 'hp') {
            p.stat.name = 'HP';
          } else if (p.stat?.name === 'attack') {
            p.stat.name = 'ATK';
          } else if (p.stat?.name === 'defense') {
            p.stat.name = 'DEF';
          } else if (p.stat?.name === 'speed') {
            p.stat.name = 'SPD';
          } else if (p.stat.name === 'special-attack') {
            thisPokemon.stats.splice(index, 1);
          }
        });

        thisPokemon.stats.forEach((p, index) => {
          if (p.stat.name === 'special-defense') {
            thisPokemon.stats.splice(index, 1);
          }
        });

        setPokemon(thisPokemon);
      } catch (err) {
        console.log(err);
      }
    }

    searchedPokemon();
  }, [pokemonId]);

  useEffect(() => {
    async function loadEvolution(): Promise<void> {
      try {
        const response = await api.get<Species>(
          `/pokemon-species/${pokemon.name}`,
        );

        const arrayUrl = response.data.evolution_chain.url.split('/');

        const evolutionChain = Number(arrayUrl[arrayUrl.length - 2]);

        const responseEvolution = await api.get<PokemonsEvolutions>(
          `evolution-chain/${evolutionChain}`,
        );

        const pokeList = [];

        pokeList.push(responseEvolution.data.chain.species.name);
        responseEvolution.data.chain.evolves_to.forEach(p =>
          pokeList.push(p.species.name),
        );

        responseEvolution.data.chain.evolves_to.forEach(p =>
          p.evolves_to.forEach(poke => pokeList.push(poke.species.name)),
        );

        const url = pokeList
          .filter(p => p !== pokemon.name)
          .map(p => api.get<Pokemon>(`pokemon/${p}`));

        Promise.all([...url]).then(responses => {
          const result = responses.map(resp => {
            return resp.data;
          });

          result.forEach(res => {
            res.stats.forEach((p, index) => {
              if (p.stat?.name === 'hp') {
                p.stat.name = 'HP';
              } else if (p.stat?.name === 'attack') {
                p.stat.name = 'ATK';
              } else if (p.stat?.name === 'defense') {
                p.stat.name = 'DEF';
              } else if (p.stat?.name === 'speed') {
                p.stat.name = 'SPD';
              } else if (p.stat.name === 'special-attack') {
                res.stats.splice(index, 1);
              }
            });

            res.stats.forEach((p, index) => {
              if (p.stat.name === 'special-defense') {
                res.stats.splice(index, 1);
              }
            });
          });

          setPokemonFamilyTree(result);
        });
      } catch (err) {
        console.log(err);
      }
    }

    loadEvolution();
  }, [pokemon.name]);

  const handleSelectPokemon = useCallback((item: Pokemon) => {
    setPokemon(item);
  }, []);

  return (
    <>
      <Header>
        <ImgLogo source={pokebolalogo} />

        <TitleContainer>
          <Title>Pokédex Details</Title>
        </TitleContainer>
      </Header>

      <BackContainer onPress={goBack}>
        <BackIcon name="arrow-left" size={30} color="#fff" />
        <Back>Back</Back>
      </BackContainer>

      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <PokemonDetails>
          <PokemonContainerDetails>
            <PokeId># {pokemon.id}</PokeId>
            <PokeImage
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
              }}
            />
            <PokeName>{pokemon.name}</PokeName>
            <PokeStatsContainer>
              <WeightHeightContainer>
                <PokeWeight>{pokemon.weight} KG</PokeWeight>
                <Weight>Weight</Weight>
              </WeightHeightContainer>
              <WeightHeightContainer>
                <PokeHeight>{pokemon.height} M</PokeHeight>
                <Height>Height</Height>
              </WeightHeightContainer>
            </PokeStatsContainer>
            <PokeStats>Stats</PokeStats>
            <AllStatsContainer>
              {pokemon.id ? (
                pokemon.stats?.map(p => {
                  return (
                    <StatsContainer key={p.stat?.name}>
                      <Hp>{p.stat.name}</Hp>
                      <HorizontalBar>
                        <Power
                          style={{
                            width: p.base_stat + p.base_stat,
                          }}
                        >
                          <Text style={{ fontSize: 10 }}>
                            {`${p.base_stat}`}/100
                          </Text>
                        </Power>
                        <TotalPower
                          style={{
                            width: 200 - (p.base_stat + p.base_stat),
                          }}
                        />
                      </HorizontalBar>
                    </StatsContainer>
                  );
                })
              ) : (
                <View />
              )}
            </AllStatsContainer>
          </PokemonContainerDetails>
        </PokemonDetails>

        <FamilyTree>Family Tree</FamilyTree>

        <PokemonList
          horizontal
          data={pokemonFamilyTree}
          showsVerticalScrollIndicator={false}
          keyExtractor={poke => poke.name}
          renderItem={({ item: poke }) => (
            <PokemonContainer onPress={() => handleSelectPokemon(poke)}>
              <PokeIdTree># {poke.id}</PokeIdTree>
              <PokeImage
                source={{
                  uri: `https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`,
                }}
              />
              <DetailsContainer>
                <Name>Name: </Name>
                <PokeName>{poke.name}</PokeName>
              </DetailsContainer>
              <DetailsContainer>
                <Name>Types: </Name>
                {poke.id ? (
                  poke.types.map(t => {
                    return (
                      <PokeTypes key={t.type.name}>
                        {`${t.type.name}, `}
                      </PokeTypes>
                    );
                  })
                ) : (
                  <View />
                )}
              </DetailsContainer>
            </PokemonContainer>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Details;
