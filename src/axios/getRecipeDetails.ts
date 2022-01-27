/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import axiosConfig from "./axiosConfig";
import APILINKS from "../globals/APILinks";


const getRecipeDetails = (params: {}, setDetails:Function, idNumber: string) => {
    axiosConfig
      .get(APILINKS.recipes + idNumber, {params})
      .then((response) => {
        setDetails(response.data.recipe)
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
      });
  };

  export default getRecipeDetails;