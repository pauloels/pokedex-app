import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Header = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 20}px;
  padding: 0;
  background-color: #28262e;
  max-height: 120px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const TitleContainer = styled.View`
  position: absolute;
  width: 100%;
`;

export const Title = styled.Text`
  margin-right: auto;
  margin-left: auto;
  color: #e3dada;
  font-size: 28px;
  font-family: 'Roboto-Bold';
`;

export const ImgLogo = styled.Image`
  margin-left: 15px;
`;
