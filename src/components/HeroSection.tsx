import "../CSS/HeroSection.css";
export default function HeroSection() {
  return (
    <>
      <section id="top" className="intro-box">
        <div className="intro-container">
          <div className="intro-image">
            <img src="src/Images/AboutMe/Photo.jpg" alt="Picture of me" />
          </div>
          <div className="intro-text">
            <h2 className="sectionText">Hi!</h2>
            <p>
              My name is Edvin Skogsholm Sanne and I'm a game designer from
              Sweden. I've studied game design and digital narration at
              Högskolan i Skövde/Skövde University. My main skills lie in
              gameplay, balance and level design. I have also worked on level
              design, programming and UI design. I have 2+ years of experience
              with programming in C# in Unity and some experience with Unreal
              Blueprints, Java/Kotlin, Javascript, SQLite, C++, Python and other
              programming languages.
              <br />
              <br />
              My favorite game genre to both design and play is strategy games,
              though I'm open to working on other genres or on non game
              projects. I also really like worldbuilding, especially in fantasy,
              sci-fi and historical settings.
              <br />
              <br />
            </p>
            <div className="project-links">
              <a href="https://acasez.itch.io" className="project-link itch">
                Itch.io
              </a>
              <a
                href="https://github.com/Acasez"
                className="project-link github"
              >
                Github
              </a>
              <a
                href="https://linkedin.com/in/edvin-skosgholm-sanne"
                className="project-link linkedin"
              >
                Linkedin
              </a>
              <a
                href="mailto:edvin.sanne@gmail.com"
                className="project-link mail"
              >
                Mail
              </a>
            </div>
            <p />
          </div>
        </div>
      </section>
    </>
  );
}
