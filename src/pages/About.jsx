import AboutCard from "../components/AboutCard";
import "./About.css";
import team from "../data/team";

function About() {
  return (
    <main className="about">

      <section className="about-intro">
        <h1 className="cafefont">About Us</h1>

        <p>
          Tasty Asia is a society dedicated to the love of cooking and
          sharing Asian cuisine. Our mission is to create a community
          where food enthusiasts can come together to learn, share,
          and enjoy the art of cooking.
        </p>

        <p>
          We believe that cooking is not just about preparing food,
          but also about creating memories and experiences that bring
          people together.
        </p>
      </section>

      <section className="about-team">

        <h2 className="cafefont">Our Team</h2>

        <p>
          Our team is made up of passionate food enthusiasts who are
          dedicated to sharing their love of cooking with others.
        </p>

        <div className="about-team-list">
          {team.map((member, index) => (
            <AboutCard
              key={member.name}
              {...member}
              side={index % 2 === 0 ? "about-card-left" : "about-card-right"}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default About;