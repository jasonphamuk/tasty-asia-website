import "./Contact.css";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";

import {
  Mail,
  Link2,
  GraduationCap,
} from "lucide-react";

function Contact() {
  return (
    <main>
      <section className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Want to keep up with Tasty Asia? Follow us, join our community,
          or just come say hi!
        </p>
      </section>

      <section className="contact-links">
        <a
          href="mailto:tastyasia.soc@sheffield.ac.uk"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <Mail />
          </div>

          <div>
            <h2>Email</h2>
            <p>tastyasia.soc@sheffield.ac.uk</p>
          </div>
        </a>

        <a
          href="https://www.instagram.com/tastyasiasheff"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <FaInstagram />
          </div>

          <div>
            <h2>Instagram</h2>
            <p>@tastyasiasheff</p>
          </div>
        </a>

        <a
          href="https://www.tiktok.com/@tastyasia_sheff"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <FaTiktok />
          </div>
          <div>
            <h2>TikTok</h2>
            <p>@tastyasia_sheff</p>
          </div>
        </a>

        <a
          href="https://linktr.ee/tastyasia.soc?utm_source=linktree_profile_share&ltsid=c8d8f765-f9ef-408e-a5c9-e0882a358a5e"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <Link2 />
          </div>
          <div>
            <h2>Linktree</h2>
            <p>Find all our links</p>
          </div>
        </a>

        <a
          href="https://su.sheffield.ac.uk/activities/view/tasty-asia-society?activity=540"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <GraduationCap />
          </div>
          <div>
            <h2>Student Union</h2>
            <p>Visit our University of Sheffield page</p>
          </div>
        </a>

        <a
          href="https://tr.ee/334X9sWn0N"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <FaWhatsapp />
          </div>
          <div>
            <h2>WhatsApp</h2>
            <p>Join the Tasty Asia group</p>
          </div>
        </a>
      </section>
    </main>
  );
}

export default Contact;