import "./FilterCard.css";

function FilterCard({
  filters,
  onFilterChange,
  onSortChange,
  onClearFilters,
}) {
  /*
   * =========================================
   * CUISINES
   * =========================================
   */

  const cuisines = [
    "Chinese",
    "Japanese",
    "Korean",
    "Thai",
    "Vietnamese",
    "Myanmar / Burmese",
    "Filipino",
    "Indian",
  ];


  /*
   * =========================================
   * MEAL TYPES
   * =========================================
   */

  const mealTypes = [
    "Starter",
    "Main",
    "Side",
    "Dessert",
    "Drink",
    "Snack",
  ];


  /*
   * =========================================
   * TIME RANGES
   * =========================================
   *
   * These are based on total cooking time.
   *
   * A recipe without prepTime/cookTime
   * will simply not match a time filter.
   * =========================================
   */

  const timeRanges = [
    {
      label: "Under 15 mins",
      value: "under-15",
    },
    {
      label: "15–30 mins",
      value: "15-30",
    },
    {
      label: "30–60 mins",
      value: "30-60",
    },
    {
      label: "60+ mins",
      value: "60-plus",
    },
  ];


  /*
   * =========================================
   * DIFFICULTY
   * =========================================
   */

  const difficulties = [
    "Easy",
    "Medium",
    "Hard",
  ];


  /*
   * =========================================
   * CHECKBOX HELPER
   * =========================================
   */

  const renderCheckbox = (
    type,
    value,
    label
  ) => (
    <label className="filter-option" key={value}>

      <input
        type="checkbox"
        checked={filters[type].includes(value)}
        onChange={() =>
          onFilterChange(type, value)
        }
      />

      <span>
        {label}
      </span>

    </label>
  );


  return (
    <aside className="filter-card">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="filter-card-header">

        <h3>
          Filter Recipes
        </h3>

        <button
          type="button"
          className="filter-clear-button"
          onClick={onClearFilters}
        >
          Clear
        </button>

      </div>


      {/* =====================================
          CUISINE
      ===================================== */}

      <section className="filter-section">

        <h4>
          Cuisine
        </h4>

        <div className="filter-options">

          {cuisines.map((cuisine) =>
            renderCheckbox(
              "cuisine",
              cuisine,
              cuisine === "Myanmar"
                ? "Myanmar / Burmese"
                : cuisine
            )
          )}

        </div>

      </section>


      {/* =====================================
          MEAL TYPE
      ===================================== */}

      <section className="filter-section">

        <h4>
          Meal Type
        </h4>

        <div className="filter-options">

          {mealTypes.map((mealType) =>
            renderCheckbox(
              "category",
              mealType,
              mealType
            )
          )}

        </div>

      </section>


      {/* =====================================
          TIME RANGE
      ===================================== */}

      <section className="filter-section">

        <h4>
          Total Time
        </h4>

        <div className="filter-options">

          {timeRanges.map((range) =>
            renderCheckbox(
              "time",
              range.value,
              range.label
            )
          )}

        </div>

      </section>


      {/* =====================================
          DIFFICULTY
      ===================================== */}

      <section className="filter-section">

        <h4>
          Difficulty
        </h4>

        <div className="filter-options">

          {difficulties.map((difficulty) =>
            renderCheckbox(
              "difficulty",
              difficulty,
              difficulty
            )
          )}

        </div>

      </section>


      {/* =====================================
          SORT
      ===================================== */}

      <section className="filter-section">

        <h4>
          Sort By
        </h4>

        <label className="filter-option">

          <input
            type="radio"
            name="sort"
            checked={filters.sort === "name"}
            onChange={() =>
              onSortChange("name")
            }
          />

          <span>
            Name
          </span>

        </label>


        <label className="filter-option">

          <input
            type="radio"
            name="sort"
            checked={
              filters.sort === "difficulty"
            }
            onChange={() =>
              onSortChange("difficulty")
            }
          />

          <span>
            Difficulty
          </span>

        </label>

      </section>

    </aside>
  );
}

export default FilterCard;