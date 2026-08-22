import { useEffect, useState } from "react";
import RecipePage from "./RecipePage";
import "./PageTurn.css";

function PageTurn({
  recipes,
  selectedRecipe,
  onSelectionComplete,
}) {
  const [currentRecipe, setCurrentRecipe] = useState(0);

  const [turning, setTurning] = useState(false);

  const [direction, setDirection] = useState("next");

  const [turningPage, setTurningPage] = useState(null);

  /*
   * Temporary spread used when jumping
   * directly from the sidebar.
   */
  const [jumpTarget, setJumpTarget] = useState(null);


  /*
   * =========================================
   * CURRENT / NEXT / PREVIOUS
   * =========================================
   */

  const current = recipes[currentRecipe];

  const next = recipes[currentRecipe + 1];

  const previous = recipes[currentRecipe - 1];


  if (!current) {
    return null;
  }


  /*
   * =========================================
   * NORMAL NEXT PAGE
   * =========================================
   */

  const nextPage = () => {
    if (turning || !next) {
      return;
    }

    setTurningPage({
      front: current.rightPage,
      back: next.leftPage,

      frontRecipe: current,
      backRecipe: next,
    });

    setDirection("next");
    setTurning(true);

    setTimeout(() => {
      setCurrentRecipe((prev) => prev + 1);

      setTurning(false);
      setTurningPage(null);
    }, 800);
  };


  /*
   * =========================================
   * NORMAL PREVIOUS PAGE
   * =========================================
   */

  const previousPage = () => {
    if (turning || !previous) {
      return;
    }

    setTurningPage({
      front: current.leftPage,
      back: previous.rightPage,

      frontRecipe: current,
      backRecipe: previous,
    });

    setDirection("previous");
    setTurning(true);

    setTimeout(() => {
      setCurrentRecipe((prev) => prev - 1);

      setTurning(false);
      setTurningPage(null);
    }, 800);
  };


  /*
   * =========================================
   * SIDEBAR RECIPE SELECTION
   * =========================================
   *
   * Clicking a recipe in the sidebar:
   *
   *   Current → Target
   *
   * performs ONE page turn.
   *
   * The TARGET SPREAD is placed underneath
   * the animation so there is no content
   * change after the animation finishes.
   */

  useEffect(() => {

    if (
      !selectedRecipe ||
      turning ||
      selectedRecipe.id === current.id
    ) {
      return;
    }


    const targetIndex = recipes.findIndex(
      (recipe) => recipe.id === selectedRecipe.id
    );


    if (targetIndex === -1) {
      return;
    }


    const targetRecipe = recipes[targetIndex];


    /*
     * =====================================
     * FORWARD
     * =====================================
     */

    if (targetIndex > currentRecipe) {

      /*
       * Put the TARGET spread underneath.
       *
       * This is the important part.
       */
      setJumpTarget(targetRecipe);


      setTurningPage({
        front: current.rightPage,
        back: targetRecipe.leftPage,

        frontRecipe: current,
        backRecipe: targetRecipe,
      });

      setDirection("next");
      setTurning(true);


      setTimeout(() => {

        /*
         * Now the target spread is already
         * underneath the animation.
         */
        setCurrentRecipe(targetIndex);

        setTurning(false);
        setTurningPage(null);
        setJumpTarget(null);

        if (onSelectionComplete) {
          onSelectionComplete();
        }

      }, 800);

      return;
    }


    /*
     * =====================================
     * BACKWARD
     * =====================================
     */

    if (targetIndex < currentRecipe) {

      /*
       * Put the TARGET spread underneath.
       */
      setJumpTarget(targetRecipe);


      setTurningPage({
        front: current.leftPage,
        back: targetRecipe.rightPage,

        frontRecipe: current,
        backRecipe: targetRecipe,
      });

      setDirection("previous");
      setTurning(true);


      setTimeout(() => {

        setCurrentRecipe(targetIndex);

        setTurning(false);
        setTurningPage(null);
        setJumpTarget(null);

        if (onSelectionComplete) {
          onSelectionComplete();
        }

      }, 800);
    }

  }, [
    selectedRecipe,
    current,
    currentRecipe,
    recipes,
    turning,
    onSelectionComplete,
  ]);


  return (
    <section className="page-turn">

      <div className="book">


        {/* =====================================
            NEXT SPREAD
        ===================================== */}

        {next && !jumpTarget && (
          <div className="next-spread">

            {/* NEXT LEFT */}

            <div className="book-page book-page-left">

              <RecipePage
                recipe={next}
                page={next.leftPage}
                side="left"
              />

            </div>


            {/* NEXT RIGHT */}

            <div className="book-page book-page-right">

              <RecipePage
                recipe={next}
                page={next.rightPage}
                side="right"
              />

            </div>

          </div>
        )}


        {/* =====================================
            SIDEBAR JUMP TARGET
        ===================================== */}

        {jumpTarget && (
          <div className="next-spread">

            {/* TARGET LEFT */}

            <div className="book-page book-page-left">

              <RecipePage
                recipe={jumpTarget}
                page={jumpTarget.leftPage}
                side="left"
              />

            </div>


            {/* TARGET RIGHT */}

            <div className="book-page book-page-right">

              <RecipePage
                recipe={jumpTarget}
                page={jumpTarget.rightPage}
                side="right"
              />

            </div>

          </div>
        )}


        {/* =====================================
            PREVIOUS SPREAD
        ===================================== */}

        {previous && !jumpTarget && (
          <div className="previous-spread">

            {/* PREVIOUS LEFT */}

            <div className="book-page book-page-left">

              <RecipePage
                recipe={previous}
                page={previous.leftPage}
                side="left"
              />

            </div>


            {/* PREVIOUS RIGHT */}

            <div className="book-page book-page-right">

              <RecipePage
                recipe={previous}
                page={previous.rightPage}
                side="right"
              />

            </div>

          </div>
        )}


        {/* =====================================
            CURRENT SPREAD
        ===================================== */}

        <div
          className={`recipe-spread ${
            turning
              ? `is-turning-${direction}`
              : ""
          }`}
        >

          {/* CURRENT LEFT */}

          <div className="book-page book-page-left">

            <RecipePage
              recipe={current}
              page={current.leftPage}
              side="left"
            />

          </div>


          {/* CURRENT RIGHT */}

          <div className="book-page book-page-right">

            <RecipePage
              recipe={current}
              page={current.rightPage}
              side="right"
            />

          </div>

        </div>


        {/* =====================================
            TURNING PAGE
        ===================================== */}

        {turning && turningPage && (

          <div
            className={`
              turning-page
              turning-page-${direction}
              is-turning
            `}
          >

            {/* FRONT */}

            <div className="page-front">

              <RecipePage
                recipe={turningPage.frontRecipe}
                page={turningPage.front}
                side={
                  direction === "next"
                    ? "right"
                    : "left"
                }
              />

            </div>


            {/* BACK */}

            <div className="page-back">

              <RecipePage
                recipe={turningPage.backRecipe}
                page={turningPage.back}
                side={
                  direction === "next"
                    ? "left"
                    : "right"
                }
              />

            </div>

          </div>

        )}


        {/* =====================================
            SPINE
        ===================================== */}

        <div className="book-spine" />

      </div>


      {/* =====================================
          CONTROLS
      ===================================== */}

      <div className="page-controls">

        <button
          onClick={previousPage}
          disabled={
            currentRecipe === 0 ||
            turning
          }
        >
          ← Previous
        </button>


        <span>
          Recipe {currentRecipe + 1} / {recipes.length}
        </span>


        <button
          onClick={nextPage}
          disabled={
            currentRecipe === recipes.length - 1 ||
            turning
          }
        >
          Next →
        </button>

      </div>

    </section>
  );
}

export default PageTurn;