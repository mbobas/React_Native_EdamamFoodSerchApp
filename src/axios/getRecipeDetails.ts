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
      .catch();
  };

  export default getRecipeDetails;