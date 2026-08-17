import PortfolioCoverImage from "../components/PortfolioCoverImage";
import PortfolioRow from "../components/PortfolioOverviewRow";
import PortfolioRowFrame from "../components/PortfolioRowFrame";
import TitleSection from "../components/TitleSection";

export default function AboutMe() {
  return (
    <>
      <TitleSection title="About Me" subtitle="Yup, that's me" />
      <PortfolioRowFrame reverse={false}>
        <PortfolioCoverImage //Double Image
          imageLocationOne="src/Images/AboutMe/SkövdeSlice.jpg"
          altTextOne="Picture of Skövde from the nearby hill of Billingen, taken by me"
          imageCaptionOne="Picture of Skövde from the nearby hill of Billingen, taken by me"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Overview
          imageLocation="src/Images/AboutMe/Photo.jpg"
          altText="Picture of me"
          description="Hiya, welcome to the About Me page.

I grew up in the city of Norrköping, moved to Stockholm when I was 13 and lived there for 6 years. After that I moved to Skövde and studied game design for 6 years, getting a Bachelor’s Degree in Game Design and a Master’s in Digital Narration and Cultural Heritage from Högskolan i Sköve/Skövde University. Sadly that didn't give me a job, but it was a good time. 

Now I'm back in Stockholm looking for work, but I am open to moving to some other part of Sweden (or nearby EU countries) if I find a job there. Currently I'm studying fullstack programming/software development via a course by Lexicon/LTU. I’m also developing my own TTRPG, and organizing board game events at my nearest library. 
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Strategy Games
          imageLocation="src/Images/AboutMe/CK3Reform.jpg"
          altText="Screenshot from Crusader Kings 3 of me reforming the Asatru faith"
          description="I play a variety of games, but as I mentioned in my initial blurb on the front page and you might guess by the rest of my portfolio, strategy games are my favorite. I like grand strategy games (EU4, CK3), 4X's (Civ 5 & 6, Stellaris, Age of Wonders 3 & 4), turn based tactics (Xcom, Darkest Dungeon, Baldur's Gate 3), card games (Slay the Spire 1 & 2, Marvel Snap), city builders (City Skylines, Against The Storm) and more bite-sized strategy games (Slipways, Terraformers, FTL, Into the Breach).

While I like most types of strategy games, I don’t vibe as much with games like Starcraft or Age of Empires, as I find real time strategy games without pause quite stressful. Real time with pause like FTL or Shadow Gambit are cool though.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //Other Games
          imageLocation="src/Images/AboutMe/HFWCauldron.jpg"
          altText="Screenshot from Horizon Forbidden West, me playing as Aloy gliding into a Cauldron"
          description="While I do play a lot of strategy games and Civ 5 is the game I have the most time on steam, it's not close to the game I have spent overall the most time on. Let's just say I am glad Minecraft doesn't have an overall hour count. I haven’t played that much recently, but between different mod packs, servers (both large mini game and friendly servers), custom maps, and vanilla survival I have put in a lot of hours there.

Besides Minecraft, some examples of games I've played and liked a lot are Portal 1 and 2, Subnautica and Below Zero, Hades 1 and 2, Katawa Shoujo, Overwatch, Dispatch, Jusant, and the Mass Effect trilogy and Andromeda. My favorite non strategy games of all time are probably Horizon Zero Dawn and Horizon Forbidden West. Fantastic world, characters, and great gameplay. (Though, please don't make me wait 2 years for the PC port next time Sony). 

I'm not really a Console player, but I also enjoy Mario Kart when I get a chance to play. 
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Board Games
          imageLocation="src/Images/AboutMe/Sugs.jpg"
          altText="Image of (some of) the games at SUGS"
          description="If it wasn't clear already I'm also a big fan of board games. My favorite types of board games are deckbuilders, like Ascension, the Clank! series, Dune Imperium and Dominion. In general I've found that I like games that have a lot of different cards, but aren't ‘just’ card games with predefined/player created decks. There is something about figuring out a plan on the fly from an array of cards that is really fun.

Other games I enjoy include Res Arcana, 7 Wonders, 7 Wonders Duel, SETI, Terraforming Mars, Through The Ages, and smaller games like Hero Realms, Cubirds, Tokaido, Tsuro and Codenames. In general, I just like board games. Currently I would say my favorite board game overall is Dune Imperium with the Rise of Ix expansion.

I used to be part of the leadership at Sugs board game club in Skövde and play board games there (basically) every Tuesday evening, and now since I left Skövde I'm on the hunt for a board game group. Right now I’m organizing board game events once a month at the local library.
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={true}>
        <PortfolioRow //TTRPG
          imageLocation="src/Images/AboutMe/Jadiar 1.1.png"
          altText="A Map I used as setting for a Pathfinder campaign"
          description="And of course TTRPG's (Table Top Role Playing Games) are great, even if session scheduling is the greatest enemy of us all. I have played three characters from roughly level 1 to 5 in DnD fifth edition and they have all been great experiences. Acasez, my online username came from a Lizardfolk Cleric I played in one of those campaigns. I have also DM'd a few different campaigns, in both DND 5e and Pathfinder (2e). I have also been in an Anima Beyond Fantasy campaign, which was interesting. It had some cool ideas, but also a lot of strange systems and unnecessary complexity. 

Currently I am as mentioned designing my own TTRPG called Kastorix, inspired by Pathfinder which you can read about on its tab. I have a group of people I am running that system with every two to three weeks. 
"
        />
      </PortfolioRowFrame>
      <PortfolioRowFrame reverse={false}>
        <PortfolioRow //Reading
          imageLocation="src/Images/AboutMe/Bookshelf.jpg"
          altText="An image a row of my bookshelf"
          description="I also read quite a bit, mostly fantasy books and have a love of interesting worldbuilding and magic systems. Some of my favorite series include The Wandering Inn, Arcane Ascension, Mother of Learning, Riyria, Mistborn, and the Shadow Campaigns. I also enjoy scifi like The Expanse, Wayfarers series, The Martian, Bobiverse and Project Hail Mary. I’m currently looking for something good to read, taking suggestions.

I also read some manga of various genres, with some of my favorites including Lullaby of the Dawn, Bloom Into You, Dr Stone, Magus of the Library and I Hear the Sunspot. And I’ve read quite a bit of fanfics (mostly fluff and canon divergence AU's). I've written some fics of my own, including a Horizon Forbidden West longfic called Meridian Sunsets.
"
        />
      </PortfolioRowFrame>
    </>
  );
}
