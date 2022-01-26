/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { Button, Card, DataTable } from 'react-native-paper';

const RecipDetalsListDigest = ({title, array}: any) => {

  const renderItem = ({ item }:any) => (
    <View>
      <Item item={item}/>
    </View>
  );

  const Item = ({item}:any) => {
    return (
      <View>
        <DataTable.Row>
            <DataTable.Cell>{item.total}</DataTable.Cell>
        </DataTable.Row>
      </View>
    )
  };

  return (
    <SafeAreaView>
    <DataTable.Header>
        <DataTable.Title>Fat</DataTable.Title>
        <DataTable.Title>Carbs</DataTable.Title>
        <DataTable.Title>Protein</DataTable.Title>
    </DataTable.Header>  
      <FlatList
        scrollEnabled={false}
        data={array}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'key'+index}
      />
    </SafeAreaView>
  );
};

  export default RecipDetalsListDigest;
