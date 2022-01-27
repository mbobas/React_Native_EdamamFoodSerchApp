/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import axiosConfig from "../axios/axiosConfig";
import APILINKS from "../globals/APILinks";

const getRecipe = (params: {}, setRecipesArray:Function) => {
    axiosConfig
      .get(APILINKS.recipes, {params})
      .then((response) => {
        setRecipesArray(response.data.hits)
      })
      .catch(function() {
        console.log('There has been a problem with your fetch operation: ');
      }
      );
  };

  export default getRecipe;