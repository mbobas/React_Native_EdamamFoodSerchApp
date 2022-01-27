/* eslint-disable prettier/prettier */
import React from 'react';
import { NativeModules, Button } from 'react-native';
const { CalendarModule } = NativeModules;

const NewModuleButton = (setMessage: any) => {

  const onPress = async () => {
    const name: string = await CalendarModule.getLuckyString();
    console.log(name);
    setMessage(name)
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;