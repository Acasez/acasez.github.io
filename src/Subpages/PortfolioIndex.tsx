// Updated PortfolioIndex.tsx
import React from "react";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import TagOverview from "../components/TagOverview";
import TitleSection from "../components/TitleSection";
import PortfolioRow from "../PortfolioRows/PortfolioOverviewRow";
import PortfolioRowFrame from "../PortfolioRows/PortfolioRowFrame";

const tagGroups = [
  {
    title: "Programming Languages",
    tags: ["C#", "Javascript", "Python", "SQLite"],
  },
  {
    title: "Game Engines & Frameworks",
    tags: ["Unity", "Unreal", "Avalonia"],
  },
  {
    title: "Project Types",
    tags: [
      "Game",
      "Asset",
      "Board Game",
      "TTRPG",
      "Website",
      "Level Design",
      "Game Concept",
    ],
  },
  {
    title: "Project Scope",
    tags: ["Solo", "Group", "Professional Project", "Internship"],
  },
];

interface Project {
  imageLocation: string;
  altText: string;
  projectTags: string[];
  name: string;
  subtitle: string;
  projectPageLink?: string;
  description: string;
  itchLink?: string;
  githubLink?: string;
  youtubeLink?: string;
  webpageLinks?: { url: string; label: string }[];
  hasSubpage?: boolean;
}

// Define a type for your project arrays
type ProjectArray = Project[];

