/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Checkbox, List, Text } from 'react-native-paper';
import { FiltersView } from './FindRecipesStyled';

interface FilterProps {
    isMyDeal?: boolean;
    isDiet?: boolean; 
    setChecked?: Function;
}

const Filter = ({isMyDeal, isDiet, setChecked}: FilterProps) => {

  return (
    <FiltersView>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color="tomato"
      onPress={() => {

      }}/>
      <Text>AAA</Text>
  </FiltersView>
  );
};

export default Filter;