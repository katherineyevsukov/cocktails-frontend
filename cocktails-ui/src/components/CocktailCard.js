import { Link } from 'react-router-dom'
import "./../styles/cocktails.css";

function CocktailCard({ cocktail, ingredients, steps }) {
  const { name, photo, glass_type, garnish, id } = cocktail;
  return (
    <>
      <div className="card cocktail" style={{ width: 25 + "rem" }}>
        <img className="card-img-top" src={photo} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>

        <div className="card-body">
          <Link to={`/cocktail/${id}`} className="card-link">
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

export default CocktailCard;
