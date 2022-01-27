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
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
      }
      );
  };

  export default getRecipe;