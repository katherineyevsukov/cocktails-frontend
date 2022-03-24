function CocktailDetails({ cocktail, steps, ingredients }) {
  console.log(steps)
  return (
    <>
      <p>
        Created By: {cocktail.first_name} {cocktail.last_name}{" "}
      </p>
      <p>Glass Type: {cocktail.glass_type}</p>
      <p>Garnish: {cocktail.garnish}</p>
      <h6>Ingredients</h6>
      <ul className="list-group list-group-flush">
        {ingredients.map((ing) => {
          return (
            <li className="list-group-item">
              {ing.quantity} {ing.name}
            </li>
          );
        })}
      </ul>
      <h6>Instructions</h6>
      {steps.map((step) => {
        return <p className="card-text">{step.step_number}. {step.step_instructions}</p>;
      })}
    </>
  );
}

export default CocktailDetails;
