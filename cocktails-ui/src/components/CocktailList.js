import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserCocktails } from "../redux/actions/cocktailActions";
import CocktailCard from "./CocktailCard";

function CocktailList({ fetchUserCocktails, cocktails, loading, error }) {
  console.log(cocktails)
  return <CocktailCard />;
}

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktailState.cocktails,
    loading: state.cocktailState.cocktailsLoading,
    error: state.cocktailState.cocktailErrorMessage,
  };
};

export default connect(mapStateToProps, { fetchUserCocktails })(CocktailList);
