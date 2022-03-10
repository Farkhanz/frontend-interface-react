// Head for import libary
import styled from 'styled-components';

// CSS Settings
import { Header, AppNameComp, SearchComp, SearchInput } from './components/headerComponents';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// Recipe Container List
const RecipeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20;
  justify-content: space-evenly;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const CoverImg = styled.img`
  height: 200px;
`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

const IngredientsLabel = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: black;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  color: green;
  text-align: center;
  margin-bottom: 8px;
`;

const SeeCompleteLabel = styled.span`
  font-size: 18px;
  border: solid 1px #eb3300;
  color: black;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  color: #eb3300;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Header>
        <img src="/paimon-logo.png" width={60} height={60} />
        <AppNameComp style={{ marginTop: 12 }}>
          Paimon Recipe
        </AppNameComp>
        <SearchComp>
          <img src="/icons8-search.svg" width={30} height={30} margin={15} />
          <SearchInput placeholder="Paimon can help you :)" />
        </SearchComp>
      </Header>
      <RecipeList>
        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>
        
        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>
        
        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>

        <RecipeContainer>
            <img src="/paimon-logo.png"/>
            <RecipeName>Recipe One</RecipeName>
            <IngredientsLabel>Ingredients</IngredientsLabel>
            <SeeCompleteLabel>See Complete Recipe</SeeCompleteLabel>
        </RecipeContainer>
      </RecipeList>
    </Container>
  );
}

export default App;
