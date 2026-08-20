import PortfolioDoubleImageRow from "../components/PortfolioDoubleImageRow";
import PortfolioListRow from "../components/PortfolioListRow";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function ToHelAndBack() {
  return (
    <>
      <TitleSection
        title="To Hel And Back"
        subtitle="Norse mythology inspired hack and slash roguelike"
      />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="images/ToHelAndBack/axeattack.jpg"
          altText="Screenshot of the game during play, showing the main character Sif attacking enemies"
          description="Edvin's Nested Tooltips is exactly what it sounds like, it's a Unity Asset that helps easily add nested tooltips. Perfect for strategy games, rpg's or just any game with many mechanics and subsystems. Originally I was planning to put it up for purchase on the Unity Asset Store, but that proved a real hassle so I decided to instead make it available for free on itch.io (though you can still donate on itch if you really like it).
      "
          itchLink="https://acasez.itch.io/edvins-nested-tooltips"
          youtubeLink="https://www.youtube.com/watch?v=7FwxtrYJtMs"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioListRow //Features List
          imageLocation="images/ToHelAndBack/PillarInUnity.jpg"
          altText="A screenshot of the game in the Unity Editor"
          listHeader="Things I worked on"
          listContent={[
            "Worked on design document with rest of the team, planned out features",
            "Planned out level designs in Unity using the Probuilder addon.",
            "Worked with the graphics team on level design and appearance",
            "Balanced by the different enemies and player attacks",
            "Organizing playtests and adapting the game after feedback",
            "Designed the attacks of different enemies with help from the programmers",
            "Designed and balanced the rune system, the roguelike perks",
          ]}
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Double Image
          imageLocationOne="images/ToHelAndBack/earlydesigndraft.jpg"
          altTextOne="Screenshot of a level design wireframe in Unity overlaid with a UI concept"
          imageCaptionOne="Early design draft made by taking a screenshot and laying over UI elements"
          imageLocationTwo="images/ToHelAndBack/probuilder.jpg"
          altTextTwo="Screenshot of two copies a level draft in Unity, one with Probuilder shapes and one with actual models"
          imageCaptionTwo="I started by mapping out levels with Probuilder shapes then replaced them with actual models. Green cylinder represents the player, red represents a melee enemy and blue represents a ranged enemyl"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioDoubleImageRow //Double Image
          imageLocationOne="images/ToHelAndBack/runechoice.jpg"
          altTextOne="Screenshot of the rune choice menu, presenting three options."
          imageCaptionOne="The game has powerups in forms of runes that you can choose between at end of each level. I worked on designing and balancing them"
          imageLocationTwo="images/ToHelAndBack/lightpath.jpg"
          altTextTwo="Screenshot of a level from above"
          imageCaptionTwo="I worked with assets and lighting alongside our graphical team."
        />
      </PortfolioRowFrame>
      <hr />
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Axe Throw
          name="Axe Throw"
          imageLocation="images/ToHelAndBack/axethrow.gif"
          altText="Gif of Throwing the axe and teleporting to it."
          description="One of the challenges of To Hel and Back was making the game feel unique with the limited time and resources we had. One mechanic we used to solve this was the axe throw. Sif, the main character has two axes, a battle axe she uses in melee and a throwing axe.

The player can throw their axe, then by clicking again, teleport to where the axe landed. This can be used to reposition, get out of harm's way, teleport to ranged enemies to attack them in melee and more.

The teleport is however, the player's only movement tool, and needs to be thrown before it can be used. We talked about having a dash mechanic, but chose not to, as only having the axe throw led to more tactical play and planning.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Homing Enemies
          name="Homing Enemies"
          imageLocation="images/ToHelAndBack/homingenemies.gif"
          altText="Gif of large ranged enemy shooting homing projectiles"
          description="We had multiple ideas for how to make interesting enemies that feel different. Enemies with a charge attack, enemies with shields that can only be attacked from one direction, enemies with different weapons. However all of those would require more assets and coding, and our programmers and artists already had a lot on their plate.

We started with two enemies, one melee and one ranged, then made a larger stronger version of both for variety. To further differentiate the larger ranged enemy I tried making their attack different, from the smaller variant. I tried having it shooting multiple projectiles, exploding projectiles and settled on giving it slower homing projectiles.

Alone the player has a few different options for avoiding these, such as making sharp turns, leading them into pillars or teleporting away with their axe. During intense combat encounters they are great for keeping players on their toes, and often serve as a priority target to fight. 
From feedback it seems like the players like these enemies, finding them challenging but not overly hard.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Aggression and Game Flow
          name="Aggression and Game Flow"
          imageLocation="images/ToHelAndBack/axeattack.jpg"
          altText="Screenshot of the player attacking"
          description="One problem we were trying to fix at the end stage of development was the fact that the optimal tactic was to engage as few enemies as possible at a time. While we wanted to promote tactical play, pulling in one enemy at a time from aggro range is not engaging gameplay and doesn't fit the viking theme of the game. We also wanted to avoid mechanics requiring the use of more buttons.

Some people on the team suggested some mechanic that penalized not fighting enemies when possible, like losing health when not in combat. However I would rather want a mechanic that rewarded you for being in battle, instead of penalizing you for being out of it. Mechanics that punish the player have to be clearly displayed and easy to understand otherwise they can feel annoying and unfair.

While we didn't have time to implement it, I designed a combo mechanic where you build up an aggression meter by hitting enemies and then healed based on the size of your combo when you stopped. This would be a risk-reward mechanic as you would have to stop your combo to heal.

Another alternative would be that the player would enter a ‘viking fury’ after hitting with x attacks in quick succession, where they would have a percentile life steal to restore health
"
        />
      </PortfolioRowFrame>
      <hr />
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Character Design
          name="Character Design"
          imageLocation="images/ToHelAndBack/playermodel.jpg"
          altText="Screenshot of the player in Unity"
          imageCaption="The player model in Unity. All enemy models are just this one with a recolor and an attached mask"
          description="While To Hel and Back is finished and the team has split of to work on new projects, we still had lots of ideas that never got implemented. We were discussing bosses, new weapons, new levels and more things.

One of my favorite things design wise that I didn't design was how our enemies looked. Aside from having a cool model thanks to our graphics team they also came up with the idea of the animal heads. There is actually only one character model in the game, Sif's (the main characters) model. The enemies also use this model, but due to the animal masks they wear and some color magic you might not notice that at first.

This animal theme was also a really fun design prompt; designing enemies based on Scandinavian animals and the folklore around them. Implemented in the game we have the melee enemy with a wolf mask and the ranged enemies with a crow mask. I also have design notes and ideas for some other animals if I ever do a similar project.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Other Biomes
          name="Other Biomes"
          imageLocation="images/ToHelAndBack/treebiome.jpg"
          altText="Screenshot of my probuilder draft for the Yggdrasil biome"
          imageCaption="The player model in Unity. All enemy models are just this one with a recolor and an attached mask"
          description="Another thing I designed that never got implemented was the root levels, where the roots of Yggdrasil reach down through the floor and provide terrain. We were discussing this being the next 'biome' in the game but we never got that far. Still I really like that idea and wish I could see one of those levels with same level of art and polish that our current levels have

Similarly I had designed levels with holes and gaps in them that you could throw your axe over. We never got time to make assets for the edges and implement them but it could have been a fun challenge, especially in combination with some more enemies.
"
        />
      </PortfolioRowFrame>
    </>
  );
}
