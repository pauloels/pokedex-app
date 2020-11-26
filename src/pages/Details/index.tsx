import React from 'react';

import pokebolalogo from '../../assets/img/pokebolalogo.png';
import {
  Header,
  ImgLogo,
  Title,
  TitleContainer,
} from '../../global-styles/header/header.styles';

const Details: React.FC = () => {
  return (
    <>
      <Header>
        <ImgLogo source={pokebolalogo} />

        <TitleContainer>
          <Title>Pokédex Details</Title>
        </TitleContainer>
      </Header>
    </>
  );
};

export default Details;
