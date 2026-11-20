import "../CSS/HeroSection.css";
export default function HeroSection() {
  return (
    <>
      <section id="top" className="bg-linear-to-b from-sky-300">
        <div className="flex flex-row p-3 gap-3">
          <img
            className="rounded-lg w-75 h-75"
            src="images/AboutMe/Photo.jpg"
            alt="Picture of me"
          />
          <div className="text-black text-lg">
            <h2 className="text-4xl text-center underline m-1">Heya!</h2>
            <p>
              My name is Edvin Skogsholm Sanne and I'm a game designer and
              programmer from Sweden. I have a bachelor degree in game design
              and a master’s in digital narration from Högskolan i Skövde/Skövde
              University. I’ve also studied programming through remote courses
              from Uppsala University and Luleå University. My main skills lie
              in gameplay, balance and game programming. I have also worked on
              level design, web development, UI design and more. I have 2+ years
              of experience with programming in C# in Unity and some experience
              with Unity Blueprints, Java/Kotlin, Javascript, C++, Python and
              other programming languages.
              <br />
              <br />
              My favorite game genre to both design and play is strategy games,
              though I have no problem working on other genres or on non game
              projects. I also really like worldbuilding, especially in fantasy
              and historical settings. When I’m not developing games or other
              projects I like to play games of all kinds (video games, board
              games, ttrgps), read books and manga and go out in nature.
            </p>
            <div className="flex m-2 gap-2 justify-center">
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
                LinkedIn
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
