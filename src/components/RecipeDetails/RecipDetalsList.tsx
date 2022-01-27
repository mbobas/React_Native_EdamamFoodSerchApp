/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { DataTable } from 'react-native-paper';

interface RecipesDetailsListProps {
  title: string;
  array: [];
}

const RecipesDetailsList = ({title, array}: RecipesDetailsListProps) => {

  const renderItem = ({ item }:any) => (
    <View>
      <Item item={item}/>
    </View>
  );

  const Item = ({item}:any) => {
    return (
      <View>
        <DataTable.Row>
            <DataTable.Cell>{item}</DataTable.Cell>
        </DataTable.Row>
      </View>
    )
  };

  return (
    <SafeAreaView>
    <DataTable.Header>
        <DataTable.Title>{title}</DataTable.Title>
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

  export default RecipesDetailsList;
