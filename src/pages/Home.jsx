import { Link } from "react-router";

function Home() {
  return (
    <main>
      <h1>Welcome to Tasty Asia</h1>

      <p>
        We are a dedicated society of food enthusiasts who love to cook food. Our goal is to share our passion for cooking and to create a community where people can come together to learn, share, and enjoy the art of cooking asian cuisine. We believe that cooking is not just about preparing food, but also about creating memories and experiences that bring people together.
      </p>

      <Link to="/cookbook">
        <button>See our recipes</button>
      </Link>
    </main>
  );
}

export default Home;