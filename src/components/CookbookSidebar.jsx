function CookbookSidebar({
  recipes,
  onRecipeSelect,
}) {

  return (

    <div className="cookbook-recipe-list">

      <h2>
        Recipes
      </h2>


      {recipes.length > 0 ? (

        <ul>

          {recipes.map((recipe) => (

            <li key={recipe.id}>

              <button
                type="button"
                onClick={() =>
                  onRecipeSelect(recipe)
                }
              >

                <span className="cookbook-recipe-name">
                  {recipe.name}
                </span>

                <span className="cookbook-recipe-cuisine">
                  {recipe.cuisine}
                </span>

              </button>

            </li>

          ))}

        </ul>

      ) : (

        <p className="cookbook-sidebar-empty">
          No recipes match your filters.
        </p>

      )}

    </div>
  );
}

export default CookbookSidebar;