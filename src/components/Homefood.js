import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// CSS Settings
import {
  Header, AppNameComp,
  SearchComp, SearchInput
} from './headerComponents';

import {
  RecipeContainer, RecipeName, IngredientsLabel, SeeCompleteLabel
} from './recipeComponents';

const APP_ID = "3a52131c";
const APP_KEY = "723dcf897f4f05dd03d6e0d05a65fd2e";

const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
const RecipeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20;
  justify-content: space-evenly;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  console.log("props", props);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => ( 
              <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weights}</td>
              </tr>))}
            </tbody>
          </table>
        </DialogContent>
      </Dialog>
      <RecipeContainer>
        <img src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsLabel onClick={() => setShow(true)}>Ingredients</IngredientsLabel>
        <SeeCompleteLabel onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeCompleteLabel>
      </RecipeContainer>
    </>
  );
};

const Homefood = () => {
  const [timeoutId, updateTimeoutId] = useState();
  const [ListRecipe, updateListRecipe] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    updateListRecipe(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <img src="/paimon-logo.png" width={60} height={60} />
        <AppNameComp style={{ marginTop: 12 }}>
          Paimon Recipe
        </AppNameComp>
        <SearchComp>
          <img src="/icons8-search.svg" width={30} height={30} margin={15} />
          <SearchInput placeholder="Paimon can help you :)" onChange={onTextChange} />
        </SearchComp>
      </Header>
      <RecipeList>
        {ListRecipe.length &&
          ListRecipe.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))}


        {/* <RecipeContainer>
          <img src="/paimon-logo.png" />
          <RecipeName>Recipe One</RecipeName>
          <IngredientsLabel>Ingredients</IngredientsLabel>
          <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer> */}

        {/* <RecipeContainer>
          <img src="/paimon-logo.png" />
          <RecipeName>Recipe One</RecipeName>
          <IngredientsLabel>Ingredients</IngredientsLabel>
          <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
          <img src="/paimon-logo.png" />
          <RecipeName>Recipe One</RecipeName>
          <IngredientsLabel>Ingredients</IngredientsLabel>
          <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer> */}
      </RecipeList>
    </Container>
  );
}

export default Homefood