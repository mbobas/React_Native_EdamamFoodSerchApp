/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect } from 'react';
import { Image, ScrollView, View, NativeModules, Button as RNBUtton, } from 'react-native';
import getRecipe from '../../axios/getRecipe';
import { Card, Button } from 'react-native-paper';
import { ButtonItemStyled, ChooseFilterView, FiltersView, HeadeStyled, RecipeImageStyled, ScrollViewCheckBoxStyled, SearchbarStyled, SeparatorItemStyled, TextCheckboxStyled, TextFilterItemStyled, ViewButtonStyled, ViewStyledButton } from './FindRecipesStyled';
import RecipesList from './RecipesList';
import { Checkbox } from 'react-native-paper';
import NewModuleButton from '../NativeModule/NewModuleButton';
const { CalendarModule } = NativeModules;

const FindRecipes: React.FC = ({navigation}:any) => {
  const [searchQuery, setSearchQuery] = React.useState('chicken');
  const [recipesArray, setRecipesArray] = React.useState([{"recipe": { "label": "a"}}]);
  const [dietType, setDietType] = React.useState('balanced');
  const [mealType, setMealType] = React.useState('Breakfast');
  const [isDiet, SetIsDiet] = React.useState(false);
  const [isMealType, SetISMealType] = React.useState(false);
  const [mealTypeArray, setMealTypeArray] = React.useState(['Brakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime' ]);
  const [dietArray, setDietArray] = React.useState(['balanced', 'high-fiver', 'high-protein', 'low-carb', 'low-fat', 'low-sodium']); 

const params = {
  type: 'public',
  q: searchQuery,
  app_id: '82ecfb10',
  app_key: '8c684688ec00f5d49d957a20703ebab0',
  diet: dietType,
  mealType: mealType
};

const onChangeSearch = (query: string) => {
  setSearchQuery(query);
  if(query.length > 3) {
    getRecipe(params, setRecipesArray);
  }
};

const onMealFilter = (item: any) => {
  setMealType(item)
  getRecipe(params, setRecipesArray)
}

const onDietFilter = (item: any) => {
  setDietType(item)
  getRecipe(params, setRecipesArray)
}

const onSuggestMeal = async () => {
  const query: string = await CalendarModule.suggestMeal();
  console.log(query);
  onChangeSearch(query)
};

  useEffect(() => {
      getRecipe(params, setRecipesArray);
  },[]);

  return (
    <View style={{backgroundColor: "white"}}>
      <View>
        <HeadeStyled>Food Recipes</HeadeStyled> 
        <Image
            style={{marginTop: -40, height: 200, zIndex: -1}}
            source={{
            uri: 'https://www.edamam.com/web-img/f0a/f0adbe38374c13e19e70c4e755316054.jpg'
          }}> 
        </Image>
     </View>
      <SearchbarStyled
        placeholder="Search"
        onChangeText={(onChangeSearch)}
        value={searchQuery}
      />
      <FiltersView>
        <Checkbox
          status={isDiet ? 'checked' : 'unchecked'}
          color="tomato"
          onPress={() => {
            SetIsDiet(!isDiet);
          }}/>
        <TextCheckboxStyled>Diet Type Filter</TextCheckboxStyled>
        <Checkbox
          status={isMealType ? 'checked' : 'unchecked'}
          color="tomato"
          onPress={() => {
            SetISMealType(!isMealType);
          }}
        />
        <TextCheckboxStyled>Meal Type Filter</TextCheckboxStyled>
        <ViewButtonStyled >
          <RNBUtton
          title="SUGGEST MEAL"
          color="#b66917"
          onPress={onSuggestMeal}
        />
       </ViewButtonStyled>
      </FiltersView>
      <View>
        <ScrollViewCheckBoxStyled nestedScrollEnabled={true} horizontal={true}>
            {isMealType ? mealTypeArray.map((item) => {
              return (
                <View style={{flex: 1, flexDirection: "row"}}>
                  <ButtonItemStyled color={mealType === item ? "orange" : "tomato"} title={item} onPress={() => onMealFilter(item)}/>
                  <SeparatorItemStyled></SeparatorItemStyled>
                </View>
              )}) : <View></View>}
        </ScrollViewCheckBoxStyled>
      </View>
      <View>
        <ScrollViewCheckBoxStyled horizontal={true} showsHorizontalScrollIndicator={false}>
            {isDiet ? dietArray.map((item) => {
              return (
                <View style={{flex: 1, flexDirection: "row"}}>
                  <ButtonItemStyled color={dietType === item ? "orange" : "tomato"} title={item} onPress={() => onDietFilter(item)}/>
                  <SeparatorItemStyled></SeparatorItemStyled>
                </View>
              )}) : <View></View>}
        </ScrollViewCheckBoxStyled>
      </View>
      <ScrollView>
      <RecipesList  navigation ={navigation} recipesArray={recipesArray}/>
      </ScrollView>
    </View>
  );
};

export default FindRecipes;

