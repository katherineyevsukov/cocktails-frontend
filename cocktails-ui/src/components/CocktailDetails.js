function CocktailDetails({glass_type, garnish, steps, ingredients}) {
  return (
    <>
      <ul className="list-group list-group-flush">
        {ingredients.map(ing => {
        return <li className="list-group-item">{ing.quantity} {ing.name}</li>
      })}
      </ul>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </>
  );
}

export default CocktailDetails;
