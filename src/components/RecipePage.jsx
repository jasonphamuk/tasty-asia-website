function RecipePage({ recipe, page, side }) {
  if (!page) {
    return null;
  }

  return (
    <article className="recipe-page">

      {/* =====================================
          LEFT PAGE ONLY
      ===================================== */}

      {side === "left" && (
        <>
          {/* TITLE */}

          {recipe?.name && (
            <h3 className="recipe-page-title">
              {recipe.name}
            </h3>
          )}


          {/* CUISINE */}

          {recipe?.cuisine && (
            <p className="recipe-page-cuisine">
              {recipe.cuisine}
            </p>
          )}
        </>
      )}


      {/* =====================================
          DESCRIPTION
      ===================================== */}

      {page.description && (
        <p className="recipe-page-description">
          {page.description}
        </p>
      )}


      {/* =====================================
          IMAGE
      ===================================== */}

      {page.image && (
        <img
          src={page.image}
          alt={recipe?.name || "Recipe"}
          className="recipe-page-image"
        />
      )}


      {/* =====================================
          RECIPE INFORMATION
      ===================================== */}

      {(
        page.prepTime ||
        page.cookTime ||
        page.servings ||
        page.difficulty
      ) && (

        <div className="recipe-info">

          {page.prepTime && (
            <div>
              <span>Prep</span>
              <strong>{page.prepTime}</strong>
            </div>
          )}

          {page.cookTime && (
            <div>
              <span>Cook</span>
              <strong>{page.cookTime}</strong>
            </div>
          )}

          {page.servings && (
            <div>
              <span>Servings</span>
              <strong>{page.servings}</strong>
            </div>
          )}

          {page.difficulty && (
            <div>
              <span>Difficulty</span>
              <strong>{page.difficulty}</strong>
            </div>
          )}

        </div>
      )}


      {/* =====================================
          INGREDIENTS
      ===================================== */}

      {page.ingredients && (
        <section className="recipe-page-section">

          <h4>Ingredients</h4>

          <ul className="recipe-ingredients">
            {page.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            ))}
          </ul>

        </section>
      )}


      {/* =====================================
          METHOD
      ===================================== */}

      {page.method && (
        <section className="recipe-page-section">

          <h4>Method</h4>

          <ol>
            {page.method.map(
              (step, index) => (
                <li key={index}>
                  {step}
                </li>
              )
            )}
          </ol>

        </section>
      )}

    </article>
  );
}

export default RecipePage;