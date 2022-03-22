import CocktailCard from './CocktailCard'
import { connect } from "react-redux";
import { fetchRecipe } from "./../redux/actions/cocktailActions"
import { useEffect } from "react"

function CocktailPage({ cocktail, fetchRecipe, steps, ingredients }){

    useEffect(() => {
        fetchRecipe(cocktail.id)
    }, [cocktail, fetchRecipe])

    return (
        <>
        <CocktailCard cocktail={cocktail} steps={steps} ingredients={ingredients} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      cocktail: state.cocktailState.cocktail,
      ingredients: state.cocktailState.cocktailIngredients,
      steps: state.cocktailState.cocktailSteps,
      loading: state.cocktailState.cocktailsLoading,
      error: state.cocktailState.cocktailErrorMessage,
    };
  };

export default connect(mapStateToProps, { fetchRecipe })(CocktailPage)
