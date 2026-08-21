import PortfolioFullText from "../components/PortfolioFullText";
import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TechTreeVisualizer from "../components/TechTreeVisualizer";
import TitleSection from "../components/TitleSection";

export default function LandOfTheArcane() {
  return (
    <>
      <TitleSection
        title="Land Of The Arcane"
        subtitle="Fantasy/Magitech 4X Concept"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="images/LandOfTheArcane/LateTechTree.jpg"
          altText="Screenshot of my tech tree on a Miro board showing the Age of Nations and Age of Magic"
          imageCaption="Part of the tech tree showing Age of Nations and Age of Magic"
          description="Land of the arcane (LOTA) is a concept/design document for a 4X game I've been working on on and off for some time now and a game I want to make at some point. The problem is that while 4X's are a great genre, they don't fit well to indie game development. I like tech trees, fantasy worldbuilding and magitech and so LOTA has been a way to combine those. The main part of the work has been designing a tech and civic tree, but I've also planned out worldbuilding, collected art references and designed systems for species, cultures and unit design. 
					
There is nothing playable connected to LOTA and I haven't worked on it for a bit, but I would still love to make it into a game some day. 
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Features List
          imageLocation="images/LandOfTheArcane/EarlyCivicTree.jpg"
          altText="Screenshot of my civic tree on a Miro board showing the Age of Tribes and Age of Kingdoms"
          listHeader="Things I've worked on"
          listContent={[
            "Initial idea, worldbuilding",
            "Tech and Civic trees",
            "Concept for a dynamic culture system",
            "Ideas for a combat system and a unit editor.",
            "A pitch for the game",
            "Interactive visualiser for the tech and civic trees using Vis.Js",
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioFullText //Overview
          name="Overview"
          description="Land of the Arcane is 4X, similarly to games like Civilization, Humankind, Stellaris and more, but with a fantasy theme. It's obviously not the first fantasy 4X, as games like Age of Wonders, Endless Legend and Thea: The Awakening exist. However most fantasy 4X’s generally have a focus on war and conflict, downplaying elements like the economy, internal politics and diplomacy. They also tend to have a pre-written narrative (a ‘main campaign’), instead of focusing on emergent narratives, which games Civilization, EU4 and Stellaris are so good at creating. Land of the Arcane is instead designed more open, more dynamic, with player-made factions like Stellaris and a mostly symmetric start. I would roughly call it fantasy Civilization with Stellaris species editor.

The actual gameplay itself, I’m still not super decided on, I could see it being turn-based, but it could also be Paradox style realtime with pause. The world would be procedurally generated with world settings like you have when starting a game of Civilization (world size, type, number of continents, etc). Again here is another big choice; hex tiles or shaped provinces like Europa Universalis. One thing I would love to have is having the world be an actual sphere, instead of being a cylinder like the civilization games. This would create some challenges, but it is at least possible to create a sphere out of hexagons if you also have 12 pentagons. Those could be special, inaccessible tiles. Doing this would avoid projection issues and allow you to have a species that lives in snowy environments on the world's poles, and avoid the giant tundras Civ maps typically have. It’s extra good here in a fantasy setting as there could be civilizations (arctic elves, penguinfolk?) living on the poles and later on the game you might wanna fly your airships over the poles.

"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioFullText //The Pitch
          name="The Pitch"
          description="The setting of Land of the Arcane is one of mystery and discovery. The world is vast and full of magic. It has many things we would recognize from ours. Plains, tundras, forests, deserts, mountains. 

But your scouts will also uncover other things, magical things; floating islands, ancient ruins, mushroom forests, strange crystals and so much more. There are species connected to magic, elementals, drakes and spirits. But the real discoveries come from research.

Magic is not something mortals wield in Land of the Arcane, there are no Mages. There are no spellcasters blasting ranks of soldiers with fireballs, no clerics healing others by some god's grace, no druids channeling nature and transforming into animals. No mortals body can hold magic itself. But your civilization can still harness the arcane. In the early eras your smiths might draw runes on weapons that draw on the ambient mana, increasing their strength and durability. Later discoveries have your artificers storing magic, or mana as they call it in special crystals, then using those to power devices of all sorts.

Magitech, they call it. Technology advances. The world is not stuck in the middle ages. The advancement is however based on magic and magical science. Technology follows a different path, one our world never could. 

Airships dot the skies. First small ones built for exploration, using air for lift. Then as industries and factories are built, airship fleets are produced, made of metal, lifted by liquid mana, Aether. Gunpowder isn't a thing, but armies still take to the field armed with Runeguns, propelling bullets by charged mana bursts. Following them are armies of golems, artificial creations animated by magic and made to serve. As science advances new weapons, materials and ideas are discovered and invented. Arcane barriers, adamantium, titanic golems, disintegration beams... 							

But Land of the Arcane is primarily not about war and conflict. A lot of fantasy games already focus on that. The real focus is on the society built on magic that you build. What government does your people have, what culture? How does golem servants change it? How does airship travel? What happens when we lift our cities to the skies? How does a society built on magic look?
"
        />
      </PortfolioRowFrame>
      <TechTreeVisualizer
        title="LOTA Tech Tree"
        jsonPath={"TechTrees/tech_tree_data.json"}
        defaultZoom={0.46}
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="images/LandOfTheArcane/LateTechTree.jpg"
          altText="Screenshot of my tech tree on a Miro board showing the Age of Nations and Age of Magic"
          imageCaption="Part of the tech tree showing Age of Nations and Age of Magic"
          description="Land of the arcane (LOTA) is a concept/design document for a 4X game I've been working on on and off for some time now and a game I want to make at some point. The problem is that while 4X's are a great genre, they don't fit well to indie game development. I like tech trees, fantasy worldbuilding and magitech and so LOTA has been a way to combine those. The main part of the work has been designing a tech and civic tree, but I've also planned out worldbuilding, collected art references and designed systems for species, cultures and unit design. 
					
There is nothing playable connected to LOTA and I haven't worked on it for a bit, but I would still love to make it into a game some day. 
"
        />
      </PortfolioRowFrame>
    </>
  );
}
