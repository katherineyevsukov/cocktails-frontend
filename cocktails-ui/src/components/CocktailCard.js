function CocktailCard({cocktail, ingredients, steps}) {

    // return (
    //     <p>hello world</p>
    // )
  return (
    <>

    <div className="card cocktail" style={{width: 25+'rem'}}>
      <img className="card-img-top" src="https://images.unsplash.com/photo-1582056509381-33e11b85733f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80" alt="Manhattan" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>

    <div className="card cocktail" style={{width: 25+'rem'}}>
      <img className="card-img-top" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Margarita" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>

    </>
  );
}

export default CocktailCard;
