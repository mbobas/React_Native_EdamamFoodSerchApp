/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect } from 'react';
import { Image, ScrollView, View, NativeModules, Button as RNBUtton } from 'react-native';
import getRecipe from '../../axios/getRecipe';
import { ButtonItemStyled, FiltersView, HeadeStyled,  ScrollViewCheckBoxStyled, SearchbarStyled, SeparatorItemStyled, TextCheckboxStyled, TextFilterItemStyled, ViewButtonStyled, ViewStyledButton } from './FindRecipesStyled';
import RecipesList from './RecipesList';
import { Checkbox } from 'react-native-paper';

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
  const [paramsAxios, setParamsAxios] = React.useState({
    type: 'public',
    q: 'chicken',
    app_id: '82ecfb10',
    app_key: '8c684688ec00f5d49d957a20703ebab0',
    diet: 'balanced',
    mealType: 'Breakfast'
  });

const onChangeSearch = (query: string) => {
  if (query.length > 3) {
    setParamsAxios({...paramsAxios, q: query})
  }
  setSearchQuery(query);
};

const onMealFilter = (item: any) => {
  setMealType(item)
  setParamsAxios({...paramsAxios, mealType: item})
}

const onDietFilter = (item: any) => {
  setDietType(item)
  setParamsAxios({...paramsAxios, diet: item})
}

const onSuggestMeal = () => {
  const query: string = CalendarModule.suggestMeal();
  setSearchQuery(query);
  if (query.length > 3) {
    setParamsAxios({...paramsAxios, q: query})
  }
};

  useEffect(() => {
    const getAsync = async () => {
      getRecipe(paramsAxios, setRecipesArray);
    }
    getAsync();
  },[paramsAxios]);

  return (
    <View style={{backgroundColor: "white"}}>
      <View>
        <HeadeStyled>Food Recipes</HeadeStyled> 
        <Image
            style={{marginTop: -40, height: 210, width:600, zIndex: -1}}
            source={ require('../../assets/header.jpg')}> 
        </Image>
     </View>
      <SearchbarStyled
        placeholder="Search"
        onChangeText={(onChangeSearch)}
        value={searchQuery}
      />
      <FiltersView>
        <ViewButtonStyled >
            <RNBUtton
            title="SEARCH MEAL"
            color="#e68b2a"
            onPress={() => getRecipe(paramsAxios, setRecipesArray)}
          />
        </ViewButtonStyled>
        <ViewButtonStyled >
            <RNBUtton
            title="SUGGEST MEAL"
            color="#98a32d"
            onPress={onSuggestMeal}
          />
        </ViewButtonStyled>
      </FiltersView>
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

