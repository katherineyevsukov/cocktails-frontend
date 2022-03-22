import CocktailCard from './CocktailCard'
import { connect } from "react-redux";

function CocktailPage({ cocktail }){
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

export default connect(mapStateToProps)(CocktailPage)