export default function PortfolioIndex() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Your projects data - you'll want to move this to a separate file/data structure
  const mainProjects = [
    {
      imageLocation: "images/EdvinsLayeredTooltips/TooltipsInGame.JPG",
      altText: "Example of tooltip",
      projectTags: ["Unity", "C#", "Asset", "Solo"],
      name: "Edvin's Nested Tooltips (2026)",
      subtitle: "Free Unity Asset",
      projectPageLink: "EdvinsNestedTooltips",
      description:
        "Edvin's Nested Tooltips is a Unity Asset I made that allows for easy creation of nested, layered tooltips. Inspired by tooltips seen in games like Crusader Kings 3 and Baldur's Gate 3, this unity asset was designed so me and anyone else could create nested tooltips for their strategy games. It uses a system of Keyword Scriptable Objects to easily add custom keywords. This allow developers to quickly make nested tooltips, and explain custom game mechanics with no need for in-game wikis.",
      itchLink: "https://acasez.itch.io/edvins-nested-tooltips",
      githubLink: "https://github.com/Acasez/EdvinsLayeredTooltips",
    },
    {
      imageLocation: "images/Amsvartne/Amsvartne.JPG",
      altText: "Image of Amsvartne",
      projectTags: ["Unity", "C#", "Game", "Group"],
      name: "Amsvartne (2045-2025)",
      subtitle: "Atmospheric Puzzle Platformer",
      projectPageLink: "Amsvartne",
      description:
        "Amsvartne is a 2D puzzle platformer I made as part of the start up group Corvian Games (now Tiny Creature Games). It focuses on narrative exploration and puzzle solving using light to navigate levels and solve puzzles. It's set in a mystical mine in a fantasy dieselpunk setting. I worked on the game and level design, as well as programming multiple game systems.",
      itchLink: "https://corviangames.itch.io/amsvartne",
    },
    {
      imageLocation: "images/MariestadClimateGame/Gameboard in Play.jpg",
      altText: "Image of the board game in play",
      projectTags: ["Board Game", "Professional Project", "Group"],
      name: "Mariestad Climate Board Game (2022-2024)",
      subtitle:
        "Eurogame style board game about city planning and sustainability",
      projectPageLink: "MariestadClimateGame",
      description:
        "A strategic board game about making a mid-sized Swedish city climate neutral. In the game players play cards to build green power, nature areas to absorb pollution and other projects to achieve sustainability, while managing their income and the opinion of people in the municipality.\n\nI proposed the original idea for the game to the municipality and have worked on game design, balance and testing. I worked with 2D artists Iris Casado, Zoey Wu and Alexander Ros who did the graphic design and card illustrations. It is now printed in use in schools and more in Mariestad",
      webpageLinks: [
        {
          url: "https://mariestad.se/nyheter/nyhetsarkiv/2024-06-03-klimatspelet-mariestad-bidrar-till-den-grona-omstallningen",
          label: "Municipality Project Page",
        },
      ],
    },
    {
      imageLocation: "images/MariestadDigitalAdaptation/MariestadDigital.JPG",
      altText: "Image of the digital game",
      projectTags: ["Unity", "C#", "Game", "Solo"],
      name: "Mariestad Digital Adaptation (2024-2025)",
      subtitle: "Digital Adaptation of the climate board game",
      projectPageLink: "MariestadDigitalAdaptation",
      description:
        "I also made a digital, solo only, adaption of the Mariestad Board Game. It has most of the features of the physical board game and an inbuilt tutorial. It also has the option to be played in either English and Swedish and has options for different amounts of starting pollution, to provide different levels of challenge. I made a script that imports the card data using CSV files for quick playtesting and balancing, a method I use in my Unity projects today.",
      itchLink: "https://acasez.itch.io/mariestad-climate-game",
    },
    {
      imageLocation: "images/IonGames/IonGameDesignLogo.png",
      altText: "Logo of ION Game Design",
      projectTags: ["Board Game", "Internship", "Group"], // Changed from "Board Games" to match your tag list
      name: "ION Internship (2024)",
      subtitle: "Internship at ION Games",
      projectPageLink: "IonInternship",
      description:
        "During the summer of 2024 I had an internship at ION Games, a board game studio in Stockholm, working on playtesting and game design. I helped playtest a variety of games, including Dino Dynasty, Atlas, and Pax Viking Second Edition. I worked with the designers to give feedback on rules, balance and rulebooks. I also did most of the work on the solo rules of Pax Viking Second Edition. Since then I have been in contact with some of the designers and done occasional digital playtests.",
      webpageLinks: [
        {
          url: "https://iongamedesign.com",
          label: "ION Game Design Home Page",
        },
      ],
    },
    {
      imageLocation: "images/HighFrontier/MoveBurn.jpg",
      altText: "Screenshot of the tutorial",
      projectTags: ["Board Game", "Internship", "Group", "Unity", "C#"], // Changed from "Board Games" to match your tag list
      name: "High Frontier Tutorial (2025)",
      subtitle: "Tutorial for the digital adaptation of the board game",
      projectPageLink: "HighFrontierTutorial",
      description:
        "During the fall of 2025 I returned to Ion Games for 3 months to do another internship, this one focusing on the digital side. I worked on making a tutorial and UI improvements for the digital implementation of the board game High Frontier, as well as various bug fixes, performance improvements and debug tools. I worked with many talented interns, as well as game designers in the company.",
    },
    {
      imageLocation: "images/Kastorix/Maps/Kastorix.jpg",
      altText: "Kastorix World Map",
      projectTags: [
        "TTRPG",
        "Solo",
        "Website",
        "Javascript",
        "Python",
        "SQLite",
      ],
      name: "Kastorix (2023-)",
      subtitle: "Fantasy TTRPG",
      projectPageLink: "Kastorix",
      description:
        "Kastorix is a worldbuilding project and TTRPG system I've been working on for a while. Fantasy world set on a moon orbiting a gas giant, featuring an industrial not-quite roman republic led by dragons fighting off eldritch monsters. It also has airships as the main method of travel, magic that's both a science and art form, humans as a minority species and lot's of lovely magitech.\n\nI'm currently playtesting the system with some friends and developing a webpage for the project (see link below) There you can for example find a dynamic character sheet in the style of Pathbuilder for Pathfinder",
      webpageLinks: [
        {
          url: "https://acasez.github.io/Kastorix/RPG%20Overview.html",
          label: "TTRPG Home Page",
        },
        {
          url: "https://acasez.github.io/Kastorix/InteractivePages/CharactherSheet.html",
          label: "Character Sheet",
        },
      ],
    },
    {
      imageLocation: "images/CityState/CityState.jpg",
      altText: "Screenshot of the game during play",
      projectTags: ["Game", "Solo", "Unity", "C#"],
      name: "City State (2022)",
      subtitle: "Turn Based City Builder",
      projectPageLink: "CityState",
      description:
        "City State was made for my Bachelor's Thesis about structure in Tech Trees. It's a fairly short city building game that was made to see how different tech tree structures of tech trees affect the gameplay. It was however still designed to be fun and playable as a game though and I worked on it afterwards to add some juice.",
      itchLink: "https://acasez.itch.io/city-state",
    },
    {
      imageLocation: "images/ToHelAndBack/axeattack.jpg",
      altText:
        "Screenshot of the game during play, showing the main character Sif attacking enemies",
      projectTags: ["Game", "Group", "Unity", "Level Design"],
      name: "To Hel and Back (2021-2022)",
      subtitle: "Norse mythology inspired hack and slash roguelike",
      projectPageLink: "ToHelAndBack",
      description:
        "Hack and Slash about a fallen warrior attempting to battle out of Hel. Defeat the enemies in your way and upgrade your abilities.\n\nStarted as a school project with 10 other students, I worked with game mechanics, balance, UI and level design. 5 of us continued working on it afterwards and it was nominated for the Skövde Academic Game Award (SAGA) in 2021.",
      itchLink: "https://acasez.itch.io/to-hel-and-back", // Fixed the itchLink
      youtubeLink: "https://www.youtube.com/watch?v=7FwxtrYJtMs",
    },
  ];

  const gameDrafts = [
    {
      imageLocation: "images/LandOfTheArcane/EarlyCivicTree.jpg",
      altText: "Image of the civic tree draft",
      projectTags: ["Game Concept", "Solo"],
      name: "Land of the Arcane (2019-2021)",
      subtitle: "Fantasy/Magitech 4X",
      projectPageLink: "LandOfTheArcane",
      description:
        "I really want to make a Fantasy 4X, but can't really make it on my own. Still it's one of my favorite genres and so I have worked on planning out tech trees, worldbuilding and some mechanics. Land of the Arcane is a fantasy 4X inspired by Stellaris, Civilization, Age of Wonders and many other games, and one of my dream projects to make. Still in the planning stages so far.",
    },
  ];

  const smallProjects = [
    {
      imageLocation: "images/Avalonia Garage/ParkedVehicles2.JPG",
      altText: "Image of the program displaying 6 different vehicles parked",
      projectTags: ["Avalonia", "C#", "Solo"], // Changed from "CSharp" to match your tag list
      name: "Avalonia Garage (2026)",
      subtitle: "C# Project",
      description:
        "Currently I'm doing a fullstack programming course at Lexicon/LTU, where we made a garage application in C# as a task. Since I already knew C# I took some extra time to learn Avalonia UI framework and create a UI for it. Features different types of vehicles that can be parked and unparked, a UI with drop downs and filters. Boats and Airplanes take up 2 and 3 respectively spaces in the garage, and can therefore not be added if there isn't enough empty space in a row.",
      githubLink: "https://github.com/Acasez/Garage-With-Avalonia-UI",
    },
    {
      imageLocation: "images/Wizard's Legacy/HalfwayToInventory.JPG",
      altText: "Screenshot of the game, displaying different produced potions",
      projectTags: ["Game", "C#", "Unity", "Solo"],
      name: "Wizards Legacy (2025)",
      subtitle: 'Turn based "Wizard Life Sim"',
      description:
        "Game about learning magic and building magical items/potions/artifice. Designed to be set in the world of Kastorix. Inspired by Thaumcraft and progression fantasy books.\n\nI have an alpha version, but the project is on pause while I develop other projects and figure out the exact game design I want for it. Made my first nested tooltips system as part of the development.",
      hasSubpage: false,
    },
    {
      imageLocation: "images/others/Skulltap.JPG",
      altText:
        "Screenshot of the game, displaying the combat menu against a spider monster",
      projectTags: ["Game", "Unreal"],
      name: "Dungeon of Dice (2024)",
      subtitle: "Dice-based tactical rouge-like",
      description:
        "Dice based turn based tactical rouge-like about exploring an overgrown dungeon. It has a working turn-based dice-centric combat system. Prototype can be found on itch.\n\nIt was made with the other team members at Corvian Games (Now Tiny Creature Games). I worked on combat mechanics, and coded in blueprints. It was a nice refresher in working with blueprints, and I would like to do more projects in Unreal at some point.",
      hasSubpage: false,
    },
    {
      imageLocation: "images/CityState/Exploring.jpg",
      altText: "Screenshot of the game during play",
      projectTags: ["Game", "Solo", "Unity", "C#"],
      name: "City Builder Projects (2022-2024)",
      subtitle: "Turn Based City Builders",
      description:
        "After building City State and getting positive feedback on it I wanted to try to make another city builder. I've tried two different concepts and while neither were great successes, they have both taught me a great deal about making games in Unity and making city builders as games. I plan to set up a page for it later",
      hasSubpage: false,
    },
    {
      imageLocation: "images/others/RuinsOFMagicGif.gif",
      altText:
        "Gif of the game, showing the player character using a magical rift to power a crystal and burning some crates",
      projectTags: ["Game", "C#", "Unity", "Solo"],
      name: "Ruins of Magic (2022)",
      subtitle: "Fantasy Puzzle Platformer",
      description:
        "Puzzle Platformer about exploring magical caves. Use rifts to power crystals, solve puzzles and get around. Made as a project to help me learn to code in Unity.",
      itchLink: "https://acasez.itch.io/ruins-of-magic",
      hasSubpage: false,
    },
    {
      imageLocation: "images/others/Abyss Final 2.JPG",
      altText:
        "Screenshot of the game, showing a battle where a gunner deciding who to shoot",
      projectTags: ["Game", "Unreal"],
      name: "Abyss Tactics (2018-2019)",
      subtitle: "Fantasy Napoleonic Turn Based Tactics",
      description:
        "Local multiplayer turn based tactics game, inspired by Xcom with a Magitech Napoleonic setting. The first larger group project I was part of, I worked on game design, level design and programming using Unreal Blueprints. It was a good learning experience in working with a larger group and project management. It won Best Tech at Klara Game Awards in 2019",
      itchLink: "https://acasez.itch.io/abyss",
      hasSubpage: false,
    },
  ];

  // Filter projects based on selected tag
  const filterProjects = (projects: ProjectArray): ProjectArray => {
    return selectedTag
      ? projects.filter((project) =>
          project.projectTags.includes(selectedTag || ""),
        )
      : projects;
  };

  const filteredMainProjects = filterProjects(mainProjects);
  const filteredGameDrafts = filterProjects(gameDrafts);
  const filteredSmallProjects = filterProjects(smallProjects);

  // Check if we have any projects to display in each section
  const hasMainProjects = filteredMainProjects.length > 0;
  const hasGameDrafts = filteredGameDrafts.length > 0;
  const hasSmallProjects = filteredSmallProjects.length > 0;

  return (
    <>
      <HeroSection />
      {/* Tags and Reset Button Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "16px",
          padding: "0 16px",
        }}
      >
        <TagOverview
          groups={tagGroups}
          selectedTag={selectedTag}
          onTagClick={setSelectedTag}
        />
      </div>
      {hasMainProjects && (
        <>
          <TitleSection
            title="Main Projects"
            subtitle={
              selectedTag
                ? `Showing "${filteredMainProjects.length}" projects tagged with "${selectedTag}"`
                : "Some of the projects I've done. Clicking on the titles go to their link"
            }
          />
          {filteredMainProjects.map((project, index) => (
            <React.Fragment key={index}>
              <PortfolioRowFrame reverse={index % 2 === 0}>
                <PortfolioRow
                  imageLocation={project.imageLocation}
                  altText={project.altText}
                  projectTags={project.projectTags}
                  name={project.name}
                  subtitle={project.subtitle}
                  projectPageLink={project.projectPageLink}
                  description={project.description}
                  itchLink={project.itchLink}
                  githubLink={project.githubLink}
                  youtubeLink={project.youtubeLink}
                  webpageLinks={project.webpageLinks}
                />
              </PortfolioRowFrame>
              {index < filteredMainProjects.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </>
      )}
      {/* Game Drafts Section */}
      {hasGameDrafts && (
        <>
          <TitleSection
            title="Game Drafts and Cancelled projects"
            subtitle="For things that aren't finished, but I still have a lot to say about"
          />
          <hr />
          {filteredGameDrafts.map((project, index) => (
            <React.Fragment key={index}>
              <PortfolioRowFrame reverse={index % 2 === 0}>
                <PortfolioRow {...project} />
              </PortfolioRowFrame>
              {index < filteredGameDrafts.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </>
      )}
      {/* Small Projects Section */}
      {hasSmallProjects && (
        <>
          <TitleSection
            title="Small Projects"
            subtitle="Small or old projects. They lack their own subpage"
          />
          {filteredSmallProjects.map((project, index) => (
            <React.Fragment key={index}>
              <PortfolioRowFrame reverse={index % 2 === 0}>
                <PortfolioRow {...project} />
              </PortfolioRowFrame>
              {index < filteredSmallProjects.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </>
      )}
      {/* Show message if no projects match the filter */}
      {!hasMainProjects && !hasGameDrafts && !hasSmallProjects && (
        <p style={{ textAlign: "center", padding: "20px" }}>
          No projects found with the tag "{selectedTag}". Try another tag!
        </p>
      )}
    </>
  );
}
