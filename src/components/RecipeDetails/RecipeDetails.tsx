/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import getRecipeDetails from '../../axios/getRecipeDetails';
import { DataTable, Text } from 'react-native-paper';
import {RECIPE} from './recipe'
import { HeadeStyled } from './RecipeDetailsStyled';
import { Dimensions } from 'react-native';
import RecipesList from 'components/FindRecipes/RecipesList';
import RecipesDetailsList from './RecipDetalsList';

const RecipeDetails: React.FC = ({route, navigation }) => {
  const { id } = route.params;
  const idNumber = id.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '');
  const [details, setDetails] = React.useState(RECIPE);
  const vw = Dimensions.get('window').width;
  const vh = Dimensions.get('window').height;

  const params = {
    type: 'public',
    app_id: '82ecfb10',
    app_key: '8c684688ec00f5d49d957a20703ebab0',
  };

  useEffect(()=> {
    getRecipeDetails(params, setDetails, idNumber)
  })

  return (
    <View>
     <HeadeStyled style={{alignSelf: "center"}}>{details.label}</HeadeStyled>
     <Image
             style={{marginTop: -150, height: 200, zIndex: -1}}
            source={{
            uri: details.image,
          }}
        />
      
     <ScrollView>
     <DataTable>
      <DataTable.Header>
        <DataTable.Title>Meal Type</DataTable.Title>
        <DataTable.Title >Calories</DataTable.Title>
        <DataTable.Title>Diet</DataTable.Title>
        <DataTable.Title>Weight</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>{details.mealType}</DataTable.Cell>
        <DataTable.Cell>{details.calories.toPrecision(4)}</DataTable.Cell>
        <DataTable.Cell>{details.dietLabels}</DataTable.Cell>
        <DataTable.Cell>{details.totalWeight.toPrecision(4)+"g"}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Header>
        <DataTable.Title>{details.digest[0].label}</DataTable.Title>
        <DataTable.Title>{details.digest[1].label}</DataTable.Title>
        <DataTable.Title>{details.digest[2].label}</DataTable.Title>
      </DataTable.Header>  
      <DataTable.Row>
        <DataTable.Cell>{details.digest[0].total.toPrecision(4)}</DataTable.Cell>
        <DataTable.Cell>{details.digest[0].total.toPrecision(4)}</DataTable.Cell>
        <DataTable.Cell>{details.digest[0].total.toPrecision(4)}</DataTable.Cell>
      </DataTable.Row>
      <RecipesDetailsList title="Cautions" array={details.cautions}/>
      <RecipesDetailsList title="CousineType" array={details.cuisineType}/>
      <RecipesDetailsList title="Healtt" array={details.healthLabels}/>
      <RecipesDetailsList title="ingredientLines" array={details.ingredientLines}/>
      </DataTable>
     </ScrollView>
    </View>
  );
};


export default RecipeDetails;