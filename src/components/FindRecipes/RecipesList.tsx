/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styled from 'styled-components';

interface RecipeListProps {
  navigation: any;
  recipesArray: [];
  title: string;
  imageUrl: string;
  uri: string;
}

interface ItemtProps {
  title: string;
  imageUrl: string;
  uri: string;
}

const ImageStyled = styled(Image)`
   height: 50px;
   width: 50px;
`;

const RecipesList = ({navigation, recipesArray}: RecipeListProps) => {

  const renderItem = ({ item }: any ) => (
    <View>
      <Item title={item.recipe.label} imageUrl={item.recipe.image} uri={item.recipe.uri} />
    </View>
  );

  const Item = ({ title, imageUrl, uri}: ItemtProps) => (
    <View>
      <Card>
      <Card.Actions>
          <ImageStyled
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
