import CocktailCard from './CocktailCard'
import { connect } from "react-redux";
import { fetchRecipe } from "./../redux/actions/cocktailActions"
import { useEffect } from "react"

function CocktailPage({ cocktail, fetchRecipe }){

    useEffect(() => {
        fetchRecipe(cocktail.id)
    }, [cocktail, fetchRecipe])

    return (
        <>
        <CocktailCard cocktail={cocktail} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      cocktail: state.cocktailState.cocktail,
      loading: state.cocktailState.cocktailsLoading,
      error: state.cocktailState.cocktailErrorMessage,
    };
  };

export default connect(mapStateToProps, { fetchRecipe })(CocktailPage)
