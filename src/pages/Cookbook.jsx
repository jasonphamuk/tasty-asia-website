import { useMemo, useState } from "react";
import CookbookSidebar from "../components/CookbookSidebar";
import FilterCard from "../components/FilterCard";
import PageTurn from "../components/PageTurn";
import recipes from "../data/recipes";
import "./Cookbook.css";
import MobileCookbook from "../components/MobileCookbook";

function Cookbook() {

  /*
   * =========================================
   * FILTER STATE
   * =========================================
   */

  const [filters, setFilters] = useState({
    cuisine: [],
    category: [],
    time: [],
    difficulty: [],
    sort: "name",
  });


  /*
   * =========================================
   * MOBILE SIDEBAR
   * =========================================
   */

  const [sidebarOpen, setSidebarOpen] = useState(false);


  /*
   * =========================================
   * RECIPE SELECTION
   * =========================================
   */

  const [selectedRecipe, setSelectedRecipe] =
    useState(null);


  /*
   * =========================================
   * CONVERT TIME TO MINUTES
   * =========================================
   *
   * Handles values such as:
   *
   * "20 mins"
   * "1 hour"
   * "1 hr 30 mins"
   *
   * Missing values return null.
   */

  const timeToMinutes = (value) => {

    if (!value) {
      return null;
    }

    const text = String(value).toLowerCase();

    let minutes = 0;

    const hoursMatch = text.match(
      /(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|h)\b/
    );

    const minutesMatch = text.match(
      /(\d+(?:\.\d+)?)\s*(?:minutes?|mins?|m)\b/
    );


    if (hoursMatch) {
      minutes +=
        parseFloat(hoursMatch[1]) * 60;
    }


    if (minutesMatch) {
      minutes +=
        parseFloat(minutesMatch[1]);
    }


    return minutes > 0
      ? minutes
      : null;
  };


  /*
   * =========================================
   * GET TOTAL RECIPE TIME
   * =========================================
   */

  const getTotalTime = (recipe) => {

    const prepTime =
      timeToMinutes(recipe.prepTime);

    const cookTime =
      timeToMinutes(recipe.cookTime);


    /*
     * If neither exists, there is no
     * usable time information.
     */

    if (
      prepTime === null &&
      cookTime === null
    ) {
      return null;
    }


    return (
      (prepTime ?? 0) +
      (cookTime ?? 0)
    );
  };


  /*
   * =========================================
   * TIME RANGE MATCHING
   * =========================================
   */

  const matchesTimeRange = (
    recipe,
    ranges
  ) => {

    /*
     * No time filter selected.
     */

    if (ranges.length === 0) {
      return true;
    }


    const totalTime =
      getTotalTime(recipe);


    /*
     * Recipe has no time information.
     * Therefore it cannot match a specific
     * time range.
     */

    if (totalTime === null) {
      return false;
    }


    return ranges.some((range) => {

      switch (range) {

        case "under-15":
          return totalTime < 15;

        case "15-30":
          return (
            totalTime >= 15 &&
            totalTime <= 30
          );

        case "30-60":
          return (
            totalTime > 30 &&
            totalTime <= 60
          );

        case "60-plus":
          return totalTime > 60;

        default:
          return false;
      }

    });
  };


  /*
   * =========================================
   * FILTER RECIPES
   * =========================================
   */

  const filteredRecipes = useMemo(() => {

    let result = [...recipes];


    /*
     * =======================================
     * CUISINE
     * =======================================
     */

    if (filters.cuisine.length > 0) {
      result = result.filter((recipe) => {

        return filters.cuisine.some((cuisine) => {

          // Myanmar / Burmese
          if (cuisine === "Myanmar") {
            return (
              recipe.cuisine === "Myanmar" ||
              recipe.cuisine === "Burmese"
            );
          }

          return recipe.cuisine === cuisine;
        });

      });
    }

    /*
     * =======================================
     * CATEGORY
     * =======================================
     */

    if (filters.category.length > 0) {

      result = result.filter((recipe) =>
        filters.category.includes(
          recipe.category
        )
      );

    }


    /*
     * =======================================
     * TIME
     * =======================================
     */

    if (filters.time.length > 0) {

      result = result.filter((recipe) =>
        matchesTimeRange(
          recipe,
          filters.time
        )
      );

    }


    /*
     * =======================================
     * DIFFICULTY
     * =======================================
     */

    if (filters.difficulty.length > 0) {

      result = result.filter((recipe) => {

        const difficulty =
          recipe.difficulty ??
          recipe.leftPage?.difficulty;


        if (!difficulty) {
          return false;
        }


        return filters.difficulty.includes(
          difficulty
        );

      });

    }


    /*
     * =======================================
     * SORT BY NAME
     * =======================================
     */

    if (filters.sort === "name") {

      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    }


    /*
     * =======================================
     * SORT BY DIFFICULTY
     * =======================================
     */

    if (filters.sort === "difficulty") {

      const difficultyOrder = {
        Easy: 1,
        Medium: 2,
        Hard: 3,
      };


      result.sort((a, b) => {

        const difficultyA =
          a.difficulty ??
          a.leftPage?.difficulty;

        const difficultyB =
          b.difficulty ??
          b.leftPage?.difficulty;


        /*
         * Recipes without difficulty are
         * placed at the end.
         */

        const valueA =
          difficultyOrder[difficultyA] ??
          999;

        const valueB =
          difficultyOrder[difficultyB] ??
          999;


        return valueA - valueB;

      });

    }


    return result;

  }, [filters]);


  /*
   * =========================================
   * FILTER CHANGE
   * =========================================
   */

  const handleFilterChange = (
    type,
    value
  ) => {

    setFilters((currentFilters) => {

      const currentValues =
        currentFilters[type];

      const exists =
        currentValues.includes(value);


      return {
        ...currentFilters,

        [type]: exists
          ? currentValues.filter(
              (item) => item !== value
            )
          : [
              ...currentValues,
              value,
            ],
      };

    });

  };


  /*
   * =========================================
   * SORT CHANGE
   * =========================================
   */

  const handleSortChange = (sort) => {

    setFilters((currentFilters) => ({

      ...currentFilters,

      sort,

    }));

  };


  /*
   * =========================================
   * CLEAR FILTERS
   * =========================================
   */

  const clearFilters = () => {

    setFilters({
      cuisine: [],
      category: [],
      time: [],
      difficulty: [],
      sort: "name",
    });

  };


  /*
   * =========================================
   * RECIPE SELECTION
   * =========================================
   */

  const handleRecipeSelect = (recipe) => {

    setSelectedRecipe(recipe);

    /*
     * Close mobile drawer.
     */

    setSidebarOpen(false);

  };


  /*
   * =========================================
   * SELECTION COMPLETE
   * =========================================
   */

  const handleSelectionComplete = () => {

    setSelectedRecipe(null);

  };


  return (

    <main className="cookbook">


      {/* =====================================
          MOBILE BROWSE BUTTON
      ===================================== */}

      <button
        type="button"
        className="cookbook-mobile-button"
        onClick={() =>
          setSidebarOpen(true)
        }
      >
        ☰ Browse Recipes
      </button>



      {/* =====================================
          MOBILE OVERLAY
      ===================================== */}

      {sidebarOpen && (

        <div
          className="cookbook-sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />

      )}



      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside
        className={`cookbook-sidebar ${
          sidebarOpen
            ? "cookbook-sidebar-open"
            : ""
        }`}
      >

        {/* =================================
            SIDEBAR HEADER
        ================================= */}

        <div className="cookbook-sidebar-header">

          <h2>
            Browse Recipes
          </h2>

          <button
            type="button"
            className="cookbook-sidebar-close"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            ×
          </button>

        </div>



        {/* =================================
            FILTER
        ================================= */}

        <FilterCard
          filters={filters}
          onFilterChange={
            handleFilterChange
          }
          onSortChange={
            handleSortChange
          }
          onClearFilters={
            clearFilters
          }
        />



        {/* =================================
            RECIPE LIST
        ================================= */}

        <CookbookSidebar
          recipes={filteredRecipes}
          onRecipeSelect={
            handleRecipeSelect
          }
        />

      </aside>



      {/* =====================================
          COOKBOOK
      ===================================== */}

      <section className="cookbook-content">

        {recipes.length > 0 ? (

          <>
            {/* =====================================
                DESKTOP COOKBOOK
            ===================================== */}

            <div className="cookbook-desktop">

              <PageTurn
                recipes={recipes}
                selectedRecipe={selectedRecipe}
                onSelectionComplete={
                  handleSelectionComplete
                }
              />

            </div>


            {/* =====================================
                MOBILE COOKBOOK
            ===================================== */}

            <div className="cookbook-mobile">

              <MobileCookbook
                recipes={recipes}
                selectedRecipe={selectedRecipe}
              />

            </div>
          </>

        ) : (

          <div className="cookbook-empty">

            <h1>
              No recipes available
            </h1>

            <p>
              There are currently no recipes.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Cookbook;