import { useEffect, useState } from "react";
import "./MobileCookbook.css";

function MobileCookbook({
  recipes,
  selectedRecipe,
}) {

  /*
   * =========================================
   * CURRENT RECIPE
   * =========================================
   *
   * MobileCookbook keeps its own recipe state.
   *
   * selectedRecipe is only used when the user
   * selects something from the sidebar.
   */
  const [currentRecipe, setCurrentRecipe] =
    useState(() => recipes[0] ?? null);

  const [transitioning, setTransitioning] =
    useState(false);

  const [displayedRecipe, setDisplayedRecipe] =
    useState(() => recipes[0] ?? null);

  /*
   * =========================================
   * SIDEBAR RECIPE SELECTION
   * =========================================
   *
   * When Cookbook tells us that the user has
   * selected a recipe, update our internal
   * recipe.
   *
   * We intentionally do NOT reset the recipe
   * when selectedRecipe becomes null.
   */

  useEffect(() => {

    if (!selectedRecipe) {
      return;
    }

    setCurrentRecipe(selectedRecipe);

  }, [selectedRecipe]);


  /*
   * =========================================
   * HANDLE RECIPE LIST CHANGES
   * =========================================
   *
   * If filtering changes the available recipes
   * and the current recipe is no longer present,
   * fall back to the first available recipe.
   */

  useEffect(() => {

    if (!selectedRecipe) {
      return;
    }

    if (selectedRecipe.id === currentRecipe?.id) {
      return;
    }

    setCurrentRecipe(selectedRecipe);

  }, [selectedRecipe, currentRecipe?.id]);

  useEffect(() => {

    if (!currentRecipe) {
      return;
    }

    if (
      displayedRecipe &&
      displayedRecipe.id === currentRecipe.id
    ) {
      return;
    }

    /*
    * Start the outgoing animation.
    */
    setTransitioning(true);


    /*
    * Wait for the old recipe to animate away
    * before replacing the content.
    */
    const timeout = setTimeout(() => {

      setDisplayedRecipe(currentRecipe);
      setTransitioning(false);

    }, 300);


    return () => {
      clearTimeout(timeout);
    };

  }, [currentRecipe, displayedRecipe]);


  /*
   * =========================================
   * DISPLAYED RECIPE
   * =========================================
   */

  const recipe = displayedRecipe;


  if (!recipe) {
    return null;
  }


  /*
   * =========================================
   * PAGE DATA
   * =========================================
   *
   * Desktop stores content across:
   *
   * leftPage
   * rightPage
   *
   * Mobile simply combines the two into one
   * continuous notebook.
   */

  const leftPage =
    recipe.leftPage ?? {};

  const rightPage =
    recipe.rightPage ?? {};


  /*
   * =========================================
   * RECIPE INFORMATION
   * =========================================
   */

  const prepTime =
    leftPage.prepTime;

  const cookTime =
    leftPage.cookTime;

  const servings =
    leftPage.servings;

  const difficulty =
    leftPage.difficulty;


  /*
   * =========================================
   * SCROLL TO SECTION
   * =========================================
   */

  const scrollToSection = (id) => {

    const element =
      document.getElementById(
        `mobile-recipe-${id}`
      );

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };


  return (
    <article className="mobile-cookbook">

      {/* =====================================
          NOTEBOOK
      ===================================== */}

      <div className="mobile-cookbook-notepad">
        <div
          className={`mobile-cookbook-content ${
            transitioning
              ? "mobile-cookbook-transitioning"
              : ""
          }`}
        >


          {/* ===================================
              RECIPE HEADER
          =================================== */}

          <header className="mobile-recipe-header">

            <h1>
              {recipe.name}
            </h1>

            {recipe.cuisine && (
              <p className="mobile-recipe-cuisine">
                {recipe.cuisine}
              </p>
            )}

            {leftPage.description && (
              <p className="mobile-recipe-description">
                {leftPage.description}
              </p>
            )}

          </header>


          {/* ===================================
              SECTION NAVIGATION
          =================================== */}

          <nav className="mobile-recipe-navigation">

            <button
              type="button"
              onClick={() =>
                scrollToSection("overview")
              }
            >
              Overview
            </button>

            {leftPage.ingredients && (
              <button
                type="button"
                onClick={() =>
                  scrollToSection("ingredients")
                }
              >
                Ingredients
              </button>
            )}

            {rightPage.method && (
              <button
                type="button"
                onClick={() =>
                  scrollToSection("method")
                }
              >
                Method
              </button>
            )}

            {(rightPage.variants ||
              rightPage.dippingSauce ||
              rightPage.sauce ||
              rightPage.pleating ||
              rightPage.dietaryOptions ||
              rightPage.servingSuggestions) && (

              <button
                type="button"
                onClick={() =>
                  scrollToSection("extras")
                }
              >
                Extras
              </button>

            )}

          </nav>


          {/* ===================================
              OVERVIEW
          =================================== */}

          <section
            id="mobile-recipe-overview"
            className="mobile-recipe-section"
          >

            {leftPage.image && (
              <img
                src={leftPage.image}
                alt={recipe.name}
                className="mobile-recipe-image"
              />
            )}


            {(prepTime ||
              cookTime ||
              servings ||
              difficulty) && (

              <div className="mobile-recipe-info">

                {prepTime && (
                  <div>
                    <span>Prep</span>
                    <strong>{prepTime}</strong>
                  </div>
                )}

                {cookTime && (
                  <div>
                    <span>Cook</span>
                    <strong>{cookTime}</strong>
                  </div>
                )}

                {servings && (
                  <div>
                    <span>Serves</span>
                    <strong>{servings}</strong>
                  </div>
                )}

                {difficulty && (
                  <div>
                    <span>Difficulty</span>
                    <strong>{difficulty}</strong>
                  </div>
                )}

              </div>

            )}

          </section>


          {/* ===================================
              INGREDIENTS
          =================================== */}

          {leftPage.ingredients && (

            <section
              id="mobile-recipe-ingredients"
              className="mobile-recipe-section"
            >

              <h2>
                Ingredients
              </h2>

              <ul>

                {leftPage.ingredients.map(
                  (ingredient, index) => (

                    <li key={index}>
                      {ingredient}
                    </li>

                  )
                )}

              </ul>

            </section>

          )}


          {/* ===================================
              METHOD
          =================================== */}

          {rightPage.method && (

            <section
              id="mobile-recipe-method"
              className="mobile-recipe-section"
            >

              <h2>
                Method
              </h2>

              <ol>

                {rightPage.method.map(
                  (step, index) => (

                    <li key={index}>
                      {step}
                    </li>

                  )
                )}

              </ol>

            </section>

          )}


          {/* ===================================
              EXTRAS
          =================================== */}

          {(rightPage.variants ||
            rightPage.dippingSauce ||
            rightPage.sauce ||
            rightPage.pleating ||
            rightPage.dietaryOptions ||
            rightPage.servingSuggestions) && (

            <section
              id="mobile-recipe-extras"
              className="mobile-recipe-section"
            >

              <h2>
                Additional Information
              </h2>


              {/* VARIANTS */}

              {rightPage.variants && (

                <div className="mobile-recipe-extra">

                  <h3>
                    Variations
                  </h3>

                  {Array.isArray(
                    rightPage.variants
                  ) ? (

                    rightPage.variants.map(
                      (variant, index) => (

                        <div key={index}>

                          <h4>
                            {variant.name}
                          </h4>

                          {variant.description && (
                            <p>
                              {variant.description}
                            </p>
                          )}

                          {variant.ingredients && (
                            <ul>
                              {variant.ingredients.map(
                                (ingredient, ingredientIndex) => (
                                  <li
                                    key={
                                      ingredientIndex
                                    }
                                  >
                                    {ingredient}
                                  </li>
                                )
                              )}
                            </ul>
                          )}

                        </div>

                      )
                    )

                  ) : (

                    Object.entries(
                      rightPage.variants
                    ).map(
                      ([name, instructions]) => (

                        <div key={name}>

                          <h4>
                            {name}
                          </h4>

                          <ul>

                            {instructions.map(
                              (instruction, index) => (

                                <li key={index}>
                                  {instruction}
                                </li>

                              )
                            )}

                          </ul>

                        </div>

                      )
                    )

                  )}

                </div>

              )}


              {/* SAUCE */}

              {rightPage.sauce && (

                <div className="mobile-recipe-extra">

                  <h3>
                    {rightPage.sauce.name}
                  </h3>

                  {rightPage.sauce.description && (
                    <p>
                      {rightPage.sauce.description}
                    </p>
                  )}

                  {rightPage.sauce.ingredients && (
                    <ul>
                      {rightPage.sauce.ingredients.map(
                        (ingredient, index) => (
                          <li key={index}>
                            {ingredient}
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {rightPage.sauce.method && (
                    <ol>
                      {rightPage.sauce.method.map(
                        (step, index) => (
                          <li key={index}>
                            {step}
                          </li>
                        )
                      )}
                    </ol>
                  )}

                </div>

              )}


              {/* DIPPING SAUCE */}

              {rightPage.dippingSauce && (

                <div className="mobile-recipe-extra">

                  <h3>
                    {rightPage.dippingSauce.name}
                  </h3>

                  {rightPage.dippingSauce.ingredients && (
                    <ul>
                      {rightPage.dippingSauce.ingredients.map(
                        (ingredient, index) => (
                          <li key={index}>
                            {ingredient}
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {rightPage.dippingSauce.method && (
                    <ol>
                      {rightPage.dippingSauce.method.map(
                        (step, index) => (
                          <li key={index}>
                            {step}
                          </li>
                        )
                      )}
                    </ol>
                  )}

                </div>

              )}


              {/* PLEATING */}

              {rightPage.pleating && (

                <div className="mobile-recipe-extra">

                  <h3>
                    {rightPage.pleating.title}
                  </h3>

                  {rightPage.pleating.note && (
                    <p>
                      {rightPage.pleating.note}
                    </p>
                  )}

                  <ol>
                    {rightPage.pleating.methods.map(
                      (method, index) => (
                        <li key={index}>
                          {method}
                        </li>
                      )
                    )}
                  </ol>

                </div>

              )}


              {/* DIETARY OPTIONS */}

              {rightPage.dietaryOptions && (

                <div className="mobile-recipe-extra">

                  <h3>
                    Dietary Options
                  </h3>

                  {rightPage.dietaryOptions.map(
                    (option, index) => (

                      <div key={index}>

                        <h4>
                          {option.name}
                        </h4>

                        <ul>

                          {option.ingredients.map(
                            (ingredient, ingredientIndex) => (
                              <li
                                key={
                                  ingredientIndex
                                }
                              >
                                {ingredient}
                              </li>
                            )
                          )}

                        </ul>

                      </div>

                    )
                  )}

                </div>

              )}


              {/* SERVING SUGGESTIONS */}

              {rightPage.servingSuggestions && (

                <div className="mobile-recipe-extra">

                  <h3>
                    Serving Suggestions
                  </h3>

                  <ul>

                    {rightPage.servingSuggestions.map(
                      (suggestion, index) => (
                        <li key={index}>
                          {suggestion}
                        </li>
                      )
                    )}

                  </ul>

                </div>

              )}

            </section>

          )}
        </div>

      </div>

    </article>
  );
}

export default MobileCookbook;