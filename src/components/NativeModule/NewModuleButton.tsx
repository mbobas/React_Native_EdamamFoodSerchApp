/* eslint-disable prettier/prettier */
import React from 'react';
import { NativeModules, Button, View } from 'react-native';
import { ViewStyled } from './NewModuleButtonStyled';
const { CalendarModule } = NativeModules;

const NewModuleButton = (setSearchQuery: Function) => {

  const onPress = async () => {
    const query: string = await CalendarModule.suggestMeal();
    console.log(query);
    setSearchQuery(query)
  };

  return (
    <ViewStyled >
      <Button
      title="SUGGEST MEAL"
      color="#b66917"
      onPress={onPress}
    />
    </ViewStyled>
  );
};

export default NewModuleButton;