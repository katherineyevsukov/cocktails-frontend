import CocktailList from './CocktailList'
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserCocktails } from "../redux/actions/cocktailActions";

function Home({ fetchUserCocktails, user}){
  
    useEffect(() => {
        fetchUserCocktails(user)
    })

    

    return (
        <CocktailList />
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.authState.user,
    };
  };

export default connect(mapStateToProps, { fetchUserCocktails })(Home)
