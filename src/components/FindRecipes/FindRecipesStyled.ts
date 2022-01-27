/* eslint-disable prettier/prettier */
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';

export const HeadeStyled = styled(Text)`
    font-size: 30px;
    font-weight: 700;
    align-self: center;
    color: white;
    z-index: 2;
`;

export const SearchbarStyled = styled(Searchbar)`
    margin: 10px;
    margin-top: -20px;
`;

export const FiltersView = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5px;
`;

export const TextCheckboxStyled = styled(Text)`
    display: flex;
    align-self: center;
`;

export const RecipeImageStyled = styled(Image)`
    height: 50px;
    width: 66px,
`;

export const ChooseFilterView = styled(View)`
    margin-bottom: 5px;
`;

export const ScrollViewCheckBoxStyled = styled(ScrollView)`
    align-self: center;     
    margin-bottom: 5px;
`;

export const ButtonItemStyled = styled(Button)`
    display: flex;
    align-self: center;
    font-size: 7px;
`;
export const SeparatorItemStyled = styled(View)`
    font-size: 7px;
    width: 10px;
    height: 10px;
    color: red;
`;

export const ViewButtonStyled = styled(View)`
    margin-left: 10px;
`;





