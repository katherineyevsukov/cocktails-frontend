import { connect } from "react-redux";
import { fetchUserCocktails } from "../redux/actions/cocktailActions";
import CocktailCard from "./CocktailCard";
import "./../styles/cocktails.css";

function CocktailList({ fetchUserCocktails, cocktails, loading, error, user }) {

  return (
    // <div>
    <>
      <div className='user-cocktails'>
      <hr></hr>
        <h3>{user.first_name}'s Cocktails</h3>
        <hr></hr>
      </div>
      <div className="cocktail-list">
        {cocktails.map((cocktail) => {
          return <CocktailCard key={cocktail.id} cocktail={cocktail} />;
        })}
      </div>
      </>
    // </div> 
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
