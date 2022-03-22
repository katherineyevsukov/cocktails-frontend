import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserCocktails } from "../redux/actions/cocktailActions";
import CocktailCard from "./CocktailCard";
import "./../styles/cocktails.css";

function CocktailList({ fetchUserCocktails, cocktails, loading, error }) {
  console.log(cocktails);

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail) => {
        return <CocktailCard key={cocktail.id} cocktail={cocktail} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktailState.cocktails,
    loading: state.cocktailState.cocktailsLoading,
    error: state.cocktailState.cocktailErrorMessage,
  };
};

export default connect(mapStateToProps, { fetchUserCocktails })(CocktailList);
