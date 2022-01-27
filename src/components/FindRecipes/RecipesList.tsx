/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
import { Button, Card } from 'react-native-paper';


const RecipesList = ({navigation, recipesArray}: any) => {

  const renderItem = ({ item }:any) => (
    <View>
      <Item title={item.recipe.label} imageUrl={item.recipe.image} uri={item.recipe.uri} />
    </View>
  );

  const Item = ({ title, imageUrl, uri}:any) => (
    <View>
      <Card>
      <Card.Actions>
          <Image
            style={{width: 50, height: 50}}
            source={{
            uri: imageUrl,
          }}
        />
        <Button
        onPress={() => {
          navigation.navigate('RecipeDetails', {
            id: uri,
          });
        }}
       >{title}</Button>
      </Card.Actions>
    </Card>
    </View>
  );

    return (
      <SafeAreaView>
        <FlatList
          scrollEnabled={false}
          data={recipesArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'key'+index}
        />
      </SafeAreaView>
    );
  };

  export default RecipesList;
