import { Link } from "react-router-dom";
import "./../styles/cocktails.css";
import { connect } from "react-redux";
import { setSelectedCocktail } from "./../redux/actions/cocktailActions";
import CocktailDetails from "./CocktailDetails";

function CocktailCard({ cocktail, ingredients, steps, setSelectedCocktail }) {
  const { name, photo, glass_type, garnish, id } = cocktail;

  console.log('hello', ingredients, steps)

  const handleClick = () => {
    setSelectedCocktail(cocktail);
  };

  return (
    <>
      <div className="card cocktail" style={{ width: 25 + "rem" }}>
        <img className="card-img-top" src={photo} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>

        <div className="card-body">
          {(ingredients && steps) ? <CocktailDetails /> : null}
          <Link
            to={`/cocktail/${id}`}
            className="btn btn-primary btn-lg card-link"
            onClick={handleClick}
          >
            See Recipe
          </Link>
          {/* <a href="#" className="card-link">
            Another link
          </a> */}
        </div>
      </div>
    </>
  );
}

export default connect(null, { setSelectedCocktail })(CocktailCard);
