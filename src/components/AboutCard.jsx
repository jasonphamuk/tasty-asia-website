import "./AboutCard.css";

function AboutCard({ side, name, role, bio, image }) {
  return (
    <div className={`about-card ${side}`}>
      <div className="about-card-text">
        <h3 className="about-card-title">{name} ({role})</h3>
        <p className="about-card-bio">{bio}</p>
      </div>


      <img src={image} alt={name} className="about-card-image" />
    </div>
  );
}

export default AboutCard;